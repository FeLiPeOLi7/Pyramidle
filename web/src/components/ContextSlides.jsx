import React from 'react';

const REPO_URL = 'https://github.com/FeLiPeOLi7/Pyramidle';

export default function ContextSlides({ onBackToGame, t }) {
  return (
    <>
      {/* Slide 1: Como o tabuleiro funciona */}
      <section className="snap-slide context-slide" id="slide-math">
        <div className="slide-content">
          <span className="slide-kicker">{t.mathKicker}</span>
          <h2 className="slide-title">{t.mathTitle}</h2>
          <p className="slide-lead">{t.mathLead}</p>

          <div className="slide-grid-two">
            <div className="context-card">
              <h3>{t.gf2CardTitle}</h3>
              <p>{t.gf2CardP1}</p>
              <div className="formula-box">A · x ≡ b (mod 2)</div>
              <p className="card-subtext">{t.gf2CardSub}</p>
            </div>

            <div className="context-card">
              <h3>{t.filterCardTitle}</h3>
              <p>{t.filterCardP1}</p>
              <p className="card-subtext">{t.filterCardSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: IA (DQN) vs Matemática (GF2) */}
      <section className="snap-slide context-slide" id="slide-ai">
        <div className="slide-content">
          <span className="slide-kicker">{t.aiKicker}</span>
          <h2 className="slide-title">{t.aiTitle}</h2>
          <p className="slide-lead">
            {t.aiLead1}
            <strong>{t.aiLead2}</strong>
            {t.aiLead3}
            <strong>{t.aiLead4}</strong>
            {t.aiLead5}
            <strong>{t.aiLead6}</strong>
            {t.aiLead7}
            <strong>{t.aiLead8}</strong>
            {t.aiLead9}
          </p>

          <div className="ai-architecture-row">
            <div className="mini-spec">
              <strong>{t.aiSpec1Title}</strong>
              <span>{t.aiSpec1Desc}</span>
            </div>
            <div className="mini-spec">
              <strong>{t.aiSpec2Title}</strong>
              <span>{t.aiSpec2Desc}</span>
            </div>
            <div className="mini-spec">
              <strong>{t.aiSpec3Title}</strong>
              <span>{t.aiSpec3Desc}</span>
            </div>
          </div>

          <div className="slide-footer-action">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onBackToGame}
            >
              {t.backToGame}
            </button>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary github-slide-btn"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
