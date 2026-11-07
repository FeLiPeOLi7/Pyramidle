import React from 'react';

export default function HelpModal({ isOpen, onClose, onJumpToContext }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card help-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Regras do Jogo</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            Fechar
          </button>
        </div>

        <div className="help-body">
          <section className="help-section">
            <h3>Objetivo</h3>
            <p>
              Deixe <strong>todas as bolas da pirâmide pretas</strong> utilizando a
              menor quantidade de cliques possível.
            </p>
            <p>
              Ao clicar em uma bola, ela própria e todas as bolas vizinhas dentro de
              um raio de alcance de <code>3 × raio</code> invertem de cor
              simultaneamente.
            </p>
          </section>

          <section className="help-section">
            <h3>Modos Disponíveis</h3>
            <ul>
              <li>
                <strong>Desafio Diário:</strong> Uma pirâmide única por dia (base 5,
                15 bolas), igual para todos os jogadores.
              </li>
              <li>
                <strong>Modo Livre:</strong> Permite escolher o tamanho da base entre
                2 e 10 bolas, sortear novos tabuleiros e assistir à resolução
                automática passo a passo (disponível até 8 bolas na base).
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
              Ver explicação matemática nos slides abaixo ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
