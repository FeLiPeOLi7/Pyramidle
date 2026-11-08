# Pyramidle — Deep Reinforcement Learning & $\mathbb{GF}(2)$ Solver

![Python](https://img.shields.io/badge/Python-3.13%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-Double_DQN-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Pygame](https://img.shields.io/badge/Pygame-2.6-008000?style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-Linear_Algebra-013243?style=for-the-badge&logo=numpy&logoColor=white)

Um jogo de quebra-cabeça interativo em grade triangular (inspirado no clássico *Lights Out*) desenvolvido em **Python + Pygame** e **React**, equipado com um agente autônomo de **Aprendizado por Reforço Profundo (Double Deep Q-Network)** em **PyTorch** e um validador algébrico baseado em **Eliminação Gaussiana no Corpo Finito $\mathbb{GF}(2)$**.

[![Play PYRAMIDLE](https://img.shields.io/badge/Play-PYRAMIDLE-8B5CF6?style=for-the-badge)](https://pyramidle.tech)
---

## O Problema e o Desafio de IA

O jogo consiste em uma pirâmide de base $n$ contendo $N = \frac{n(n+1)}{2}$ bolas (brancas ou pretas).
- **Regra de transição**: Clicar em uma bola inverte a cor dela própria e de todas as bolas vizinhas dentro de um raio geométrico de $3r$.
- **Objetivo**: Tornar **todas as bolas pretas** com o menor número de cliques possível.

### Por que o Q-Learning tradicional (Q-Table) falha neste problema?
Em uma abordagem tabular clássica, cada configuração da pirâmide é armazenada como uma chave isolada em um dicionário. Isso esbarra em três barreiras matemáticas:

1. **Explosão Combinatória ($2^N$ estados)**:
   | Base da Pirâmide ($n$) | Total de Bolas ($N$) | Espaço de Estados ($2^N$) | Viabilidade de Q-Table |
   | :---: | :---: | :---: | :---: |
   | $3$ | $6$ | $64$ | Viável |
   | $5$ | $15$ | $32.768$ | Lento |
   | $6$ | $21$ | $2.097.152$ | Inviável |
   | $8$ | $36$ | $68.719.476.736$ | Impossível em RAM |

2. **Ausência de Generalização Espacial**: Uma Q-Table não compartilha conhecimento entre estados parecidos (ex.: mudar 1 única bola cria uma chave desconhecida).
3. **Configurações Matematicamente Insolúveis**: Sorteios puramente aleatórios podem gerar estados que não pertencem ao espaço coluna da matriz de adjacência do grafo, prendendo agentes ingênuos em loops infinitos.

---

## Galeria

| Desafio Diário & Alcance $3r$ | Modo Livre (Base 2–20) & Resolução Guiada |
| :---: | :---: |
| ![Desafio Diário e Preview do Alcance](assets/web_daily.png) | ![Modo Livre e Passo Automático da IA](assets/web_free_solver.png) |
| **Slides Interativos (IA vs. Matemática)** | **Limite de Cliques ($2\times$ Par) & Fim de Jogo** |
| ![Explicação IA vs Matemática](assets/web_slides.png) | ![Modal de Limite de Cliques](assets/web_gameover.png) |

---

## Arquitetura da Solução

Para superar as limitações tabulares, o projeto combina **Álgebra Linear sobre $\mathbb{GF}(2)$** com **Deep Reinforcement Learning (Double DQN)**:

### 1. Detector e Resolvedor via Álgebra Linear em $\mathbb{GF}(2)$
Como a ordem dos cliques é comutativa e clicar duas vezes na mesma bola anula a operação ($1 \oplus 1 = 0$), o jogo pode ser modelado como um sistema linear binário:

$$A \cdot x \equiv b \pmod 2$$

- $A \in \{0, 1\}^{N \times N}$: Matriz de adjacência pré-calculada onde $A_{i,j} = 1 \iff \text{dist}(i, j) \le 3r$.
- $b \in \{0, 1\}^N$: Vetor indicando quais bolas estão brancas no estado atual ($b_i = 1 \oplus s_i$).
- A matriz aumentada $[A \mid I]$ é escalonada a priori via **Eliminação de Gauss-Jordan com `XOR` (`^`)**, gerando a matriz de transformação $R$. Isso garante em tempo $O(N^2)$ que nenhum episódio comece insolúvel (`is_solvable()`), fornece a distância exata de cliques restantes (`clicks_remaining()`) e atua como resolvedor passo a passo para pirâmides gigantes ($n = 9 \dots 20$).

### 2. Deep Q-Network (Double DQN) + Lookahead Neural
- **Arquitetura da Rede (`QNetwork`)**: Multilayer Perceptron (`Linear(N, 128) → ReLU → Linear(128, 128) → ReLU → Linear(128, N)`) que recebe o vetor binário do tabuleiro e estima simultaneamente o valor $Q(s, a)$ de clicar em cada bola.
- **Double DQN & Experience Replay**: Utiliza um `ReplayBuffer` circular de $200.000$ transições e duas redes (*Policy Network* e *Target Network*) com **MSE Loss** e atualização periódica para evitar superestimação e divergência de Bellman:
  $$y = r + \gamma (1 - \text{done}) \, Q_{\text{target}}\!\left(s', \arg\max_{a'} Q_{\text{policy}}(s', a')\right)$$
- **Reward Shaping Algébrico**: Recompensa guiada pela redução da distância algébrica em $\mathbb{GF}(2)$ (`clicks_remaining`) somada ao bônus terminal de $+100$ ao solucionar a pirâmide.
- **Curriculum Learning & Best Checkpoint**: O treinamento inicia com tabuleiros a 1 clique da solução e escala progressivamente até o embaralhamento completo, salvando automaticamente o checkpoint de maior taxa de vitória na dificuldade máxima.
- **Lookahead Neural de 2 Passos**: A tomada de decisão em inferência simula os top ramos mais promissores avaliados pela própria rede neural antes do clique definitivo, eliminando miopias e garantindo 100% de vitórias nas bases suportadas.
- **Inferência no Navegador via ONNX Runtime Web**: Os modelos treinados em PyTorch são exportados para `.onnx` (`export_weights.py`) e executados diretamente no navegador via WebAssembly (`onnxruntime-web`).

---

## Análise de Complexidade Combinatória: IA vs. Álgebra Linear

Um dos aspectos mais ricos deste projeto para Engenharia de Machine Learning é o contraste entre o **Aprendizado por Reforço** e a **Álgebra Linear Exata**:

| Base ($n$) | Total de Bolas ($N$) | Espaço de Estados ($2^N$) | Ordem de Paridade Média | Solver Utilizado | Taxa de Vitória (Win Rate) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 1 | $2$ | 1 | Double DQN (ONNX) | **100%** |
| **2** | 3 | $8$ | 1.3 | Double DQN (ONNX) | **100%** |
| **3** | 6 | $64$ | 2.5 | Double DQN (ONNX) | **100%** |
| **4** | 10 | $1.024$ | 3.8 | Double DQN (ONNX) | **100%** |
| **5** | 15 | $32.768$ | 5.2 | Double DQN (ONNX) | **100%** |
| **6** | 21 | $\approx 2{,}1 \times 10^6$ (2,1 milhões) | 6.9 | Double DQN (ONNX) | **100%** |
| **7** | 28 | $\approx 2{,}68 \times 10^8$ (268 milhões) | 14.3 | Solver Algébrico $\mathbb{GF}(2)$ | **100%** (Ótimo) |
| **8** | 36 | $\approx 6{,}87 \times 10^{10}$ (68,7 bilhões) | 20.3 | Solver Algébrico $\mathbb{GF}(2)$ | **100%** (Ótimo) |
| **9..20** | até 210 | até $2^{210} \approx 1{,}6 \times 10^{63}$ | $\le 105$ | Solver Algébrico $\mathbb{GF}(2)$ | **100%** (Ótimo) |

### Por que a transição ocorre na Base 6?
1. **Explosão do Espaço de Estados**: Enquanto a Base 6 possui cerca de 2 milhões de configurações possíveis — facilmente cobertas por replay buffer e exploração —, a Base 7 já escala para centenas de milhões e a Base 8 salta para quase 70 bilhões.
2. **Ordem de Paridade Global (XOR)**: A matriz de adjacência pré-escalonada $R$ revela que, para $n \le 6$, decidir o clique ótimo depende do estado de $\approx 6$ bolas vizinhas locais. A partir de $n = 7$, cada clique correto passa a depender da paridade de **14 a 20 bolas espalhadas por toda a pirâmide**. Aprender funções de paridade global de alta ordem em redes neurais densas (MLPs) é um problema clássico de alta complexidade em representação.
3. **Eficiência Arquitetural Pragmática**: O resolvedor híbrido une o melhor dos dois mundos: demonstra capacidade criativa e modelagem por reforço com **100% de consistência** até $N=21$ bolas, acionando a matemática exata em $O(N^2)$ para escalas industriais (até 210 bolas).

---

## Curvas de Aprendizado e Convergência

O gráfico abaixo é gerado automaticamente ao final de `train.py` e demonstra a evolução da **Taxa de Vitória (Win Rate %)**, **Recompensa Acumulada** e redução da **Loss** durante o treinamento:

![Curvas de Aprendizado da DQN](assets/learning_curves.png)

---

## Como Executar o Projeto

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/FeLiPeOLi7/effective-train
cd effective-train/BallsPyramid
pip install -r requirements.txt
```

### 2. Executar o Jogo com a IA (`ballsAI.py`)
```bash
cd src
python3 ballsAI.py
```
- Escolha o número de bolas na base da pirâmide:
  - **De `1` até `6` bolas na base**: Resolução passo a passo via **Rede Neural (Double DQN + Lookahead)**.
  - **Acima de `6` bolas na base (`7` a `20`)**: Resolução passo a passo via **Solver Algébrico em $\mathbb{GF}(2)$**.

### 3. Re-treinar os Modelos e Gerar os Gráficos (`train.py`)
```bash
python3 train.py
```
- Treina os modelos especialistas de base `1` a `6`, salva os pesos em `dqn_model.pth` e exporta o gráfico atualizado em `assets/learning_curves.png`.

### 4. Executar a Versão Web — PYRAMIDLE (React + Vite + ONNX Runtime Web)
O projeto inclui uma aplicação Web completa em [`web/`](web/) com **Desafio Diário** e **Modo Livre** (bases de 2 até 20 bolas), executando a Rede Neural diretamente no navegador via **ONNX Runtime Web**:

```bash
# Exportar os modelos de dqn_model.pth para arquivos .onnx em web/public/
python3 export_weights.py

# Iniciar o servidor web em modo de desenvolvimento
cd web
npm install
npm run dev
```

---

## Resolução do Problema

Para a resolução deste problema, foi necessário experimentar diversos métodos de IA para chegar a uma conclusão:

O primeiro destes métodos testados foi o Q-Table, como já mencionado, todavia, pela natureza exponencial do problema a Q-Table não funciona de forma adequada, pois consegue
guardar apenas uma pequena parte dos estados.

O segundo método foi utilizando uma Deep Q-Network, que surgiu como uma forma de solucionar a necessidade de lembrança de todos os estados, tendo um foco muito maior em como realmente a aprender o jogo, mas se mostrou incapaz de resolver de forma enxuta problemas com milhões de combinações, pois sofria de esquecimento catastrófico.

O terceiro método foi fazer modificações na DQN e implementar o Resolvedor GF(2) para problemas na casa dos milhões/bilhões. As modificações da DQN envolvem Curriculum Learning (onde o modelo primeiro é apresentado a problemas fáceis e depois vai sendo apresentado de forma gradual a problemas mais difíceis) e a função de reward intimamente atrelada com o GF(2) que indicava a posição do passo correto, permitindo treinar a DQN com mais eficiência.

Por fim, o quarto método foi utilizar a estratégia de *Look Ahead*, onde simulamos 2 passos a frente da realidade, e verificamos qual passo tem mais chance de nos levar a vitória, afinal de contas, a rede neural tem mais certeza e facilidade quando ela tem que dar menos cliques, e é isso que estamos fazendo, diminuindo artificialmente o número de cliques que ela tem que dar (e.g. saindo de um k=5 para um k=4, onde k é quantidade de cliques a serem feitos).

---

## Estrutura de Arquivos

| Arquivo / Pasta | Descrição |
| :--- | :--- |
| [`ballsAI.py`](ballsAI.py) | Ambiente do jogo em Pygame, matriz de adjacência pré-escalonada em $\mathbb{GF}(2)$, `QNetwork` com Lookahead Neural e modo `Solve` passo a passo. |
| [`train.py`](train.py) | Agente Double DQN (MSE Loss + Buffer Circular), `ReplayBuffer`, *Curriculum Learning* e geração de `assets/learning_curves.png`. |
| [`export_weights.py`](export_weights.py) | Exporta os modelos PyTorch (`dqn_model.pth`) para formato `.onnx` (`web/public/model_1.onnx` ... `model_6.onnx`). |
| [`web/`](web/) | Aplicação Web React (**PYRAMIDLE**): Desafio Diário, estatísticas/Streak, limite de cliques ($2\times$ Par) e inferência via ONNX Runtime Web + $\mathbb{GF}(2)$. |
| `dqn_model.pth` | Checkpoint PyTorch contendo os pesos treinados das redes neurais (`n = 1..6`). |
| `assets/` | Curvas de convergência do treinamento (`learning_curves.png`) e capturas da interface web. |
