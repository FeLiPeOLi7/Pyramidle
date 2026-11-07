import React, { useState } from 'react';

export default function StatsModal({
  isOpen,
  onClose,
  stats,
  dailyResult,
  challengeNumber,
  aiPar,
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const winRate =
    stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;

  const handleShare = () => {
    const clicksUsed = dailyResult?.clicks ?? '—';
    const usedAi = dailyResult?.usedAi;
    const diff = typeof clicksUsed === 'number' ? clicksUsed - aiPar : 0;
    const statusLine = usedAi
      ? 'Resolvido com resolução guiada'
      : diff <= 0
      ? 'Atingiu a referência ótima'
      : `+${diff} cliques acima da referência`;

    const shareText = [
      `PYRAMIDLE #${challengeNumber}`,
      `Cliques: ${clicksUsed} | Referência: ${aiPar}`,
      statusLine,
      `Sequência: ${stats.currentStreak} dia(s)`,
    ].join('\n');

    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Desempenho no Desafio Diário</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            Fechar
          </button>
        </div>

        <div className="stats-summary-grid">
          <div className="stat-item">
            <strong>{stats.played}</strong>
            <span>Jogos</span>
          </div>
          <div className="stat-item">
            <strong>{winRate}%</strong>
            <span>Vitórias</span>
          </div>
          <div className="stat-item">
            <strong>{stats.currentStreak}</strong>
            <span>Sequência</span>
          </div>
          <div className="stat-item">
            <strong>{stats.maxStreak}</strong>
            <span>Recorde</span>
          </div>
        </div>

        {dailyResult ? (
          <div className="daily-summary-card">
            <h3>Desafio #{challengeNumber} Concluído</h3>
            <p className="daily-comparison">
              Resolvido em <strong>{dailyResult.clicks} cliques</strong> (Referência:{' '}
              <strong>{aiPar} cliques</strong>).
            </p>
            {dailyResult.usedAi && (
              <p className="ai-assisted-note">
                Nota: A resolução passo a passo foi utilizada nesta partida.
              </p>
            )}
            <button
              type="button"
              className="btn btn-primary share-btn"
              onClick={handleShare}
            >
              {copied ? 'Resultado copiado' : 'Copiar Resultado'}
            </button>
          </div>
        ) : (
          <p className="pending-daily-msg">
            Conclua o <strong>Desafio Diário #{challengeNumber}</strong> para
            habilitar o resumo para compartilhamento.
          </p>
        )}
      </div>
    </div>
  );
}
