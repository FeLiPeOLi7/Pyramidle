import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import PyramidBoard from './components/PyramidBoard';
import GameControls from './components/GameControls';
import ContextSlides from './components/ContextSlides';
import StatsModal from './components/StatsModal';
import HelpModal from './components/HelpModal';
import {
  applyAction,
  createPyramidGeometry,
  generatePuzzleState,
  isDone,
} from './engine/pyramid';
import { 
  computeAiBenchmark, 
  loadAllDqnSessions, 
  selectDqnAction 
} from './engine/dqnSolver';
import {
  createSeededRng,
  getChallengeNumber,
  getTodayKey,
} from './engine/seededRng';

const DAILY_BASE_SIZES = [5, 6, 7, 8];
const MAX_AI_BASE_SIZE = 8;
const STORAGE_STATS_KEY = 'pyramidle_stats_v1';
const STORAGE_DAILY_PREFIX = 'pyramidle_daily_';

const SLIDES = [
  { id: 'slide-game', label: 'Jogo' },
  { id: 'slide-math', label: '01 Tabuleiro' },
  { id: 'slide-ai', label: '02 Resolvedor' },
];

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, lastWinDate: null };
}

export default function App() {
  const todayKey = useMemo(() => getTodayKey(), []);
  const challengeNumber = useMemo(() => getChallengeNumber(todayKey), [todayKey]);

  const [mode, setMode] = useState('daily');
  const [freeNumBalls, setFreeNumBalls] = useState(5);
  const [allWeights, setAllWeights] = useState(null);

  const [initialState, setInitialState] = useState([]);
  const [state, setState] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [aiPar, setAiPar] = useState(4);
  const [solving, setSolving] = useState(false);
  const [usedAi, setUsedAi] = useState(false);
  const [lastAiAction, setLastAiAction] = useState(null);
  const [showRadiusPreview, setShowRadiusPreview] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const [stats, setStats] = useState(() => loadStats());
  const [dailyResult, setDailyResult] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_DAILY_PREFIX}${todayKey}`);
      return saved ? JSON.parse(saved) : null;
    } catch (_) {
      return null;
    }
  });

  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const snapContainerRef = useRef(null);
  const lastActionRef = useRef(null);
  const visitedRef = useRef(new Set());

  const dailyBaseSize =
    DAILY_BASE_SIZES[(challengeNumber - 1) % DAILY_BASE_SIZES.length];
  const activeNumBalls = mode === 'daily' ? dailyBaseSize : freeNumBalls;
  const geometry = useMemo(
    () => createPyramidGeometry(activeNumBalls, 760, 420),
    [activeNumBalls]
  );

  useEffect(() => {
    loadAllDqnSessions(MAX_AI_BASE_SIZE)
      .then((sessions) => setAllWeights(sessions))
      .catch((err) => console.error('Erro ao carregar modelos ONNX:', err));
  }, []);

  const setupBoard = (targetMode = mode, targetSize = activeNumBalls, customSeed = null) => {
    setSolving(false);
    setLastAiAction(null);
    setUsedAi(false);
    lastActionRef.current = null;
    visitedRef.current = new Set();

    const geom = createPyramidGeometry(targetSize, 760, 420);
    const rng =
      targetMode === 'daily'
        ? createSeededRng(`PYRAMIDLE-${todayKey}-BASE-${targetSize}`)
        : customSeed
        ? createSeededRng(customSeed)
        : Math.random;

    const scrambleDepth = Math.min(geom.balls.length, targetSize + 3);
    const minRequiredClicks =
      targetSize <= 2 ? 1 : Math.min(targetSize - 1, 7);
    const { initialState: generated, optimalHintClicks } = generatePuzzleState(
      geom.adjMatrix,
      rng,
      scrambleDepth,
      minRequiredClicks
    );

    setInitialState(generated);
    setState(generated);
    setClicks(0);

    const modelForSize = allWeights ? allWeights[String(targetSize)] : null;
    const benchmark = computeAiBenchmark(
      modelForSize,
      generated,
      geom.adjMatrix,
      optimalHintClicks
    ).then((benchmark) => setAiPar(benchmark));
  };

  useEffect(() => {
    setupBoard(mode, activeNumBalls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, activeNumBalls, allWeights]);

  const solved = state.length > 0 && isDone(state);

  useEffect(() => {
    if (!solved) return;
    setSolving(false);

    if (mode === 'daily' && !dailyResult) {
      const resultObj = { clicks, usedAi, date: todayKey };
      setDailyResult(resultObj);
      try {
        localStorage.setItem(
          `${STORAGE_DAILY_PREFIX}${todayKey}`,
          JSON.stringify(resultObj)
        );
      } catch (_) {}

      setStats((prev) => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yKey = `${yesterday.getFullYear()}-${String(
          yesterday.getMonth() + 1
        ).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

        const nextStreak =
          prev.lastWinDate === yKey
            ? prev.currentStreak + 1
            : prev.lastWinDate === todayKey
            ? prev.currentStreak
            : 1;

        const updated = {
          played: prev.played + 1,
          wins: prev.wins + 1,
          currentStreak: nextStreak,
          maxStreak: Math.max(prev.maxStreak, nextStreak),
          lastWinDate: todayKey,
        };
        try {
          localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(updated));
        } catch (_) {}
        return updated;
      });

      setTimeout(() => setIsStatsOpen(true), 600);
    }
  }, [solved, mode, dailyResult, clicks, usedAi, todayKey]);

  useEffect(() => {
    if (!solving || solved) return;
    const modelForSize = allWeights ? allWeights[String(activeNumBalls)] : null;
    if (!modelForSize) {
      setSolving(false);
      return;
    }

    const timer = setTimeout(async () => {
      const stateKey = state.join('');
      const { action } = await selectDqnAction(
        modelForSize,
        state,
        lastActionRef.current,
        visitedRef.current
      );

      visitedRef.current.add(`${stateKey}:${action}`);
      lastActionRef.current = action;
      setLastAiAction(action);
      setState((prev) => applyAction(prev, geometry.adjMatrix, action));
      setClicks((c) => c + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [solving, solved, state, allWeights, activeNumBalls, geometry]);

  const handleBallClick = (ballIdx) => {
    if (solved || solving) return;
    setLastAiAction(null);
    lastActionRef.current = ballIdx;
    setState((prev) => applyAction(prev, geometry.adjMatrix, ballIdx));
    setClicks((c) => c + 1);
  };

  const handleResetToInitial = () => {
    setSolving(false);
    setLastAiAction(null);
    lastActionRef.current = null;
    visitedRef.current = new Set();
    setState(initialState);
    setClicks(0);
  };

  const handleToggleSolve = () => {
    if (!solving) {
      setUsedAi(true);
      lastActionRef.current = null;
      visitedRef.current = new Set();
      setSolving(true);
    } else {
      setSolving(false);
    }
  };

  const scrollToSlide = (index) => {
    const targetId = SLIDES[index]?.id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSlide(index);
    }
  };

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / container.clientHeight);
    if (index !== activeSlide && index >= 0 && index < SLIDES.length) {
      setActiveSlide(index);
    }
  };

  const canUseAi =
    activeNumBalls <= MAX_AI_BASE_SIZE &&
    Boolean(allWeights && allWeights[String(activeNumBalls)]);

  const blackCount = state.reduce((acc, v) => acc + v, 0);

  return (
    <div
      className="snap-container"
      ref={snapContainerRef}
      onScroll={handleScroll}
    >
      {/* Navegação lateral de slides */}
      <aside className="slide-dots" aria-label="Navegação de seções">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`slide-dot-btn ${activeSlide === idx ? 'active' : ''}`}
            onClick={() => scrollToSlide(idx)}
            title={s.label}
          >
            <span className="slide-dot-label">{s.label}</span>
            <span className="slide-dot-indicator" />
          </button>
        ))}
      </aside>

      {/* Slide 1: 100% Jogo */}
      <section className="snap-slide game-slide" id="slide-game">
        <Header
          mode={mode}
          setMode={setMode}
          challengeNumber={challengeNumber}
          streak={stats.currentStreak}
          onOpenHelp={() => setIsHelpOpen(true)}
          onOpenStats={() => setIsStatsOpen(true)}
          onJumpToContext={() => scrollToSlide(1)}
        />

        <main className="main-container">
          <PyramidBoard
            geometry={geometry}
            state={state}
            onBallClick={handleBallClick}
            lastAiAction={lastAiAction}
            solving={solving}
            solved={solved}
            showRadiusPreview={showRadiusPreview}
          />

          <GameControls
            mode={mode}
            numBalls={activeNumBalls}
            onChangeNumBalls={(n) => setFreeNumBalls(n)}
            clicks={clicks}
            aiPar={aiPar}
            blackCount={blackCount}
            totalBalls={geometry.balls.length}
            solving={solving}
            solved={solved}
            canUseAi={canUseAi}
            onToggleSolve={handleToggleSolve}
            onReset={handleResetToInitial}
            onNewRandomBoard={() => setupBoard('free', activeNumBalls)}
            showRadiusPreview={showRadiusPreview}
            setShowRadiusPreview={setShowRadiusPreview}
          />
        </main>

        <div className="scroll-hint-bar">
          <button
            type="button"
            className="scroll-down-btn"
            onClick={() => scrollToSlide(1)}
          >
            Entenda a matemática e o algoritmo de resolução ↓
          </button>
        </div>
      </section>

      {/* Slides 2, 3 e 4: Contexto e Engenharia */}
      <ContextSlides onBackToGame={() => scrollToSlide(0)} />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
        dailyResult={dailyResult}
        challengeNumber={challengeNumber}
        aiPar={aiPar}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onJumpToContext={() => scrollToSlide(1)}
      />
    </div>
  );
}
