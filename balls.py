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

    def change_color(self, color):
        self.color = color

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

    def __init__(self, num_balls):
        self.running = True
        self.screen = None
        self.clicks = 0
        self.clock = None
        self.font = None
        self.num_balls = num_balls

        self.balls = []
        radius = self.screen_height * 0.8 / (num_balls * 2)
        colors = [white, black]
        probabilities = [0.7, 0.3]
        vertical_spacing = 2 * radius * 0.866  # espaçamento vertical do triangulo equilatero
        pyramid_height = (num_balls - 1) * vertical_spacing + 2 * radius
        top_margin = (self.screen_height - pyramid_height) / 2
        for i in range(num_balls):
            y = (self.screen_height - top_margin - radius) - (vertical_spacing * i)
            row_length = num_balls - i
            row_width = row_length * 2 * radius
            x_start = (self.screen_width - row_width) / 2 + radius  # início da linha atual, centralizada
            for j in range(num_balls - i):
                chosen_color = random.choices(colors, probabilities)[0]
                x = x_start + j * 2 * radius

                self.balls.append(Ball(radius, chosen_color, x, y))

    def on_init(self):
        pygame.init()
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        self.clock = pygame.time.Clock()
        self.font = pygame.font.Font(pygame.font.get_default_font(), 24)

        pygame.display.set_caption("Balls Pyramid")

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
                    for ball in self.balls:
                        if ball.ball_clicked(pos):  # Verifica se a bola foi clicada
                            self.clicks += 1
                            self.change_adjacent_balls_color(pos)
                            break

            self.screen.fill("red")
            text_surface = self.font.render(f"Clicks: {self.clicks}", True, (0, 0, 0))
            self.screen.blit(text_surface, (10, 10))

            for ball in self.balls:
                ball.draw_ball(self.screen)

            pygame.display.flip()

            self.clock.tick(60)


def main():
    number_of_balls = int(input("Digite o numero de bolas inicial na pirâmide: "))
    game = Game(number_of_balls)
    game.on_loop()

if __name__ == "__main__":
    main()
