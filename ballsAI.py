import pygame
import math
import random

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

        self.balls = []
        self.radius = self.screen_height * 0.8 / (num_balls * 2)
        
        self.reset(self.radius)
    
    def reset(self, radius):
        colors = [white, black]
        probabilities = [0.7, 0.3]
        vertical_spacing = 2 * radius * 0.866  # espaçamento vertical do triangulo equilatero
        pyramid_height = (self.num_balls - 1) * vertical_spacing + 2 * radius
        top_margin = (self.screen_height - pyramid_height) / 2
        for i in range(self.num_balls):
            y = (self.screen_height - top_margin - radius) - (vertical_spacing * i)
            row_length = self.num_balls - i
            row_width = row_length * 2 * radius
            x_start = (self.screen_width - row_width) / 2 + radius  # início da linha atual, centralizada
            for j in range(self.num_balls - i):
                chosen_color = random.choices(colors, probabilities)[0]
                x = x_start + j * 2 * radius

                self.balls.append(Ball(radius, chosen_color, x, y))
        
        self.done = False
        self.state = self.get_state()


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
                        continue

                    for ball in self.balls:
                        if ball.ball_clicked(pos):  # Verifica se a bola foi clicada
                            self.clicks += 1
                            self.change_adjacent_balls_color(pos)
                            break

            self.screen.fill("red")
            text_surface = self.font.render(f"Clicks: {self.clicks}", True, (0, 0, 0))
            self.screen.blit(text_surface, (10, 10))

            pygame.draw.rect(self.screen, blue, self.solve_button)
            label = self.font.render("Solve", True, black)
            self.screen.blit(label, (self.solve_button.x + 10, self.solve_button.y + 5))

            for ball in self.balls:
                ball.draw_ball(self.screen)


            # IA jogando passo a passo
            if self.solving:
                if not self.is_done():
                    actions = self.get_actions()
                    action = max_action(self.q_table, self.state, actions)
                    self.state, done = self.play_step(action)
                    self.clicks += 1
                else:
                    self.solving = False

            pygame.display.flip()

            self.clock.tick(60)

    '''
        Retorna o estado atual do jogo, 0 para bolas pretas e 1 para bolas brancas
    '''
    def get_state(self):
        return tuple(1 if ball.color == black else 0 for ball in self.balls)
    
    def get_actions(self):
        # actions = []
        # for ball in self.balls:
        #     actions.append(ball.x, ball.y)
        actions = list(range(len(self.balls)))
        
        return actions
    
    #Verifica se toda a pirâmide está preta
    def is_done(self):
        return all(c == 1 for c in self.get_state())
    
    def play_step(self, action):
        ball = self.balls[action]
        pos = (ball.x, ball.y)
        for b in self.balls:
            dx = pos[0] - b.x
            dy = pos[1] - b.y
            if math.hypot(dx, dy) <= 3 * self.radius:
                b.change_color()
        self.state = self.get_state()
        return self.state, self.is_done()


def max_action(q_table, state, actions):
    values = [q_table.get((state, a), 0) for a in actions]
    max_val = max(values)
    max_acts = [a for a, v in zip(actions, values) if v == max_val]
    return random.choice(max_acts)

def main():
    number_of_balls = int(input("Digite o numero de bolas inicial na pirâmide: "))
    game = Game(number_of_balls)
    game.on_loop()

if __name__ == "__main__":
    main()