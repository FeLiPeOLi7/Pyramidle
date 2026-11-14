import React from 'react';

export default function HelpModal({ isOpen, onClose, onJumpToContext, t }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card help-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t.title}</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            {t.close}
          </button>
        </div>

        <div className="help-body">
          <section className="help-section">
            <h3>{t.goalTitle}</h3>
            <p>{t.goalP1}</p>
            <p>{t.goalP2}</p>
          </section>

          <section className="help-section">
            <h3>{t.modesTitle}</h3>
            <ul>
              <li>
                <strong>{t.dailyDescTitle}</strong>
                {t.dailyDescText}
              </li>
              <li>
                <strong>{t.freeDescTitle}</strong>
                {t.freeDescText}
              </li>
            </ul>
          </section>

          <div className="help-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onClose();
                onJumpToContext();
              }}
            >
              {t.goToMath}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
