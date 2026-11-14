import React from 'react';

export default function Header({
  mode,
  setMode,
  challengeNumber,
  streak,
  onOpenHelp,
  onOpenStats,
  onJumpToContext,
  lang,
  onToggleLang,
  t,
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
            {t.daily}
          </button>
          <button
            type="button"
            className={`mode-tab ${mode === 'free' ? 'active' : ''}`}
            onClick={() => setMode('free')}
          >
            {t.free}
          </button>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="text-link-btn"
            onClick={onJumpToContext}
            title={t.howItWorks}
          >
            {t.howItWorks}
          </button>

          <div className="streak-pill" title={t.streak}>
            <span className="streak-label">{t.streak}</span>
            <strong>{streak}</strong>
          </div>

          <button
            type="button"
            className="icon-btn"
            onClick={onOpenStats}
            title={t.stats}
            aria-label={t.stats}
          >
            {t.stats}
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={onOpenHelp}
            title={t.rules}
            aria-label={t.rules}
          >
            {t.rules}
          </button>

          <button
            type="button"
            className="lang-btn"
            onClick={onToggleLang}
            title={t.changeLang}
            aria-label={t.changeLang}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </header>
  );
}
