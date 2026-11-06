from ballsAI import Game, QNetwork, max_action
import os
import numpy as np
from tqdm import tqdm
import random
from collections import deque
import torch, torch.nn as nn, torch.optim as optim
import matplotlib.pyplot as plt


EPISODES = 1500
MAX_BALLS = 8
ALPHA = 0.001
GAMMA = 0.95
INITIAL_EPSILON = 1.0
FINAL_EPSILON = 0.05
DECAY = (INITIAL_EPSILON - FINAL_EPSILON) / (EPISODES * 0.75)
CAPACITY = 15000
BATCH_SZ = 64

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

        self.policy_net = QNetwork(len(game.balls))
        self.target_net = QNetwork(len(game.balls))

        self.target_net.load_state_dict(self.policy_net.state_dict())
        
        self.lr = learning_rate
        self.optimizer = optim.Adam(self.policy_net.parameters(), self.lr)
        self.criterion = nn.MSELoss()
        self.discount_factor = discount_factor  # How much we care about future rewards

        self.memory = ReplayBuffer(CAPACITY)
        self.batch_size = BATCH_SZ

        # Exploration parameters
        self.epsilon = initial_epsilon
        self.epsilon_decay = epsilon_decay
        self.final_epsilon = final_epsilon

        # Track learning progress
        self.training_error = []
        self.step_count = 0

    def get_action(self, obs) -> int:
        """Choose an action using epsilon-greedy strategy with anti-loop protection."""
        actions = self.game.get_actions()

        # With probability epsilon: explore (random action avoiding immediate ping-pong)
        if np.random.random() < self.epsilon:
            valid_actions = [
                a
                for a in actions
                if a != self.game.last_action
                and (obs, a) not in self.game.visited_state_actions
            ]
            if not valid_actions:
                valid_actions = [a for a in actions if a != self.game.last_action] or actions
            return random.choice(valid_actions)

        # With probability (1-epsilon): exploit (best known action with cycle protection)
        return max_action(
            self.policy_net,
            obs,
            actions,
            len(self.game.balls),
            self.game.last_action,
            self.game.visited_state_actions,
        )

    def update(
        self,
        obs,
        action: int,
        reward: float,
        terminated: bool,
        next_obs,
    ):
        """Update Q-value based on experience.

        This is the heart of Deep Q-Network: learn from (state, action, reward, next_state)
        """
        
        # Store the transition in replay memory and wait until we have enough samples for a batch
        self.memory.push(obs, action, reward, next_obs, terminated)
        self.step_count += 1

        # Wait to accumulate memories and update every 2 steps for speed
        if len(self.memory) < self.batch_size or self.step_count % 2 != 0:
            return
        
        # Sample a random minibatch of transitions and convert them into PyTorch tensors
        batch = self.memory.sample(self.batch_size)
        states, actions, rewards, next_states, terminateds = zip(*batch)

        states = torch.as_tensor(np.array(states, dtype=np.float32))
        actions = torch.as_tensor(np.array(actions, dtype=np.int64))
        rewards = torch.as_tensor(np.array(rewards, dtype=np.float32))
        terminateds = torch.as_tensor(np.array(terminateds, dtype=np.float32))
        next_states = torch.as_tensor(np.array(next_states, dtype=np.float32))
        
        # What did our policy network predict for the action we actually took? Q(s, a)
        current_q = self.policy_net(states).gather(1, actions.unsqueeze(1)).squeeze(1)

        # What's the best we could do from the next state using Double DQN?
        # (Zero if episode terminated - no future rewards possible)
        with torch.no_grad():
            best_next_actions = self.policy_net(next_states).argmax(1, keepdim=True)
            max_next_q = self.target_net(next_states).gather(1, best_next_actions).squeeze(1)
            future_q_value = (1 - terminateds) * max_next_q

            # What should the Q-value be? (Bellman equation)
            target_q = rewards + self.discount_factor * future_q_value

        # How wrong was our current estimate? (Mean Squared Error between prediction and target)
        loss = self.criterion(current_q, target_q)

        # Update neural network weights via backpropagation in the direction that reduces the error
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()

        # Track learning progress (useful for debugging)
        self.training_error.append(loss.item())


    def decay_epsilon(self):
        """Reduce exploration rate after each episode."""
        self.epsilon = max(self.final_epsilon, self.epsilon - self.epsilon_decay)

class ReplayBuffer():
    def __init__(self, capacity):
        self.buffer = deque(maxlen=capacity)

    def push(self, state, action, reward, next_state, terminated):
        self.buffer.append((state, action, reward, next_state, terminated))

    def sample(self, batch_size):
        return random.sample(self.buffer, batch_size)

    def __len__(self):
        return len(self.buffer)


def moving_average(values, window=50):
    if len(values) < window:
        return values
    return np.convolve(values, np.ones(window) / window, mode="valid")


def plot_learning_curves(metrics_by_size, output_path="assets/learning_curves.png"):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    plt.style.use("seaborn-v0_8-darkgrid" if "seaborn-v0_8-darkgrid" in plt.style.available else "default")

    fig, axes = plt.subplots(1, 3, figsize=(18, 5.2), dpi=160)
    fig.patch.set_facecolor("#0f172a")
    palette = ["#38bdf8", "#4ade80", "#facc15", "#fb923c", "#f472b6", "#a78bfa", "#2dd4bf", "#f87171"]

    for ax in axes:
        ax.set_facecolor("#1e293b")
        ax.tick_params(colors="#cbd5e1")
        ax.xaxis.label.set_color("#e2e8f0")
        ax.yaxis.label.set_color("#e2e8f0")
        ax.title.set_color("#f8fafc")
        for spine in ax.spines.values():
            spine.set_color("#334155")
        ax.grid(True, color="#334155", linestyle="--", alpha=0.5)

    for idx, (n, data) in enumerate(sorted(metrics_by_size.items())):
        color = palette[idx % len(palette)]
        label = f"Base {n} ({n * (n + 1) // 2} bolas)"

        win_ma = moving_average(data["wins"], window=60) * 100
        axes[0].plot(win_ma, label=label, color=color, linewidth=2)

        rew_ma = moving_average(data["rewards"], window=60)
        axes[1].plot(rew_ma, label=label, color=color, linewidth=2)

        if len(data["losses"]) > 60:
            loss_ma = moving_average(data["losses"], window=60)
            axes[2].plot(loss_ma, label=label, color=color, linewidth=1.8, alpha=0.9)

    axes[0].set_title("Taxa de Vitória (Win Rate %)", fontsize=13, fontweight="bold")
    axes[0].set_xlabel("Episódio")
    axes[0].set_ylabel("Vitórias (%) - Média Móvel (60 ep)")
    axes[0].set_ylim(-5, 105)
    axes[0].legend(facecolor="#0f172a", edgecolor="#334155", labelcolor="#f8fafc", fontsize=8.5)

    axes[1].set_title("Recompensa Acumulada por Episódio", fontsize=13, fontweight="bold")
    axes[1].set_xlabel("Episódio")
    axes[1].set_ylabel("Recompensa Média (60 ep)")

    axes[2].set_title("Convergência do Erro (Huber / MSE Loss)", fontsize=13, fontweight="bold")
    axes[2].set_xlabel("Passos de Atualização")
    axes[2].set_ylabel("Loss (Média Móvel)")
    axes[2].set_yscale("log")

    fig.suptitle(
        "BallsPyramid — Desempenho do Treinamento Deep Q-Network (Double DQN + Curriculum Learning)",
        color="#f8fafc",
        fontsize=15,
        fontweight="bold",
        y=1.02,
    )
    plt.tight_layout()
    plt.savefig(output_path, bbox_inches="tight", facecolor=fig.get_facecolor())
    plt.close(fig)
    print(f"Gráfico de aprendizado salvo em '{output_path}'!")


def train(agent: BallsAgent, game: Game):
    episode_rewards = []
    episode_wins = []
    max_scramble = min(len(game.balls), game.num_balls + 3)

    for episode in tqdm(range(EPISODES)):
        # Curriculum Learning: começa com desafios de 1 clique e sobe até embaralhamento completo
        progress = episode / EPISODES
        current_max_clicks = max(1, int(np.ceil(progress * max_scramble)))
        obs, info = game.reset(game.radius, scramble_clicks=current_max_clicks)
        done = False
        total_reward = 0.0

        # Play one complete episode
        while not done:
            # Agent chooses action (initially random, gradually more intelligent)
            action = agent.get_action(obs)

            # Take action and observe result
            next_obs, reward, terminated, truncated, info = game.step(action)

            # Learn from this experience
            agent.update(obs, action, reward, terminated, next_obs)

            total_reward += reward
            done = terminated or truncated
            obs = next_obs

        episode_rewards.append(total_reward)
        episode_wins.append(1.0 if terminated else 0.0)

        # Reduce exploration rate (agent becomes less random over time)
        agent.decay_epsilon()

        if episode % 10 == 0:
            agent.target_net.load_state_dict(agent.policy_net.state_dict())

    metrics = {
        "rewards": episode_rewards,
        "wins": episode_wins,
        "losses": agent.training_error,
    }
    return agent.policy_net.state_dict(), metrics

if __name__ == "__main__":
    all_models = {}
    metrics_by_size = {}

    for n in range(1, MAX_BALLS + 1):
        print(f"\nTreinando modelo para pirâmide de base {n} ({n * (n + 1) // 2} bolas)...")
        game = Game(num_balls=n)
        agent = BallsAgent(game, ALPHA, INITIAL_EPSILON, DECAY, FINAL_EPSILON)
        weights, metrics = train(agent=agent, game=game)
        all_models[n] = weights
        metrics_by_size[n] = metrics
        torch.save(all_models, "dqn_model.pth")

    plot_learning_curves(metrics_by_size, output_path="assets/learning_curves.png")
    print(f"\nTreinamento concluído! Modelos de 1 até {MAX_BALLS} salvos em 'dqn_model.pth'.")
