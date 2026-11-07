import { applyAction, isDone } from './pyramid';
import * as ort from 'onnxruntime-web';

const MAX_BASE = 8

export async function loadAllDqnSessions(maxBase = MAX_BASE) {
    const sessions = {};
    for (let n = 1; n <= maxBase; n++) {
      try {
        sessions[String(n)] = await ort.InferenceSession.create(`/model_${n}.onnx`);
      } catch (err) {
        console.warn(`Modelo /model_${n}.onnx não encontrado ou ainda não treinado.`);
      }
    }
    return sessions;
}


/**
  * Escolhe a melhor ação da DQN rodando o modelo .onnx no navegador
  * com proteção contra ping-pong imediato e repetição de estado visitado
*/
export async function selectDqnAction(
  session,
  state,
  lastAction = null,
  visitedStateActions = new Set()
) {
  const inputTensor = new ort.Tensor(
    'float32',
    Float32Array.from(state),
    [1, state.length]
  );

  const output = await session.run({ state: inputTensor });
  const qValues = Array.from(output.q_values.data);

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
export async function computeAiBenchmark(session, initialState, adjMatrix, fallbackClicks = 4) {
  if (!session) return fallbackClicks;

  let state = [...initialState];
  let lastAction = null;
  const visited = new Set();
  const maxSteps = state.length * 2;

  for (let step = 1; step <= maxSteps; step++) {
    if (isDone(state)) return step - 1;
    const stateKey = state.join('');
    const { action } = await selectDqnAction(session, state, lastAction, visited);
    visited.add(`${stateKey}:${action}`);
    lastAction = action;
    state = applyAction(state, adjMatrix, action);
    if (isDone(state)) return step;
  }

  return fallbackClicks;
}
