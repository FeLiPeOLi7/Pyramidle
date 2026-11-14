import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import PyramidBoard from './components/PyramidBoard';
import GameControls from './components/GameControls';
import ContextSlides from './components/ContextSlides';
import StatsModal from './components/StatsModal';
import HelpModal from './components/HelpModal';
import Footer from './components/Footer';
import {
  applyAction,
  createPyramidGeometry,
  generatePuzzleState,
  getGf2Action,
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
import { translations, getInitialLanguage } from './i18n/translations';

const DAILY_BASE_SIZES = [5, 6, 7, 8];
const MAX_AI_BASE_SIZE = 6;
const STORAGE_STATS_KEY = 'pyramidle_stats_v1';
const STORAGE_DAILY_PREFIX = 'pyramidle_daily_';

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, lastWinDate: null };
}

export default function App() {
  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );
  const todayKey = useMemo(() => getTodayKey(), []);
  const challengeNumber = useMemo(() => getChallengeNumber(todayKey), [todayKey]);

  const [lang, setLang] = useState(getInitialLanguage);
  const t = translations[lang] || translations.pt;

  const handleToggleLang = () => {
    const nextLang = lang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
    try {
      localStorage.setItem('pyramidle_lang', nextLang);
    } catch (_) {}
  };

  const slides = useMemo(() => [
    { id: 'slide-game', label: t.slides.game },
    { id: 'slide-math', label: t.slides.slideMath },
    { id: 'slide-ai', label: t.slides.slideAi },
  ], [t.slides]);

  const [mode, setMode] = useState(
    () => searchParams.get('mode') === 'free' ? 'free' : 'daily'
  );
  const [freeNumBalls, setFreeNumBalls] = useState(
    () => Number(searchParams.get('size')) || 5
  );
  const [allWeights, setAllWeights] = useState(null);

  const [initialState, setInitialState] = useState([]);
  const [state, setState] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [aiPar, setAiPar] = useState(4);
  const [solving, setSolving] = useState(false);
  const [usedAi, setUsedAi] = useState(false);
  const [lastAiAction, setLastAiAction] = useState(() =>
    searchParams.has('aiStep') ? Number(searchParams.get('aiStep')) : null
  );
  const [showRadiusPreview, setShowRadiusPreview] = useState(
    () => searchParams.get('preview') === 'true'
  );
  const [activeSlide, setActiveSlide] = useState(
    () => Number(searchParams.get('slide')) || 0
  );

  const [isStatsOpen, setIsStatsOpen] = useState(
    () => searchParams.get('modal') === 'stats'
  );
  const [isHelpOpen, setIsHelpOpen] = useState(
    () => searchParams.get('modal') === 'help'
  );
  const [isGameOverOpen, setIsGameOverOpen] = useState(
    () => searchParams.get('modal') === 'gameover'
  );

  const [stats, setStats] = useState(loadStats);
  const [dailyResult, setDailyResult] = useState(() => {
    try {
      const raw = localStorage.getItem(`${STORAGE_DAILY_PREFIX}${todayKey}`);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return null;
  });

  const snapContainerRef = useRef(null);
  const visitedRef = useRef(new Set());
  const lastActionRef = useRef(null);

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
    if (!searchParams.has('modal')) setIsGameOverOpen(false);
    setLastAiAction(
      searchParams.has('aiStep') ? Number(searchParams.get('aiStep')) : null
    );
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
    computeAiBenchmark(
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

  useEffect(() => {
    const slideParam = Number(searchParams.get('slide'));
    if (!Number.isNaN(slideParam) && slideParam >= 0 && slideParam <= 2) {
      setActiveSlide(slideParam);
      const targetId = slides[slideParam]?.id;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxClicks = Math.max(aiPar * 2, 4);
  const solved = state.length > 0 && isDone(state);
  const gameOver = !solved && !solving && clicks >= maxClicks;

  useEffect(() => {
    if (gameOver) {
      setIsGameOverOpen(true);
    }
  }, [gameOver]);

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
        // Se a IA foi utilizada para resolver, NÃO conta vitória e PERDE a sequência (streak = 0)!
        if (usedAi) {
          const updated = {
            ...prev,
            played: prev.played + 1,
            currentStreak: 0,
          };
          try {
            localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(updated));
          } catch (_) {}
          return updated;
        }

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
    const useDqn = activeNumBalls <= MAX_AI_BASE_SIZE && Boolean(modelForSize);

    const timer = setTimeout(async () => {
      const stateKey = state.join('');
      let action;

      if (useDqn) {
        const res = await selectDqnAction(
          modelForSize,
          state,
          lastActionRef.current,
          visitedRef.current,
          geometry.adjMatrix
        );
        action = res.action;
      } else {
        action = getGf2Action(geometry.adjMatrix, state);
      }

      visitedRef.current.add(`${stateKey}:${action}`);
      lastActionRef.current = action;
      setLastAiAction(action);
      setState((prev) => applyAction(prev, geometry.adjMatrix, action));
    }, 500);

    return () => clearTimeout(timer);
  }, [solving, solved, state, allWeights, activeNumBalls, geometry]);

  const handleBallClick = (ballIdx) => {
    if (solved || solving || gameOver) return;
    setLastAiAction(null);
    lastActionRef.current = ballIdx;
    setState((prev) => applyAction(prev, geometry.adjMatrix, ballIdx));
    setClicks((c) => c + 1);
  };

  const handleResetToInitial = () => {
    setSolving(false);
    setIsGameOverOpen(false);
    setLastAiAction(null);
    lastActionRef.current = null;
    visitedRef.current = new Set();
    setState(initialState);
    setClicks(0);
  };

  const handleWatchSolutionFromStart = () => {
    setIsGameOverOpen(false);
    setUsedAi(true);
    setLastAiAction(null);
    lastActionRef.current = null;
    visitedRef.current = new Set();
    setState(initialState);
    setClicks(0);
    setSolving(true);
  };

  const handleToggleSolve = () => {
    if (!solving) {
      setUsedAi(true);
      if (mode === 'daily') {
        // Se no modo diário pediu ajuda da IA, perde a sequência no ato
        setStats((prev) => {
          if (prev.currentStreak > 0) {
            const updated = { ...prev, currentStreak: 0 };
            try {
              localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(updated));
            } catch (_) {}
            return updated;
          }
          return prev;
        });
      }
      lastActionRef.current = null;
      visitedRef.current = new Set();
      setSolving(true);
    } else {
      setSolving(false);
    }
  };

  const scrollToSlide = (index) => {
    const targetId = slides[index]?.id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSlide(index);
  };

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const index = Math.round(el.scrollTop / el.clientHeight);
    if (index !== activeSlide && index >= 0 && index < slides.length) {
      setActiveSlide(index);
    }
  };

  const canUseAi = true;

  const blackCount = state.reduce((acc, v) => acc + v, 0);

  const gameOverBody = t.gameOverModal.body
    .replace('{maxClicks}', maxClicks)
    .replace('{aiPar}', aiPar);

  return (
    <div
      className="snap-container"
      ref={snapContainerRef}
      onScroll={handleScroll}
    >
      {/* Navegação lateral de slides */}
      <aside className="slide-dots" aria-label="Navegação de seções">
        {slides.map((s, idx) => (
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
          lang={lang}
          onToggleLang={handleToggleLang}
          t={t.header}
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
            t={t.board}
          />

          <GameControls
            mode={mode}
            numBalls={activeNumBalls}
            onChangeNumBalls={(n) => setFreeNumBalls(n)}
            clicks={clicks}
            maxClicks={maxClicks}
            aiPar={aiPar}
            blackCount={blackCount}
            totalBalls={geometry.balls.length}
            solving={solving}
            solved={solved}
            usedAi={usedAi}
            canUseAi={canUseAi}
            onToggleSolve={handleToggleSolve}
            onReset={handleResetToInitial}
            onNewRandomBoard={() => setupBoard('free', activeNumBalls)}
            showRadiusPreview={showRadiusPreview}
            setShowRadiusPreview={setShowRadiusPreview}
            t={t.controls}
          />
        </main>

        <Footer onScrollToMath={() => scrollToSlide(1)} t={t.footer} />
      </section>

      {/* Slides 2, 3 e 4: Contexto e Engenharia */}
      <ContextSlides onBackToGame={() => scrollToSlide(0)} t={t.slides} />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        onReset={handleResetToInitial}
        stats={stats}
        dailyResult={dailyResult}
        challengeNumber={challengeNumber}
        aiPar={aiPar}
        t={t.statsModal}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onJumpToContext={() => scrollToSlide(1)}
        t={t.helpModal}
      />

      {isGameOverOpen && (
        <div className="modal-backdrop" onClick={() => setIsGameOverOpen(false)}>
          <div
            className="modal-card gameover-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{t.gameOverModal.title}</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsGameOverOpen(false)}
              >
                {t.gameOverModal.close}
              </button>
            </div>
            <div className="gameover-body">
              <p>{gameOverBody}</p>
              <div className="gameover-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleResetToInitial}
                >
                  {t.gameOverModal.tryAgain}
                </button>
                {canUseAi && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleWatchSolutionFromStart}
                  >
                    {t.gameOverModal.watchSolution}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
