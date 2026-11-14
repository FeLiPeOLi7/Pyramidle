import React, { useState } from 'react';

export default function StatsModal({
  isOpen,
  onClose,
  onReset,
  stats,
  dailyResult,
  challengeNumber,
  aiPar,
  t,
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
      ? t.shareSolvedAi
      : diff <= 0
      ? t.shareOptimal
      : t.shareOverPar.replace('{diff}', diff);

    const shareText = [
      `PYRAMIDLE #${challengeNumber}`,
      `${t.games}: ${clicksUsed} | ${t.shareOptimal ? 'Par' : 'Referência'}: ${aiPar}`,
      statusLine,
      t.shareStreak.replace('{streak}', stats.currentStreak),
      window.location.origin,
    ].join('\n');

    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const challengeDoneText = t.challengeDone.replace('{n}', challengeNumber);
  const solvedInText = t.solvedIn
    .replace('{clicks}', dailyResult?.clicks ?? 0)
    .replace('{par}', aiPar);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t.title}</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            {t.close}
          </button>
        </div>

        <div className="stats-summary-grid">
          <div className="stat-item">
            <strong>{stats.played}</strong>
            <span>{t.games}</span>
          </div>
          <div className="stat-item">
            <strong>{winRate}%</strong>
            <span>{t.wins}</span>
          </div>
          <div className="stat-item">
            <strong>{stats.currentStreak}</strong>
            <span>{t.streak}</span>
          </div>
          <div className="stat-item">
            <strong>{stats.maxStreak}</strong>
            <span>{t.record}</span>
          </div>
        </div>

        {dailyResult ? (
          <div className="daily-summary-card">
            <h3>{challengeDoneText}</h3>
            <p className="daily-comparison">{solvedInText}</p>
            {dailyResult.usedAi && (
              <p className="ai-assisted-note">
                {t.aiAssistedNote}
              </p>
            )}
            <div className="daily-modal-actions">
              <button
                type="button"
                className="btn btn-primary share-btn"
                onClick={handleShare}
              >
                {copied ? t.copied : t.copyResult}
              </button>
              {onReset && (
                <button
                  type="button"
                  className="btn btn-secondary replay-btn"
                  onClick={() => {
                    onClose();
                    onReset();
                  }}
                >
                  {t.replayBoard || 'Refazer Tabuleiro'}
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="pending-daily-msg">
            {t.pendingDaily.replace('{n}', challengeNumber)}
          </p>
        )}
      </div>
    </div>
  );
}
