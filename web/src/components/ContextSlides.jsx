import React from 'react';

export default function ContextSlides({ onBackToGame }) {
  return (
    <>
      {/* Slide 1: Álgebra Linear em GF(2) */}
      <section className="snap-slide context-slide" id="slide-math">
        <div className="slide-content">
          <span className="slide-kicker">01 / ENGENHARIA DO TABULEIRO</span>
          <h2 className="slide-title">
            Como garantimos que nenhuma pirâmide seja impossível
          </h2>
          <p className="slide-lead">
            Sorteios puramente aleatórios das cores iniciais frequentemente geram
            tabuleiros sem solução matemática. Na pirâmide de base 3, por exemplo, 75%
            das combinações aleatórias são insolúveis porque as bolas intermediárias
            das arestas invertem exatamente o mesmo subconjunto de bolas.
          </p>

          <div className="slide-grid-two">
            <div className="context-card">
              <h3>Sistema Linear Binário — GF(2)</h3>
              <p>
                Duas propriedades algébricas governam o jogo: a ordem dos cliques não
                altera o resultado final (comutatividade) e clicar duas vezes na mesma
                bola anula a operação (<code>1 XOR 1 = 0</code>).
              </p>
              <div className="formula-box">A · x ≡ b (mod 2)</div>
              <p className="card-subtext">
                Onde <code>A</code> é a matriz de adjacência (distância ≤ 3r),{' '}
                <code>x</code> é o vetor de cliques e <code>b</code> representa as
                bolas que começam brancas.
              </p>
            </div>

            <div className="context-card">
              <h3>Eliminação Gaussiana com XOR</h3>
              <p>
                Para validar um tabuleiro, o motor do jogo monta a matriz aumentada{' '}
                <code>[A | b]</code> e executa o escalonamento de Gauss utilizando a
                operação lógica <code>XOR</code> em vez de subtração.
              </p>
              <p className="card-subtext">
                Caso surja alguma linha com todos os coeficientes nulos igualada a 1 (
                <code>[0, 0, ..., 0 | 1]</code>), o estado é descartado como
                inconsistente em microssegundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Resolução Automática */}
      <section className="snap-slide context-slide" id="slide-ai">
        <div className="slide-content">
          <span className="slide-kicker">02 / RESOLUÇÃO AUTOMÁTICA</span>
          <h2 className="slide-title">
            Como o resolvedor passo a passo toma decisões
          </h2>
          <p className="slide-lead">
            Como uma pirâmide de base 8 possui mais de 68 bilhões de estados
            possíveis, o botão de resolução automática utiliza uma Rede Neural
            Profunda (Double DQN) treinada por reforço para estimar o valor esperado
            de clicar em cada bola a partir do estado atual.
          </p>

          <div className="ai-architecture-row">
            <div className="mini-spec">
              <strong>Treinamento Progressivo</strong>
              <span>
                O modelo aprende inicialmente em tabuleiros a 1 clique da vitória e
                aumenta gradualmente a complexidade até dominar configurações
                completas.
              </span>
            </div>
            <div className="mini-spec">
              <strong>Memória Anti-Ciclo</strong>
              <span>
                Impede cliques duplos imediatos e registra pares (estado, ação)
                visitados para evitar oscilações infinitas, mantendo livre voltar
                atrás para corrigir rota.
              </span>
            </div>
            <div className="mini-spec">
              <strong>Inferência no Navegador</strong>
              <span>
                Os pesos das camadas lineares treinadas em Python são exportados e
                executados nativamente em JavaScript, sem necessidade de servidor.
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
