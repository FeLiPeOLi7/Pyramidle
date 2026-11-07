import React from 'react';

export default function ContextSlides({ onBackToGame }) {
  return (
    <>
      {/* Slide 1: Como o tabuleiro funciona */}
      <section className="snap-slide context-slide" id="slide-math">
        <div className="slide-content">
          <span className="slide-kicker">01 / POR TRÁS DO TABULEIRO</span>
          <h2 className="slide-title">
            Como garantimos que nenhum desafio seja impossível
          </h2>
          <p className="slide-lead">
            Se as cores iniciais fossem sorteadas de forma totalmente cega, a maioria
            das pirâmides simplesmente não teria solução. Na pirâmide de base 3, por
            exemplo, 75% dos sorteios aleatórios são impossíveis de resolver porque
            algumas bolas invertem exatamente o mesmo grupo de vizinhas.
          </p>

          <div className="slide-grid-two">
            <div className="context-card">
              <h3>A lógica dos cliques — GF(2)</h3>
              <p>
                Duas regras simples comandam o jogo: a ordem em que você clica nas
                bolas não muda o resultado final, e clicar duas vezes na mesma bola
                desfaz a jogada (como um interruptor de luz).
              </p>
              <div className="formula-box">A · x ≡ b (mod 2)</div>
              <p className="card-subtext">
                Onde <code>A</code> representa quais bolas são vizinhas (alcance ≤ 3r),{' '}
                <code>x</code> são os cliques necessários e <code>b</code> são as
                bolas que ainda estão brancas.
              </p>
            </div>

            <div className="context-card">
              <h3>Filtro antes da partida começar</h3>
              <p>
                Antes de mostrar qualquer tabuleiro na tela, o jogo resolve esse
                sistema em frações de milissegundo para ter certeza de que existe um
                caminho até a vitória e calcular a <strong>Referência (Par)</strong> de
                cliques.
              </p>
              <p className="card-subtext">
                Assim você nunca cai em um quebra-cabeça sem saída — todo tabuleiro tem
                solução garantida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: IA (DQN) vs Matemática (GF2) */}
      <section className="snap-slide context-slide" id="slide-ai">
        <div className="slide-content">
          <span className="slide-kicker">02 / IA vs. MATEMÁTICA</span>
          <h2 className="slide-title">
            Dois cérebros diferentes para resolver a pirâmide
          </h2>
          <p className="slide-lead">
            Até <strong>6 bolas na base</strong> (21 bolas no total, 2 milhões de estados),
            quem joga no botão de resolução é uma <strong>Rede Neural (Double DQN)</strong> com 100%
            de taxa de vitória. A partir de <strong>7 bolas na base</strong> (onde a complexidade
            combinatória explode para bilhões e trilhões de combinações e 20 paridades globais),
            o <strong>Resolvedor Algébrico em GF(2)</strong> assume para garantir solução ótima instantânea.
          </p>

          <div className="ai-architecture-row">
            <div className="mini-spec">
              <strong>Por que usar IA se a matemática já resolve?</strong>
              <span>
                A equação matemática é presa às regras atuais do jogo. Já uma Rede
                Neural dá liberdade criativa: se mudarmos as regras (novas cores,
                obstáculos ou poderes), a IA aprende a jogar do zero sem precisarmos
                descobrir uma fórmula nova.
              </span>
            </div>
            <div className="mini-spec">
              <strong>Mais viva e divertida de assistir</strong>
              <span>
                Enquanto o algoritmo matemático segue uma lista rígida como uma
                calculadora, a IA avalia o tabuleiro no &ldquo;olho&rdquo; a cada
                jogada: escolhe caminhos mais criativos e até corrige a própria rota se
                precisar.
              </span>
            </div>
            <div className="mini-spec">
              <strong>Rodando direto no seu navegador</strong>
              <span>
                Os modelos especialistas treinados em PyTorch foram exportados para ONNX e rodam 100%
                no seu dispositivo em tempo real, lado a lado com o motor matemático
                para as pirâmides maiores (7 a 20 bolas).
              </span>
            </div>
          </div>

          <div className="slide-footer-action">
            <button type="button" className="btn btn-secondary" onClick={onBackToGame}>
              Voltar ao Jogo ↑
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
