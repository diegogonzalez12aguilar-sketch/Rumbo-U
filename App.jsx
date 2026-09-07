import { useState } from "react";
import { subjects, levelMeta } from "./data";

export default function App() {
  const [subjectId, setSubjectId] = useState(null);
  const [unitId, setUnitId] = useState(null);
  const [levelId, setLevelId] = useState(null);
  const [problemIndex, setProblemIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const subject = subjects.find((s) => s.id === subjectId);
  const unit = subject && subject.units.find((u) => u.id === unitId);
  const problems = unit && levelId ? unit.levels[levelId] : null;
  const problem = problems ? problems[problemIndex] : null;

  function goHome() {
    setSubjectId(null);
    setUnitId(null);
    setLevelId(null);
    setProblemIndex(0);
    setShowSolution(false);
  }

  function goSubject() {
    setUnitId(null);
    setLevelId(null);
    setProblemIndex(0);
    setShowSolution(false);
  }

  function goUnit() {
    setLevelId(null);
    setProblemIndex(0);
    setShowSolution(false);
  }

  function pickSubject(s) {
    if (!s.ready) return;
    setSubjectId(s.id);
  }

  function pickLevel(id) {
    setLevelId(id);
    setProblemIndex(0);
    setShowSolution(false);
  }

  function nextProblem() {
    if (problemIndex < problems.length - 1) {
      setProblemIndex(problemIndex + 1);
      setShowSolution(false);
    }
  }

  function prevProblem() {
    if (problemIndex > 0) {
      setProblemIndex(problemIndex - 1);
      setShowSolution(false);
    }
  }

  // ---------- PANTALLA DE INICIO ----------
  if (!subject) {
    return (
      <div className="home">
        <div className="hero">
          <p className="hero-eyebrow">Estudio para tu examen de admisión</p>
          <h1 className="hero-title">Rumbo U</h1>
          <p className="hero-sub">
            Elige una materia y avanza a tu ritmo, de fácil a difícil, con
            problemas como los del examen real.
          </p>
        </div>
        <div className="subject-grid">
          {subjects.map((s) => (
            <button
              key={s.id}
              className={`subject-card${s.ready ? "" : " locked"}`}
              onClick={() => pickSubject(s)}
              disabled={!s.ready}
            >
              <span className="subject-name">{s.name}</span>
              <span className="subject-tagline">{s.tagline}</span>
              <span className="subject-status">
                {s.ready ? "Empezar →" : "Próximamente"}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="brand">
        <h1>Rumbo U</h1>
        <span>{subject.name}</span>
      </div>

      {!unit && (
        <>
          <div className="crumb" onClick={goHome}>‹ Inicio</div>
          <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 14 }}>
            {subject.name} · elige una unidad
          </p>
          <div className="unit-list">
            {subject.units.map((u) => (
              <button
                key={u.id}
                className={`unit-card${u.ready ? "" : " disabled"}`}
                disabled={!u.ready}
                onClick={() => setUnitId(u.id)}
              >
                <div>
                  <span className="name">{u.name}</span>
                  <span className="status">
                    {u.ready ? "Problemas listos" : "Próximamente"}
                  </span>
                </div>
                <span>›</span>
              </button>
            ))}
          </div>
        </>
      )}

      {unit && !levelId && (
        <>
          <div className="crumb" onClick={goSubject}>‹ {subject.name}</div>
          <h2 style={{ fontSize: 19, marginBottom: 4 }}>{unit.name}</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 14 }}>
            Elige un nivel
          </p>
          <div className="level-grid">
            {Object.entries(levelMeta).map(([id, meta]) => (
              <button
                key={id}
                className={`level-card ${meta.cls}`}
                onClick={() => pickLevel(id)}
              >
                <div className="label">{meta.label}</div>
                <div className="count">{unit.levels[id].length} problemas</div>
              </button>
            ))}
          </div>
        </>
      )}

      {problem && (
        <>
          <div className="crumb" onClick={goUnit}>‹ {unit.name}</div>
          <div className="problem-card">
            <span className={`tag ${levelMeta[levelId].cls}`}>
              {levelMeta[levelId].label}
            </span>
            <span className="problem-progress">
              Problema {problemIndex + 1} de {problems.length}
            </span>
            <div style={{ clear: "both" }} />
            <p className="statement">{problem.statement}</p>

            {!showSolution && (
              <div className="actions">
                <button onClick={() => {}}>Intentar yo primero</button>
                <button className="primary" onClick={() => setShowSolution(true)}>
                  Ver solución
                </button>
              </div>
            )}

            {showSolution && (
              <div className="solution">
                <strong style={{ fontSize: 14 }}>Solución paso a paso</strong>
                <ol>
                  {problem.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
                <div className="answer">{problem.answer}</div>
              </div>
            )}

            <div className="nav-buttons">
              <button onClick={prevProblem} disabled={problemIndex === 0}>
                ‹ Anterior
              </button>
              <button
                onClick={nextProblem}
                disabled={problemIndex === problems.length - 1}
              >
                Siguiente ›
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
