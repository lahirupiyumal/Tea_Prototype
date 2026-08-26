// import { useState } from 'react'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// function HarvestQuality() {
//   const [analysed, setAnalysed] = useState(false)
//   const signals = ['Plantation health', 'Tea bush maturity', 'Climate conditions', 'Weather forecast', 'Harvest time', 'Estate zone']

//   return (
//     <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
//       <Header />
//       <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
//         {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 05 / QUALITY INTELLIGENCE</p>
//         <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
//           <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Harvest quality potential prediction</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">Use AI to estimate the quality potential of your harvest before it reaches the factory floor.</p></div>
//         </div> */}

//         <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
//           <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">AI SYSTEM INPUTS</p><h2 className="mt-3 font-serif text-2xl">What the model evaluates</h2><div className="mt-6 space-y-3">{signals.map((signal, index) => <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm" key={signal}><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-lime-700">{index + 1}</span>{signal}<b className="ml-auto text-xs text-emerald-600">Ready</b></div>)}</div><button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setAnalysed(true)}>{analysed ? 'Quality analysis complete ✓' : 'Analyse harvest quality'}</button></div>
//           <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10"><p className="text-xs font-bold tracking-widest text-emerald-200">QUALITY OUTPUT</p><h2 className="mt-3 font-serif text-3xl">Harvest Quality Potential</h2><p className="mt-4 text-sm leading-6 text-emerald-100">The model combines plantation health, maturity and climate conditions to estimate the quality grade.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><Quality level="Premium" active={analysed} /><Quality level="Medium" /><Quality level="Low" /></div><div className="mt-8 rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">PREDICTED QUALITY</small><strong className="mt-2 block font-serif text-4xl text-lime-300">{analysed ? 'Premium' : '—'}</strong></div></div>
//         </div>

//         <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-slate-400">EXAMPLE AI ANALYSIS</p><div className="mt-6 grid gap-4 md:grid-cols-3"><Metric label="Plantation health" value={analysed ? '91%' : '—'} /><Metric label="Harvest ready" value={analysed ? '96%' : '—'} /><Metric label="Climate" value={analysed ? 'Good' : '—'} /></div><div className="mt-8 border-t border-emerald-100 pt-7"><p className="text-xs font-bold tracking-widest text-lime-700">RECOMMENDATION</p><h2 className="mt-3 font-serif text-3xl">{analysed ? 'Harvest within the next 2–3 days.' : 'Awaiting quality analysis'}</h2><p className="mt-3 text-sm text-slate-500">{analysed ? 'This timing supports higher yield, better tea quality and improved market value.' : 'Run the AI analysis to receive a harvest recommendation.'}</p><div className="mt-6 grid gap-3 text-sm sm:grid-cols-2"><Benefit text="Higher yield" /><Benefit text="Higher tea quality" /><Benefit text="Better market value" /><Benefit text="Improved factory performance" /></div></div></div>
//       </section>
//       <Footer />
//     </main>
//   )
// }

// function Quality({ level, active = false }) { return <div className={`rounded-2xl p-5 ${active ? 'bg-lime-300 text-emerald-950' : 'bg-white/10'}`}><span className="text-2xl">★</span><strong className="mt-3 block">{level}</strong><small className="mt-1 block">{active ? 'Recommended' : 'Potential grade'}</small></div> }
// function Metric({ label, value }) { return <div className="rounded-2xl bg-emerald-50 p-5"><small className="text-xs text-slate-500">{label}</small><strong className="mt-2 block font-serif text-3xl">{value}</strong></div> }
// function Benefit({ text }) { return <div className="rounded-xl bg-emerald-50 p-4 text-emerald-900">✅ {text}</div> }

// export default HarvestQuality







import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger" (shared across all four steps).
 * — Signature element here: the quality panel reads like a tea taster's
 *   cupping card — graded tiers marked with leaf counts, and the verdict
 *   delivered as a torn grading tag rather than a generic stat block.
 */

const INK = '#1F3D2E'
const INK_DARK = '#152A1E'
const PAPER = '#FFFFFF'
const RULE = '#E5EEE8'
const GOLD = '#7EC151'
const GOLD_DEEP = '#568F32'
const SAGE = '#568F32'

const SIGNALS = ['Plantation health', 'Tea bush maturity', 'Climate conditions', 'Weather forecast', 'Harvest time', 'Estate zone']
const TIERS = [
  { level: 'Premium', leaves: 3, note: 'Top-grade cupping profile' },
  { level: 'Medium', leaves: 2, note: 'Sound, market-standard leaf' },
  { level: 'Low', leaves: 1, note: 'Below expected leaf quality' },
]

function Leaf({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
      <path d="M4 20C4 10 10 4 20 4C20 14 14 20 4 20Z" />
      <path d="M4 20L14 10" strokeLinecap="round" />
    </svg>
  )
}

function HarvestQuality() {
  const [analysed, setAnalysed] = useState(false)

  return (
    <main
      className="min-h-screen text-[#1F3D2E]"
      style={{ background: PAPER, fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .hq-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .hq-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .hq-tag {
          position: relative;
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
        }
      `}</style>

      <Header />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        {/* ── Intro ─────────────────────────────────────────────── */}
        {/* <p className="hq-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 05 · QUALITY INTELLIGENCE
        </p>
        <div className="mt-3 max-w-2xl">
          <h1 className="hq-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
            Harvest quality potential prediction
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A45]">
            Estimate the quality potential of your harvest before it reaches
            the factory floor.
          </p>
        </div> */}

        {/* ── Workspace ─────────────────────────────────────────── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          {/* INPUTS */}
          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="hq-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">AI system inputs</p>
            <h2 className="hq-display mt-2 text-xl font-medium" style={{ color: INK_DARK }}>
              What the model evaluates
            </h2>

            <div className="mt-6 space-y-2">
              {SIGNALS.map((signal, index) => (
                <div key={signal} className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm" style={{ background: '#F6F3E9' }}>
                  <span
                    className="hq-mono grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold"
                    style={{ background: '#FFFEF9', color: GOLD_DEEP, border: `1px solid ${RULE}` }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[#33422F]">{signal}</span>
                  <b className="hq-mono ml-auto text-[11px] tracking-wide" style={{ color: SAGE }}>READY</b>
                </div>
              ))}
            </div>

            <button
              onClick={() => setAnalysed(true)}
              className="hq-display mt-7 w-full rounded-sm py-3.5 text-[15px] font-medium tracking-wide transition active:scale-[.99]"
              style={analysed ? { background: '#E8E3D3', color: INK_DARK, border: `1px solid ${RULE}` } : { background: INK, color: PAPER }}
            >
              {analysed ? 'Quality analysis complete ✓' : 'Analyse harvest quality'}
            </button>
          </div>

          {/* CUPPING CARD */}
          <div className="rounded-sm p-7 text-white md:p-10" style={{ background: INK }}>
            <p className="hq-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>QUALITY OUTPUT</p>
            <h2 className="hq-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>Harvest quality potential</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Combines plantation health, maturity and climate conditions to
              estimate the quality grade.
            </p>

            <div className="mt-9 space-y-2.5">
              {TIERS.map(({ level, leaves, note }) => {
                const active = analysed && level === 'Premium'
                return (
                  <div
                    key={level}
                    className="flex items-center gap-4 rounded-sm px-4 py-3.5 transition"
                    style={active ? { background: GOLD, color: INK_DARK } : { background: 'rgba(246,243,233,0.06)', border: '1px solid rgba(246,243,233,0.12)' }}
                  >
                    <div className="flex gap-0.5" style={{ color: active ? INK_DARK : GOLD }}>
                      {[0, 1, 2].map((i) => <Leaf key={i} filled={i < leaves} />)}
                    </div>
                    <div className="flex-1">
                      <strong className="hq-display block text-base font-medium" style={{ color: active ? INK_DARK : PAPER }}>
                        {level}
                      </strong>
                      <span className="text-xs" style={{ color: active ? 'rgba(21,42,30,0.7)' : 'rgba(246,243,233,0.55)' }}>
                        {note}
                      </span>
                    </div>
                    {active && (
                      <span className="hq-mono text-[10px] font-semibold tracking-wide">RECOMMENDED</span>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="hq-tag mt-7 flex items-center justify-between py-4 pl-5 pr-8" style={{ background: 'rgba(246,243,233,0.08)' }}>
              <small className="hq-mono text-[10px] uppercase tracking-[.2em] text-white/50">Predicted quality</small>
              <strong className="hq-display text-2xl font-medium" style={{ color: GOLD }}>
                {analysed ? 'Premium' : '—'}
              </strong>
            </div>
          </div>
        </div>

        {/* ── Analysis + recommendation ────────────────────────────── */}
        <div className="mt-5 rounded-sm border p-7 md:p-10" style={{ borderColor: RULE, background: '#FFFEF9' }}>
          <p className="hq-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Example AI analysis</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Metric label="Plantation health" value={analysed ? '91%' : '—'} />
            <Metric label="Harvest ready" value={analysed ? '96%' : '—'} />
            <Metric label="Climate" value={analysed ? 'Good' : '—'} />
          </div>

          <div className="mt-8 border-t pt-7" style={{ borderColor: RULE }}>
            <p className="hq-mono text-[11px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>RECOMMENDATION</p>
            <h2 className="hq-display mt-3 text-3xl font-medium" style={{ color: INK_DARK }}>
              {analysed ? 'Harvest within the next 2–3 days.' : 'Awaiting quality analysis'}
            </h2>
            <p className="mt-3 text-sm text-[#5A6A54]">
              {analysed
                ? 'This timing supports higher yield, better tea quality and improved market value.'
                : 'Run the AI analysis to receive a harvest recommendation.'}
            </p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <Benefit text="Higher yield" />
              <Benefit text="Higher tea quality" />
              <Benefit text="Better market value" />
              <Benefit text="Improved factory performance" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-sm p-5" style={{ background: '#F6F3E9' }}>
      <small className="hq-mono text-[10px] uppercase tracking-[.15em] text-[#7A8874]">{label}</small>
      <strong className="hq-display mt-2 block text-3xl font-medium" style={{ color: '#152A1E' }}>{value}</strong>
    </div>
  )
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-2.5 rounded-sm px-4 py-3 text-sm" style={{ background: '#F6F3E9', color: '#33422F' }}>
      <span style={{ color: '#5E7E52' }}>✓</span> {text}
    </div>
  )
}

export default HarvestQuality
