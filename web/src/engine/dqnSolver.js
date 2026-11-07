import { applyAction, isDone } from './pyramid';
import * as ort from 'onnxruntime-web';

const MAX_BASE = 6;

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
 * Roda a rede neural (.onnx) para um estado e devolve o vetor de Q-values
 */
async function predictQ(session, state) {
  const inputTensor = new ort.Tensor(
    'float32',
    Float32Array.from(state),
    [1, state.length]
  );
  const output = await session.run({ state: inputTensor });
  return Array.from(output.q_values.data);
}

/**
 * Equivalente ao torch.topk(...).indices: índices dos k maiores valores (ignorando -Infinity)
 */
function topK(values, k) {
  return values
    .map((v, i) => [v, i])
    .filter(([v]) => v > -Infinity)
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
    .map(([, i]) => i);
}

/**
  * Escolhe a melhor ação da DQN rodando o modelo .onnx no navegador
  * com proteção contra ping-pong imediato e repetição de estado visitado
*/
export async function selectDqnAction(
  session,
  state,
  lastAction = null,
  visitedStateActions = new Set(),
  adjMatrix = null,
  kBeam = 12,
) {
  const qValues = await predictQ(session, state);

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

  // Sem matriz de adjacência (ou com 1 bola só): argmax direto, sem Look Ahead
  if (adjMatrix === null || n <= 1) {
    return { action: argmax(qValues), qValues };
  }

  /*
  -- Look Ahead
  O restante do código visa responder a seguinte pergunta: Qual clique mais me aproxima da resposta no longo prazo?
  Basicamente, forçamos o modelo a simular 2 passos futuros (dado que ele tem muita dificuldade de responder soluções que exigem muitos cliques de forma direta),
  isso nos permite ter uma melhor aproximação da resposta correta, pois o modelo tem mais facilidade de resolver problemas que só faltam 1 clique 
  de problemas que só faltam 2 cliques e etc.
  */
  
  const top1Actions = topK(qValues, Math.min(kBeam, n));
  let bestFirstAction = top1Actions[0];
  let bestScore = -Infinity;

  for (const a1 of top1Actions) {
    // 1º clique imaginário: estado -> s1
    const s1 = applyAction(state, adjMatrix, a1);
    // Se todas estão pretas, a ação a1 vence na hora
    if (isDone(s1)) return { action: a1, qValues };

    const q2 = await predictQ(session, s1);
    q2[a1] = -Infinity; // não desfaz a1 imediatamente
    const top2Actions = topK(q2, Math.min(kBeam, n));

    for (const a2 of top2Actions) {
      // 2º clique imaginário: aplicado em cima de s1 (não do estado original!)
      const s2 = applyAction(s1, adjMatrix, a2);
      // Se todas estão pretas, o caminho a1 -> a2 vence: jogamos a1 agora
      if (isDone(s2)) return { action: a1, qValues };

      // Nota do tabuleiro s2 (2 cliques no futuro), bloqueando desfazer a2
      const q3 = await predictQ(session, s2);
      q3[a2] = -Infinity;
      const score = Math.max(...q3);

      // Queremos o MAIOR valor futuro
      if (score > bestScore) {
        bestScore = score;
        bestFirstAction = a1;
      }
    }
  }

  return { action: bestFirstAction, qValues };
}

function argmax(values) {
  let bestAction = 0;
  let bestVal = -Infinity;
  for (let a = 0; a < values.length; a++) {
    if (values[a] > bestVal) {
      bestVal = values[a];
      bestAction = a;
    }
  }
  return bestAction;
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
    const { action } = await selectDqnAction(session, state, lastAction, visited, adjMatrix, 12);
    visited.add(`${stateKey}:${action}`);
    lastAction = action;
    state = applyAction(state, adjMatrix, action);
    if (isDone(state)) return step;
  }

  return fallbackClicks;
}
