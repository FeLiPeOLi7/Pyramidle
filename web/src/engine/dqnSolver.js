import { applyAction, isDone } from './pyramid';

/**
 * Executa o forward pass da QNetwork (Linear -> ReLU -> Linear -> ReLU -> Linear)
 * diretamente no navegador usando os pesos exportados do PyTorch.
 */
function linearLayer(input, weight, bias) {
  const outFeatures = weight.length;
  const inFeatures = input.length;
  const output = new Float32Array(outFeatures);

  for (let i = 0; i < outFeatures; i++) {
    let sum = bias[i];
    const wRow = weight[i];
    for (let j = 0; j < inFeatures; j++) {
      sum += wRow[j] * input[j];
    }
    output[i] = sum;
  }
  return output;
}

function relu(vec) {
  const out = new Float32Array(vec.length);
  for (let i = 0; i < vec.length; i++) {
    out[i] = vec[i] > 0 ? vec[i] : 0;
  }
  return out;
}

export function forwardQNetwork(state, modelWeights) {
  const h1 = relu(linearLayer(state, modelWeights['model.0.weight'], modelWeights['model.0.bias']));
  const h2 = relu(linearLayer(h1, modelWeights['model.2.weight'], modelWeights['model.2.bias']));
  const qValues = linearLayer(h2, modelWeights['model.4.weight'], modelWeights['model.4.bias']);
  return Array.from(qValues);
}

/**
 * Escolhe a melhor ação da DQN com proteção contra ping-pong imediato e repetição de estado visitado
 */
export function selectDqnAction(
  modelWeights,
  state,
  lastAction = null,
  visitedStateActions = new Set()
) {
  const qValues = forwardQNetwork(state, modelWeights);
  const n = qValues.length;
  const stateKey = state.join('');

  if (n > 1) {
    if (lastAction !== null && lastAction >= 0 && lastAction < n) {
      qValues[lastAction] = -Infinity;
    }

    const masked = [...qValues];
    for (let a = 0; a < n; a++) {
      if (visitedStateActions.has(`${stateKey}:${a}`)) {
        masked[a] = -Infinity;
      }
    }

    if (Math.max(...masked) > -Infinity) {
      for (let a = 0; a < n; a++) qValues[a] = masked[a];
    }
  }

  let bestAction = 0;
  let bestVal = -Infinity;
  for (let a = 0; a < n; a++) {
    if (qValues[a] > bestVal) {
      bestVal = qValues[a];
      bestAction = a;
    }
  }
  return { action: bestAction, qValues };
}

/**
 * Simula silenciosamente a resolução pela DQN para obter a "Meta da IA (Par)" do desafio
 */
export function computeAiBenchmark(modelWeights, initialState, adjMatrix, fallbackClicks = 4) {
  if (!modelWeights) return fallbackClicks;

  let state = [...initialState];
  let lastAction = null;
  const visited = new Set();
  const maxSteps = state.length * 2;

  for (let step = 1; step <= maxSteps; step++) {
    if (isDone(state)) return step - 1;
    const stateKey = state.join('');
    const { action } = selectDqnAction(modelWeights, state, lastAction, visited);
    visited.add(`${stateKey}:${action}`);
    lastAction = action;
    state = applyAction(state, adjMatrix, action);
    if (isDone(state)) return step;
  }

  return fallbackClicks;
}
