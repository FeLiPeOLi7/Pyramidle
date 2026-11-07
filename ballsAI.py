import pygame
import math
import random
import numpy as np
import torch, torch.nn as nn
import numpy as np

# Cores
white = (255, 255, 255)
black = (0, 0, 0)
red = (213, 50, 80)
green = (0, 255, 0)
blue = (50, 153, 213)


class Ball:
    def __init__(self, radius, color, x, y):
        self.radius = radius
        self.color = color
        self.x = x
        self.y = y

    def change_color(self):
        self.color = black if (self.color == white) else white

    def ball_clicked(self, pos):
        if pos == None:
            return False

        dx = pos[0] - self.x
        dy = pos[1] - self.y
        distance = math.hypot(dx, dy)  # Calcula a distancia de um ponto

        if distance <= self.radius:
            return True

        return False

    def draw_ball(self, screen):
        pygame.draw.circle(screen, self.color, (self.x, self.y), self.radius)

    def get_radius(self):
        return self.radius

    def get_x(self):
        return self.x

    def get_y(self):
        return self.y


class Game:
    # Tamanho da tela
    screen_width = 900
    screen_height = 600

    def __init__(self, num_balls, q_table=None):
        self.running = True
        self.screen = None
        self.clicks = 0
        self.clock = None
        self.font = None
        self.num_balls = num_balls

        self.q_table = q_table or {}
        self.done = False
        self.state = None
        self.solving = False
        self.last_ai_step_time = 0
        self.last_ai_action = None
        self.last_action = None
        self.visited_state_actions = set()

        self.balls = []
        self.adj_matrix = []
        self.steps = 0
        self.max_steps = 30
        self.radius = self.screen_height * 0.8 / (num_balls * 2)

        self.reset(self.radius)
    
    def reset(self, radius, scramble_clicks=None):
        colors = [white, black]
        probabilities = [0.7, 0.3]
        vertical_spacing = 2 * radius * 0.866  # espaçamento vertical do triangulo equilatero
        pyramid_height = (self.num_balls - 1) * vertical_spacing + 2 * radius
        top_margin = (self.screen_height - pyramid_height) / 2

        if not self.balls:
            for i in range(self.num_balls):
                y = (self.screen_height - top_margin - radius) - (vertical_spacing * i)
                row_length = self.num_balls - i
                row_width = row_length * 2 * radius
                x_start = (self.screen_width - row_width) / 2 + radius  # início da linha atual, centralizada
                for j in range(self.num_balls - i):
                    x = x_start + j * 2 * radius
                    self.balls.append(Ball(radius, white, x, y))
            self.build_adjacency_matrix()

        if scramble_clicks is None and self.num_balls >= 5:
            scramble_clicks = min(self.num_balls, 5)

        if scramble_clicks is not None:
            # Curriculum Learning: começa resolvido (todas pretas) e aplica de 1 até K cliques aleatórios
            max_k = min(scramble_clicks, len(self.balls))
            while True:
                for ball in self.balls:
                    ball.color = black
                k = random.randint(1, max(1, max_k))
                chosen_actions = random.sample(range(len(self.balls)), k=k)
                for act in chosen_actions:
                    for i, val in enumerate(self.adj_matrix[act]):
                        if val == 1:
                            self.balls[i].change_color()
                self.state = self.get_state()
                if not self.is_done():
                    break
        else:
            while True:
                for ball in self.balls:
                    ball.color = random.choices(colors, probabilities)[0]
                self.state = self.get_state()
                if self.is_solvable() and not self.is_done():
                    break

        self.done = False
        self.steps = 0
        self.max_steps = max(len(self.balls) * 2, 10)
        self.last_action = None
        self.visited_state_actions.clear()

        return self.state, {}


    def on_init(self):
        pygame.init()
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        self.clock = pygame.time.Clock()
        self.font = pygame.font.Font(pygame.font.get_default_font(), 24)

        pygame.display.set_caption("Balls Pyramid")
        self.solve_button = pygame.Rect(10, 50, 80, 30)

    def change_adjacent_balls_color(self, pos):
        for ball in self.balls:
            dx = pos[0] - ball.get_x()
            dy = pos[1] - ball.get_y()
            distance = math.hypot(dx, dy)  # Calcula a distancia de um ponto
            if distance <= 3 * ball.radius:
                ball.color = black if (ball.color == white) else white

    def build_adjacency_matrix(self):
        self.adj_matrix = [[0 for _ in range(0, len(self.balls))] for _ in range(0, len(self.balls))]
        
        for i, adj in enumerate(self.balls):
            for j, ball in enumerate(self.balls):
                dx = adj.get_x() - ball.get_x()
                dy = adj.get_y() - ball.get_y()
                distance = math.hypot(dx, dy)  # Calcula a distancia de um ponto

                if distance <= 3 * ball.radius:
                     self.adj_matrix[i][j] = 1
        
        # Fazendo o escalonamento a priori para guardar o resultado e ser mais eficiente
        N = len(self.balls)
        self.pivot_cols = []
        
        # Matriz aumentada [Adj | I]
        aug = np.hstack([np.array(self.adj_matrix, dtype=np.uint8), np.eye(N, dtype=np.uint8)])        
        pivot_row = 0

        for col in range(N):
            for r in range(pivot_row, len(self.balls)):
                if aug[r][col] == 1:
                    # Swap rows
                    aug[[pivot_row, r]] = aug[[r, pivot_row]]
                    
                    for l in range(0, len(self.balls)):
                        if l != pivot_row and aug[l][col] == 1:
                            aug[l] ^= aug[pivot_row]
                     
                    pivot_row += 1
                    self.pivot_cols.append(col)
                    break
        
        # Guarda o resultado do escalonamento
        self.R = aug[:, N:] 
        self.pivot_row = pivot_row
 
        
        
    def is_solvable(self):
        """
        Basicamente transforma o jogo em um sistema linear, onde A eh a matriz de adjacencia entre as bolas
        e b eh o vetor solucao (se uma bola precisa ser pintada ou nao). A partir disso, faz o escalonamento e verifica se
        o sistema eh consistente ou inconsistente.
        """
        b = np.array([0 if s == 1 else 1 for s in self.state], dtype=np.uint8)
        
        last_col = (self.R @ b) & 1

        return int(last_col[self.pivot_row:].sum()) == 0

    def get_gf2_action(self):
        b = np.array([0 if s == 1 else 1 for s in self.state], dtype=np.uint8)
        ultima_coluna = (self.R @ b) & 1
        for r in range(self.pivot_row):
            if ultima_coluna[r] == 1:
                return self.pivot_cols[r]  # Retorna a primeira bola que precisa ser clicada
        return 0


    def on_loop(self):
        self.on_init()

        while self.running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                if event.type == pygame.MOUSEBUTTONUP:
                    pos = pygame.mouse.get_pos()

                    if self.solve_button.collidepoint(pos):
                        self.solving = True
                        self.state = self.get_state()
                        self.last_ai_step_time = pygame.time.get_ticks()
                        self.last_ai_action = None
                        self.last_action = None
                        self.visited_state_actions.clear()
                        continue

                    for idx, ball in enumerate(self.balls):
                        if ball.ball_clicked(pos):  # Verifica se a bola foi clicada
                            self.clicks += 1
                            self.last_ai_action = None
                            self.last_action = idx
                            self.change_adjacent_balls_color(pos)
                            self.state = self.get_state()
                            break

            self.screen.fill("red")
            text_surface = self.font.render(f"Clicks: {self.clicks}", True, (0, 0, 0))
            self.screen.blit(text_surface, (10, 10))

            pygame.draw.rect(self.screen, blue, self.solve_button)
            label = self.font.render("Solve", True, black)
            self.screen.blit(label, (self.solve_button.x + 10, self.solve_button.y + 5))

            for i, ball in enumerate(self.balls):
                ball.draw_ball(self.screen)
                if self.last_ai_action == i:
                    pygame.draw.circle(self.screen, green, (ball.x, ball.y), ball.radius, 4)


            # IA jogando passo a passo (1 passo a cada 300ms) ou utilizando Álgebra Linear para resolver problemas que explodem em relação a quantidade de combinaçoes possiveis (2^total_balls)
            if self.solving:
                now = pygame.time.get_ticks()
                if not self.is_done() and self.is_solvable():
                    if now - self.last_ai_step_time >= 300:
                        if self.num_balls <= 8:
                            actions = self.get_actions()
                            action = max_action(
                                self.q_table,
                                self.state,
                                actions,
                                len(self.balls),
                                self.last_action,
                                self.visited_state_actions,
                            )
                        else:
                            action = self.get_gf2_action()

                        self.last_ai_action = action
                        self.state, done = self.play_step(action)
                        self.clicks += 1
                        self.last_ai_step_time = now
                else:
                    self.solving = False
                    self.running = False

                    if not self.is_done():
                        print("Insolucionavel!")



            pygame.display.flip()

            self.clock.tick(60)

    
    def get_state(self):
        """ 
        Retorna o estado atual do jogo, 0 para bolas pretas e 1 para bolas brancas
        """
        return tuple(1 if ball.color == black else 0 for ball in self.balls)
    
    def get_actions(self): 
        actions = list(range(len(self.balls)))
        
        return actions
    
    #Verifica se toda a pirâmide está preta
    def is_done(self):
        return all(c == 1 for c in self.get_state())
    
    def play_step(self, action):
        if self.state is not None:
            self.visited_state_actions.add((self.state, action))
        self.last_action = action

        for i, val in enumerate(self.adj_matrix[action]):
            if val == 1:
                self.balls[i].change_color()

        self.state = self.get_state()

        return self.state, self.is_done()

    def clicks_remaining(self):
        """
        Usa o mesmo escalonamento de is_solvable() e soma quantos pivôs têm 1
        na última coluna (quantidade de cliques que faltam para resolver).
        """
        b = [0 if s == 1 else 1 for s in self.state]

        last_col = (self.R @ b) & 1

        return int(last_col[:self.pivot_row].sum())

    def step(self, action):
        dist_antes = self.clicks_remaining()
        next_state, terminated = self.play_step(action)
        dist_depois = self.clicks_remaining()

        self.steps += 1

        if terminated:
            reward = 100
        elif dist_antes > dist_depois:
            reward = 2
        else: 
            reward = -3

        truncated = False
        if self.steps >= self.max_steps:
            truncated = True

        return next_state, reward, terminated, truncated, {}


def max_action(model, state, actions, qtd_balls, last_action=None, visited_state_actions=None):
    if isinstance(model, nn.Module):
        state_tensor = torch.tensor(state, dtype=torch.float32)
        with torch.no_grad():
            q_values = model(state_tensor).clone()

        if len(actions) > 1:
            # 1) Bloqueia clicar na mesma bola 2 vezes seguidas (pingue-pongue imediato)
            if last_action is not None:
                q_values[last_action] = -float("inf")

            # 2) Bloqueia repetir a mesma ação caso o tabuleiro tenha voltado a um estado idêntico já visitado
            if visited_state_actions is not None:
                masked_q = q_values.clone()
                for a in actions:
                    if (state, a) in visited_state_actions:
                        masked_q[a] = -float("inf")
                if torch.max(masked_q) > -float("inf"):
                    q_values = masked_q

        return int(torch.argmax(q_values).item())

    return random.choice(actions)

class QNetwork(nn.Module):
    def __init__(self, num_balls):
        super().__init__()

        self.model = nn.Sequential(
            nn.Linear(num_balls, 128),
            nn.ReLU(),
            nn.Linear(128, 128),
            nn.ReLU(),
            nn.Linear(128, num_balls)
        )

    def forward(self, x):
        return self.model(x)


MAX_AI_BALLS = 8


def main():
    number_of_balls = int(input("Digite o numero de bolas inicial na pirâmide: "))

    game = Game(number_of_balls)

    if number_of_balls <= MAX_AI_BALLS:
        model = QNetwork(len(game.balls))
        try:
            all_models = torch.load("dqn_model.pth", weights_only=True)
            if isinstance(all_models, dict) and number_of_balls in all_models:
                model.load_state_dict(all_models[number_of_balls])
            else:
                model.load_state_dict(all_models)
            model.eval()
            game.q_table = model
            print(f"Modelo para {number_of_balls} bolas carregado com sucesso!")
        except FileNotFoundError:
            print("Aviso: O arquivo 'dqn_model.pth' não foi encontrado. Rode train.py primeiro.")
        except Exception as e:
            print(f"Ocorreu um erro ao carregar o modelo: {e}")


    game.on_loop()

if __name__ == "__main__":
    main()
