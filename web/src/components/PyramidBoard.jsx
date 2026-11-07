import React, { useState } from 'react';

export default function PyramidBoard({
  geometry,
  state,
  onBallClick,
  lastAiAction,
  solving,
  solved,
  showRadiusPreview,
}) {
  const [hoveredBall, setHoveredBall] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.has('hover') ? Number(params.get('hover')) : null;
  });
  const { balls, adjMatrix, radius, width, height } = geometry;

  const affectedSet = new Set();
  if (hoveredBall !== null && adjMatrix[hoveredBall]) {
    adjMatrix[hoveredBall].forEach((val, idx) => {
      if (val === 1) affectedSet.add(idx);
    });
  }

  const hoveredObj = hoveredBall !== null ? balls[hoveredBall] : null;

  return (
    <div className={`board-card ${solved ? 'board-solved' : ''}`}>
      <div className="board-top-bar">
        <div className="legend-row">
          <span className="legend-item">
            <span className="legend-ball white" /> Branca
          </span>
          <span className="legend-item">
            <span className="legend-ball black" /> Preta (Alvo)
          </span>
          {lastAiAction !== null && (
            <span className="legend-item ai-legend">
              <span className="legend-ball ai-ring" /> Passo Automático
            </span>
          )}
        </div>
        {solved && <span className="solved-inline-tag">Pirâmide Concluída</span>}
      </div>

      <div className="svg-wrapper">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="pyramid-svg"
          onMouseLeave={() => setHoveredBall(null)}
        >
          <defs>
            <radialGradient id="ballBlackGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="55%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
            <radialGradient id="ballWhiteGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
            <filter id="aiGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {showRadiusPreview && hoveredObj && !solving && (
            <circle
              cx={hoveredObj.x}
              cy={hoveredObj.y}
              r={radius * 3}
              className="radius-preview-circle"
            />
          )}

          {balls.map((ball) => {
            const isBlack = state[ball.index] === 1;
            const isAffected = affectedSet.has(ball.index);
            const isAiSelected = lastAiAction === ball.index;

            return (
              <g
                key={ball.index}
                className={`ball-group ${solving ? 'disabled' : ''}`}
                onMouseEnter={() => setHoveredBall(ball.index)}
                onClick={() => !solving && onBallClick(ball.index)}
              >
                {showRadiusPreview && isAffected && !solving && (
                  <circle
                    cx={ball.x}
                    cy={ball.y}
                    r={ball.radius + 4}
                    className="affected-halo"
                  />
                )}

                <circle
                  cx={ball.x}
                  cy={ball.y}
                  r={ball.radius - 2}
                  fill={isBlack ? 'url(#ballBlackGrad)' : 'url(#ballWhiteGrad)'}
                  stroke={isBlack ? '#38bdf8' : '#cbd5e1'}
                  strokeWidth={isBlack ? '2.2' : '1.5'}
                  className="ball-circle"
                />

                {isAiSelected && (
                  <circle
                    cx={ball.x}
                    cy={ball.y}
                    r={ball.radius + 2}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4.5"
                    filter="url(#aiGlow)"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
