import React from 'react';

export default function GameControls({
  mode,
  numBalls,
  onChangeNumBalls,
  clicks,
  maxClicks,
  aiPar,
  blackCount,
  totalBalls,
  solving,
  solved,
  usedAi,
  canUseAi,
  onToggleSolve,
  onReset,
  onNewRandomBoard,
  showRadiusPreview,
  setShowRadiusPreview,
  t,
}) {
  const progressPct = Math.round((blackCount / totalBalls) * 100);

  return (
    <section className="controls-panel">
      <div className="metrics-grid">
        <div className="metric-box">
          <span className="metric-label">{t.clicks}</span>
          <strong className="metric-value">
            {clicks} / {maxClicks}
          </strong>
        </div>

        <div className="metric-box">
          <span className="metric-label">{t.par}</span>
          <strong className="metric-value accent">
            {`${aiPar} ${t.clicksUnit}`}
          </strong>
        </div>

        <div className="metric-box">
          <span className="metric-label">{t.progress}</span>
          <strong className="metric-value">
            {blackCount}/{totalBalls} ({progressPct}%)
          </strong>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      {mode === 'free' && (
        <div className="size-selector-bar">
          <div className="size-label-group">
            <span className="size-title">
              {t.baseTitle}: {numBalls}
            </span>
            <span className="size-desc">
              {totalBalls} {t.totalBalls} •{' '}
              {numBalls <= 6 ? t.aiDqnDesc : t.aiGf2Desc}
            </span>
          </div>
          <div className="size-controls-right">
            <button
              type="button"
              disabled={solving || numBalls <= 2}
              className="size-btn"
              onClick={() => onChangeNumBalls(Math.max(2, numBalls - 1))}
              title={t.decreaseBase}
            >
              −
            </button>
            <input
              type="range"
              min={2}
              max={20}
              value={numBalls}
              disabled={solving}
              onChange={(e) => onChangeNumBalls(Number(e.target.value))}
              className="size-slider"
            />
            <button
              type="button"
              disabled={solving || numBalls >= 20}
              className="size-btn"
              onClick={() => onChangeNumBalls(Math.min(20, numBalls + 1))}
              title={t.increaseBase}
            >
              +
            </button>
            <div className="size-buttons">
              {[3, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                <button
                  key={n}
                  type="button"
                  disabled={solving}
                  className={`size-btn ${numBalls === n ? 'active' : ''} ${
                    n > 8 ? 'human-only' : ''
                  }`}
                  onClick={() => onChangeNumBalls(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="actions-row">
        <div className="left-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onReset}
            disabled={solving || (!solved && clicks === 0 && !usedAi)}
          >
            {t.reset}
          </button>

          {mode === 'free' && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onNewRandomBoard}
              disabled={solving}
            >
              {t.newBoard}
            </button>
          )}

          <label className="preview-toggle">
            <input
              type="checkbox"
              checked={showRadiusPreview}
              onChange={(e) => setShowRadiusPreview(e.target.checked)}
            />
            <span>{t.showRadius}</span>
          </label>
        </div>

        <div className="right-actions">
          {canUseAi ? (
            <button
              type="button"
              className={`btn ${solving ? 'btn-Warning' : 'btn-primary'} ${
                mode === 'daily' && !solving ? 'btn-daily-ai' : ''
              }`}
              onClick={onToggleSolve}
              disabled={solved}
              title={
                mode === 'daily' && !solving
                  ? t.solveStepDailyWarn
                  : undefined
              }
            >
              {solving
                ? t.pauseSolve
                : mode === 'daily'
                ? t.solveStepDailyWarn
                : t.solveStep}
            </button>
          ) : (
            <span className="human-challenge-pill">{t.manualMode}</span>
          )}
        </div>
      </div>
    </section>
  );
}
