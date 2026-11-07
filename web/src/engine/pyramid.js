/**
 * Motor matemático da Pirâmide de Bolas (idêntico ao ballsAI.py):
 * - Geometria triangular com raio e distância <= 3 * radius
 * - Matriz de adjacência
 * - Detector de solucionabilidade via Eliminação Gaussiana em GF(2)
 */
export function createPyramidGeometry(numBalls, width = 760, height = 500) {
  const radius = (height * 0.78) / (numBalls * 2);
  const verticalSpacing = 2 * radius * 0.866;
  const pyramidHeight = (numBalls - 1) * verticalSpacing + 2 * radius;
  const topMargin = (height - pyramidHeight) / 2;

  const balls = [];
  let idx = 0;
  for (let i = 0; i < numBalls; i++) {
    const y = height - topMargin - radius - verticalSpacing * i;
    const rowLength = numBalls - i;
    const rowWidth = rowLength * 2 * radius;
    const xStart = (width - rowWidth) / 2 + radius;

    for (let j = 0; j < rowLength; j++) {
      const x = xStart + j * 2 * radius;
      balls.push({ index: idx++, x, y, radius, row: i, col: j });
    }
  }

  const n = balls.length;
  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const dx = balls[i].x - balls[j].x;
      const dy = balls[i].y - balls[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist <= 3 * radius + 1e-6) {
        adjMatrix[i][j] = 1;
      }
    }
  }

  return { balls, adjMatrix, radius, width, height };
}

export function isSolvable(adjMatrix, state) {
  const n = state.length;
  const b = state.map((s) => (s === 1 ? 0 : 1));
  const aug = adjMatrix.map((row, i) => [...row, b[i]]);

  let pivotRow = 0;
  for (let col = 0; col < n; col++) {
    let found = -1;
    for (let r = pivotRow; r < n; r++) {
      if (aug[r][col] === 1) {
        found = r;
        break;
      }
    }
    if (found === -1) continue;

    const tmp = aug[pivotRow];
    aug[pivotRow] = aug[found];
    aug[found] = tmp;

    for (let l = 0; l < n; l++) {
      if (l !== pivotRow && aug[l][col] === 1) {
        for (let c = 0; c <= n; c++) {
          aug[l][c] ^= aug[pivotRow][c];
        }
      }
    }
    pivotRow++;
  }

  for (let r = 0; r < n; r++) {
    let rowSum = 0;
    for (let c = 0; c < n; c++) rowSum += aug[r][c];
    if (rowSum === 0 && aug[r][n] === 1) {
      return false;
    }
  }
  return true;
}

export function clicksRemaining(adjMatrix, state) {
  const n = state.length;
  const b = state.map((s) => (s === 1 ? 0 : 1));
  const aug = adjMatrix.map((row, i) => [...row, b[i]]);

  let pivotRow = 0;
  for (let col = 0; col < n; col++) {
    let found = -1;
    for (let r = pivotRow; r < n; r++) {
      if (aug[r][col] === 1) {
        found = r;
        break;
      }
    }
    if (found === -1) continue;

    const tmp = aug[pivotRow];
    aug[pivotRow] = aug[found];
    aug[found] = tmp;

    for (let l = 0; l < n; l++) {
      if (l !== pivotRow && aug[l][col] === 1) {
        for (let c = 0; c <= n; c++) {
          aug[l][c] ^= aug[pivotRow][c];
        }
      }
    }
    pivotRow++;
  }

  let sum = 0;
  for (let r = 0; r < pivotRow; r++) {
    sum += aug[r][n];
  }
  return sum;
}

export function applyAction(state, adjMatrix, action) {
  const row = adjMatrix[action];
  return state.map((val, idx) => (row[idx] === 1 ? val ^ 1 : val));
}

export function isDone(state) {
  return state.every((v) => v === 1);
}

export function generatePuzzleState(
  adjMatrix,
  rng = Math.random,
  scrambleClicks = 8,
  minClicks = 2
) {
  const n = adjMatrix.length;
  const maxK = Math.min(scrambleClicks, n);
  const minK = Math.min(maxK, Math.max(1, minClicks));

  for (let attempt = 0; attempt < 200; attempt++) {
    let state = Array(n).fill(1);
    const chosen = new Set();
    const targetK =
      minK + Math.floor(rng() * Math.max(1, maxK - minK + 1));

    let safety = 0;
    while (chosen.size < targetK && safety < 200) {
      chosen.add(Math.floor(rng() * n));
      safety++;
    }

    for (const act of chosen) {
      state = applyAction(state, adjMatrix, act);
    }

    if (!isDone(state) && isSolvable(adjMatrix, state)) {
      const dist = clicksRemaining(adjMatrix, state);
      if (dist >= minK || attempt > 60) {
        return { initialState: state, optimalHintClicks: dist };
      }
    }
  }

  let fallback = applyAction(Array(n).fill(1), adjMatrix, 0);
  return {
    initialState: fallback,
    optimalHintClicks: clicksRemaining(adjMatrix, fallback),
  };
}
