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
  canUseAi,
  onToggleSolve,
  onReset,
  onNewRandomBoard,
  showRadiusPreview,
  setShowRadiusPreview,
}) {
  const progressPct = Math.round((blackCount / totalBalls) * 100);

  return (
    <section className="controls-panel">
      <div className="metrics-grid">
        <div className="metric-box">
          <span className="metric-label">Cliques</span>
          <strong className="metric-value">
            {clicks} / {maxClicks}
          </strong>
        </div>

        <div className="metric-box">
          <span className="metric-label">Referência (Par)</span>
          <strong className="metric-value accent">
            {`${aiPar} cliques`}
          </strong>
        </div>

        <div className="metric-box">
          <span className="metric-label">Progresso</span>
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
            <span className="size-title">Base da Pirâmide: {numBalls}</span>
            <span className="size-desc">
              {totalBalls} bolas no total •{' '}
              {numBalls <= 6
                ? 'Resolvedor automático: Rede Neural (IA)'
                : 'Resolvedor automático: Álgebra Linear GF(2)'}
            </span>
          </div>
          <div className="size-controls-right">
            <button
              type="button"
              disabled={solving || numBalls <= 2}
              className="size-btn"
              onClick={() => onChangeNumBalls(Math.max(2, numBalls - 1))}
              title="Diminuir base"
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
              title="Aumentar base"
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
            disabled={solving || clicks === 0}
          >
            Reiniciar
          </button>

          {mode === 'free' && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onNewRandomBoard}
              disabled={solving}
            >
              Novo Tabuleiro
            </button>
          )}

          <label className="preview-toggle">
            <input
              type="checkbox"
              checked={showRadiusPreview}
              onChange={(e) => setShowRadiusPreview(e.target.checked)}
            />
            <span>Visualizar alcance</span>
          </label>
        </div>

        <div className="right-actions">
          {canUseAi ? (
            <button
              type="button"
              className={`btn ${solving ? 'btn-Warning' : 'btn-primary'}`}
              onClick={onToggleSolve}
              disabled={solved}
            >
              {solving ? 'Pausar Resolução' : 'Resolver Passo a Passo'}
            </button>
          ) : (
            <span className="human-challenge-pill">Modo Manual</span>
          )}
        </div>
      </div>
    </section>
  );
}
