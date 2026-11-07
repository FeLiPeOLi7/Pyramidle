/**
 * Gerador pseudoaleatório determinístico (Mulberry32) baseado na data (YYYY-MM-DD)
 * Garante que todos os jogadores recebam exatamente o mesmo Desafio Diário.
 */
export function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getChallengeNumber(dateKey = getTodayKey()) {
  const epoch = new Date('2026-01-01T00:00:00');
  const current = new Date(`${dateKey}T00:00:00`);
  const diffDays = Math.floor((current - epoch) / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1);
}

export function createSeededRng(seedString) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedString.length; i++) {
    h ^= seedString.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let a = h >>> 0;

  return function nextFloat() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
