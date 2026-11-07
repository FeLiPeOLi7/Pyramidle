import React from 'react';

export default function Header({
  mode,
  setMode,
  challengeNumber,
  streak,
  onOpenHelp,
  onOpenStats,
  onJumpToContext,
}) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand-group">
          <div className="brand-logo" aria-hidden="true">
            <span className="dot dot-top" />
            <span className="dot dot-left" />
            <span className="dot dot-right" />
          </div>
          <div>
            <div className="brand-title-row">
              <h1 className="brand-title">PYRAMIDLE</h1>
              <span className="daily-badge">#{challengeNumber}</span>
            </div>
          </div>
        </div>

        <nav className="mode-tabs" aria-label="Modo de jogo">
          <button
            type="button"
            className={`mode-tab ${mode === 'daily' ? 'active' : ''}`}
            onClick={() => setMode('daily')}
          >
            Desafio Diário
          </button>
          <button
            type="button"
            className={`mode-tab ${mode === 'free' ? 'active' : ''}`}
            onClick={() => setMode('free')}
          >
            Modo Livre
          </button>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="text-link-btn"
            onClick={onJumpToContext}
            title="Ver explicação técnica em slides"
          >
            Como Funciona
          </button>
          <div className="streak-pill" title="Sequência de dias seguidos">
            <span className="streak-label">Sequência</span>
            <strong>{streak}</strong>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onOpenStats}
            title="Estatísticas"
            aria-label="Estatísticas"
          >
            Stats
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onOpenHelp}
            title="Regras do jogo"
            aria-label="Regras"
          >
            Regras
          </button>
        </div>
      </div>
    </header>
  );
}
