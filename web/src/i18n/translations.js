export const translations = {
  pt: {
    header: {
      daily: 'Desafio Diário',
      free: 'Modo Livre',
      howItWorks: 'Como Funciona',
      streak: 'Sequência',
      stats: 'Stats',
      rules: 'Regras',
      changeLang: 'Mudar idioma / Change language',
    },
    controls: {
      clicks: 'Cliques',
      par: 'Referência (Par)',
      clicksUnit: 'cliques',
      progress: 'Progresso',
      baseTitle: 'Base da Pirâmide',
      totalBalls: 'bolas no total',
      aiDqnDesc: 'Resolvedor automático: Rede Neural (IA)',
      aiGf2Desc: 'Resolvedor automático: Álgebra Linear GF(2)',
      decreaseBase: 'Diminuir base',
      increaseBase: 'Aumentar base',
      reset: 'Reiniciar',
      newBoard: 'Novo Tabuleiro',
      showRadius: 'Visualizar alcance',
      solveStep: 'Resolver Passo a Passo',
      solveStepDailyWarn: 'Resolver com IA (anula sequência)',
      pauseSolve: 'Pausar Resolução',
      manualMode: 'Modo Manual',
    },
    board: {
      white: 'Branca',
      black: 'Preta (Alvo)',
      aiStep: 'Passo Automático',
      pyramidDone: 'Pirâmide Concluída',
    },
    slides: {
      game: 'Jogo',
      slideMath: '01 Tabuleiro',
      slideAi: '02 Resolvedor',
      mathKicker: '01 / POR TRÁS DO TABULEIRO',
      mathTitle: 'Como garantimos que nenhum desafio seja impossível',
      mathLead:
        'Se as cores iniciais fossem sorteadas de forma totalmente cega, a maioria das pirâmides simplesmente não teria solução. Na pirâmide de base 3, por exemplo, 75% dos sorteios aleatórios são impossíveis de resolver porque algumas bolas invertem exatamente o mesmo grupo de vizinhas.',
      gf2CardTitle: 'A lógica dos cliques — GF(2)',
      gf2CardP1:
        'Duas regras simples comandam o jogo: a ordem em que você clica nas bolas não muda o resultado final, e clicar duas vezes na mesma bola desfaz a jogada (como um interruptor de luz).',
      gf2CardSub:
        'Onde A representa quais bolas são vizinhas (alcance ≤ 3r), x são os cliques necessários e b são as bolas que ainda estão brancas.',
      filterCardTitle: 'Filtro antes da partida começar',
      filterCardP1:
        'Antes de mostrar qualquer tabuleiro na tela, o jogo resolve esse sistema em frações de milissegundo para ter certeza de que existe um caminho até a vitória e calcular a Referência (Par) de cliques.',
      filterCardSub:
        'Assim você nunca cai em um quebra-cabeça sem saída — todo tabuleiro tem solução garantida.',
      aiKicker: '02 / IA vs. MATEMÁTICA',
      aiTitle: 'Dois cérebros diferentes para resolver a pirâmide',
      aiLead1: 'Até ',
      aiLead2: '6 bolas na base',
      aiLead3:
        ' (21 bolas no total, 2 milhões de estados), quem joga no botão de resolução é uma ',
      aiLead4: 'Rede Neural (Double DQN)',
      aiLead5: ' com 100% de taxa de vitória. A partir de ',
      aiLead6: '7 bolas na base',
      aiLead7:
        ' (onde a complexidade combinatória explode para bilhões e trilhões de combinações e 20 paridades globais), o ',
      aiLead8: 'Resolvedor Algébrico em GF(2)',
      aiLead9: ' assume para garantir solução ótima instantânea.',
      aiSpec1Title: 'Por que usar IA se a matemática já resolve?',
      aiSpec1Desc:
        'A equação matemática é presa às regras atuais do jogo. Já uma Rede Neural dá liberdade criativa: se mudarmos as regras (novas cores, obstáculos ou poderes), a IA aprende a jogar do zero sem precisarmos descobrir uma fórmula nova.',
      aiSpec2Title: 'Mais viva e divertida de assistir',
      aiSpec2Desc:
        'Enquanto o algoritmo matemático segue uma lista rígida como uma calculadora, a IA avalia o tabuleiro no "olho" a cada jogada: escolhe caminhos mais criativos e até corrige a própria rota se precisar.',
      aiSpec3Title: 'Rodando direto no seu navegador',
      aiSpec3Desc:
        'Os modelos especialistas treinados em PyTorch foram exportados para ONNX e rodam 100% no seu dispositivo em tempo real, lado a lado com o motor matemático para as pirâmides maiores (7 a 20 bolas).',
      backToGame: 'Voltar ao Jogo ↑',
    },
    footer: {
      mathHint: 'Entenda a matemática e o algoritmo de resolução ↓',
    },
    helpModal: {
      title: 'Regras do Jogo',
      close: 'Fechar',
      goalTitle: 'Objetivo',
      goalP1:
        'Deixe todas as bolas da pirâmide pretas utilizando a menor quantidade de cliques possível.',
      goalP2:
        'Ao clicar em uma bola, ela própria e todas as bolas vizinhas dentro de um raio de alcance de 3 × raio invertem de cor simultaneamente.',
      modesTitle: 'Modos Disponíveis',
      dailyDescTitle: 'Desafio Diário: ',
      dailyDescText:
        'Uma pirâmide única por dia (base 5, 15 bolas), igual para todos os jogadores.',
      freeDescTitle: 'Modo Livre: ',
      freeDescText:
        'Permite escolher o tamanho da base entre 2 e 20 bolas, sortear novos tabuleiros e assistir à resolução automática passo a passo.',
      goToMath: 'Ver explicação matemática nos slides abaixo ↓',
    },
    statsModal: {
      title: 'Desempenho no Desafio Diário',
      close: 'Fechar',
      games: 'Jogos',
      wins: 'Vitórias',
      streak: 'Sequência',
      record: 'Recorde',
      challengeDone: 'Desafio #{n} Concluído',
      solvedIn: 'Resolvido em {clicks} cliques (Referência: {par} cliques).',
      aiAssistedNote:
        '⚠️ Resolução assistida por IA: Como você utilizou ajuda para ver a solução, sua sequência diária (streak) foi zerada. Você pode reiniciar e refazer o tabuleiro para treinar!',
      copyResult: 'Copiar Resultado',
      copied: 'Resultado copiado!',
      replayBoard: 'Refazer Tabuleiro',
      pendingDaily:
        'Conclua o Desafio Diário #{n} para habilitar o resumo para compartilhamento.',
      shareSolvedAi: 'Resolvido com assistência da IA (sequência zerada)',
      shareOptimal: 'Atingiu a referência ótima',
      shareOverPar: '+{diff} cliques acima da referência',
      shareStreak: 'Sequência: {streak} dia(s)',
    },
    gameOverModal: {
      title: 'Fim de Jogo — Limite de Cliques!',
      close: 'Fechar',
      body: 'Você atingiu o limite máximo de {maxClicks} cliques (2× a Referência de {aiPar} cliques) sem deixar todas as bolas pretas.',
      tryAgain: 'Tentar Novamente',
      watchSolution: 'Ver Resolução Passo a Passo',
    },
  },

  en: {
    header: {
      daily: 'Daily Challenge',
      free: 'Free Mode',
      howItWorks: 'How it Works',
      streak: 'Streak',
      stats: 'Stats',
      rules: 'Rules',
      changeLang: 'Change language / Mudar idioma',
    },
    controls: {
      clicks: 'Clicks',
      par: 'AI Par',
      clicksUnit: 'clicks',
      progress: 'Progress',
      baseTitle: 'Pyramid Base',
      totalBalls: 'total balls',
      aiDqnDesc: 'Auto-solver: Neural Network (AI)',
      aiGf2Desc: 'Auto-solver: Linear Algebra GF(2)',
      decreaseBase: 'Decrease base',
      increaseBase: 'Increase base',
      reset: 'Reset',
      newBoard: 'New Board',
      showRadius: 'Highlight reach radius',
      solveStep: 'Solve Step by Step',
      solveStepDailyWarn: 'Solve with AI (voids streak)',
      pauseSolve: 'Pause Solver',
      manualMode: 'Manual Mode',
    },
    board: {
      white: 'White',
      black: 'Black (Target)',
      aiStep: 'AI Auto Step',
      pyramidDone: 'Pyramid Completed',
    },
    slides: {
      game: 'Game',
      slideMath: '01 Board Math',
      slideAi: '02 Solvers',
      mathKicker: '01 / BEHIND THE BOARD',
      mathTitle: 'How we guarantee every puzzle is solvable',
      mathLead:
        'If starting colors were picked completely at random, most pyramids would have no solution. In a base-3 pyramid, for example, 75% of random boards are impossible because certain balls flip the exact same group of neighbors.',
      gf2CardTitle: 'Click Logic — GF(2)',
      gf2CardP1:
        'Two simple rules govern the game: click order does not change the final outcome, and clicking the same ball twice undoes the move (like a light switch).',
      gf2CardSub:
        'Where A represents neighboring balls (reach ≤ 3r), x is the clicks required, and b is the balls that are still white.',
      filterCardTitle: 'Pre-game Solvability Filter',
      filterCardP1:
        'Before showing any board, the game solves this system in sub-milliseconds to ensure a winning path exists and computes the optimal click benchmark (Par).',
      filterCardSub:
        'This ensures you never encounter a dead-end puzzle — every board is mathematically solvable.',
      aiKicker: '02 / AI vs. MATHEMATICS',
      aiTitle: 'Two different brains to solve the pyramid',
      aiLead1: 'Up to ',
      aiLead2: '6 balls on the base',
      aiLead3:
        ' (21 balls total, 2 million states), the solver button uses a ',
      aiLead4: 'Neural Network (Double DQN)',
      aiLead5: ' with a 100% win rate. Starting at ',
      aiLead6: '7 balls on the base',
      aiLead7:
        ' (where combinatorial complexity explodes into billions and trillions of combinations), the ',
      aiLead8: 'Algebraic GF(2) Solver',
      aiLead9: ' takes over to guarantee instant optimal solutions.',
      aiSpec1Title: 'Why use AI if math already solves it?',
      aiSpec1Desc:
        'A mathematical formula is tied to strict rules. A Neural Network provides creative freedom: if we introduce new colors, obstacles, or powers, the AI learns to play from scratch without requiring a new formula.',
      aiSpec2Title: 'More dynamic and fun to watch',
      aiSpec2Desc:
        'While the algebraic solver executes a rigid matrix like a calculator, the AI evaluates the board visually on each turn: finding intuitive paths and even correcting course when needed.',
      aiSpec3Title: 'Running 100% in your browser',
      aiSpec3Desc:
        'Specialized models trained in PyTorch were exported to ONNX and run 100% on your device in real time, side-by-side with the algebraic engine for larger pyramids (7 to 20 balls).',
      backToGame: 'Back to Game ↑',
    },
    footer: {
      mathHint: 'Understand the math & solving algorithm ↓',
    },
    helpModal: {
      title: 'How to Play',
      close: 'Close',
      goalTitle: 'Objective',
      goalP1:
        'Turn all balls in the pyramid black using as few clicks as possible.',
      goalP2:
        'Clicking a ball flips both its color and all neighboring balls within a 3 × radius reach simultaneously.',
      modesTitle: 'Available Modes',
      dailyDescTitle: 'Daily Challenge: ',
      dailyDescText:
        'A unique daily puzzle (base 5, 15 balls), identical for all players around the world.',
      freeDescTitle: 'Free Mode: ',
      freeDescText:
        'Choose pyramid base sizes from 2 to 20 balls, generate random boards, and watch the step-by-step auto-solver.',
      goToMath: 'View math explanation in the slides below ↓',
    },
    statsModal: {
      title: 'Daily Challenge Performance',
      close: 'Close',
      games: 'Played',
      wins: 'Win %',
      streak: 'Current Streak',
      record: 'Max Streak',
      challengeDone: 'Challenge #{n} Completed',
      solvedIn: 'Solved in {clicks} clicks (AI Par: {par} clicks).',
      aiAssistedNote:
        '⚠️ AI-assisted solution: Because you used the solver to view the solution, your daily streak was reset to 0. You can still reset and replay the board to practice!',
      copyResult: 'Copy Result',
      copied: 'Result copied!',
      replayBoard: 'Replay Board',
      pendingDaily:
        'Complete Daily Challenge #{n} to unlock the shareable summary.',
      shareSolvedAi: 'Solved with AI assistance (streak reset)',
      shareOptimal: 'Matched optimal AI benchmark',
      shareOverPar: '+{diff} clicks over AI par',
      shareStreak: 'Streak: {streak} day(s)',
    },
    gameOverModal: {
      title: 'Game Over — Click Limit!',
      close: 'Close',
      body: 'You reached the maximum limit of {maxClicks} clicks (2× the Par of {aiPar} clicks) without turning all balls black.',
      tryAgain: 'Try Again',
      watchSolution: 'Watch Step-by-Step Solution',
    },
  },
};

export function getInitialLanguage() {
  try {
    const saved = localStorage.getItem('pyramidle_lang');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (_) {}

  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
  return 'en';
}
