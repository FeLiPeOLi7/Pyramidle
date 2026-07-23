from ballsAI import Game
import numpy as np
from tqdm import tqdm
import random
from collections import defaultdict
import pickle


EPISODES = 100000
ALPHA = 0.7
GAMMA = 0.95
INITIAL_EPSILON = 1
FINAL_EPSILON = 0.01
DECAY = INITIAL_EPSILON / (EPISODES / 2)

class BallsAgent:
    def __init__(
        self,
        game: Game,
        learning_rate: float,
        initial_epsilon: float,
        epsilon_decay: float,
        final_epsilon: float,
        discount_factor: float = GAMMA,
    ):
        """Initialize a Q-Learning agent.

        Args:
            game: The training environment
            learning_rate: How quickly to update Q-values (0-1)
            initial_epsilon: Starting exploration rate (usually 1.0)
            epsilon_decay: How much to reduce epsilon each episode
            final_epsilon: Minimum exploration rate (usually 0.1)
            discount_factor: How much to value future rewards (0-1)
        """
        self.game = game

        # Q-table: maps (state, action) to expected reward
        self.q_values = defaultdict(lambda: np.zeros(len(game.balls)))

        self.lr = learning_rate
        self.discount_factor = discount_factor  # How much we care about future rewards

        # Exploration parameters
        self.epsilon = initial_epsilon
        self.epsilon_decay = epsilon_decay
        self.final_epsilon = final_epsilon

        # Track learning progress
        self.training_error = []

    def get_action(self, obs) -> int:
        """Choose an action using epsilon-greedy strategy.

        Returns:
            action: 0 (stand) or 1 (hit)
        """
        # With probability epsilon: explore (random action)
        if np.random.random() < self.epsilon:
            actions = self.game.get_actions()
            return actions.pop(random.randrange(len(actions)))

        # With probability (1-epsilon): exploit (best known action)
        else:
            return int(np.argmax(self.q_values[obs]))

    def update(
        self,
        obs,
        action: int,
        reward: float,
        terminated: bool,
        next_obs,
    ):
        """Update Q-value based on experience.

        This is the heart of Q-learning: learn from (state, action, reward, next_state)
        """
        # What's the best we could do from the next state?
        # (Zero if episode terminated - no future rewards possible)
        future_q_value = (not terminated) * np.max(self.q_values[next_obs])

        # What should the Q-value be? (Bellman equation)
        target = reward + self.discount_factor * future_q_value

        # How wrong was our current estimate?
        temporal_difference = target - self.q_values[obs][action]

        # Update our estimate in the direction of the error
        # Learning rate controls how big steps we take
        self.q_values[obs][action] = (
            self.q_values[obs][action] + self.lr * temporal_difference
        )

        # Track learning progress (useful for debugging)
        self.training_error.append(temporal_difference)

    def decay_epsilon(self):
        """Reduce exploration rate after each episode."""
        self.epsilon = max(self.final_epsilon, self.epsilon - self.epsilon_decay)

def train(agent: BallsAgent, game: Game):

    for episode in tqdm(range(EPISODES)):
        obs, info = game.reset(game.radius)
        done = False

        # Play one complete hand
        while not done:
            # Agent chooses action (initially random, gradually more intelligent)
            action = agent.get_action(obs)

            # Take action and observe result
            next_obs, reward, terminated, truncated, info = game.step(action)

            # Learn from this experience
            agent.update(obs, action, reward, terminated, next_obs)

            # Move to next state
            done = terminated or truncated
            obs = next_obs

        # Reduce exploration rate (agent becomes less random over time)
        agent.decay_epsilon()

        with open("q_table.pkl", "wb") as f:
            pickle.dump(dict(agent.q_values), f)

if __name__ == "__main__":
    game = Game(num_balls=3)
    agent = BallsAgent(game, ALPHA, INITIAL_EPSILON, DECAY, FINAL_EPSILON)
    
    train(agent=agent, game=game)
