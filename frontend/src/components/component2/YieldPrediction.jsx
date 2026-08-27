// import { useState } from 'react'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// function YieldPrediction() {
//   const [predicted, setPredicted] = useState(false)

//   return (
//     <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
//       <Header />
//       <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
//         {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 04 / HARVEST INTELLIGENCE</p>
//         <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
//           <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Intelligent harvest scheduling &amp; expected yield prediction</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">AI combines field readiness, climate, weather and historical data to identify the best harvest window and predict expected yield.</p></div>
//         </div> */}

//         <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
//           <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
//             <div className="mb-7 flex items-start justify-between"><div><small className="text-[10px] font-bold tracking-widest text-slate-400">INPUTS</small><h2 className="mt-2 font-serif text-2xl">Prediction signals</h2></div><span className="text-2xl text-lime-700">⌁</span></div>
//             <div className="space-y-3">{['Harvest readiness','Plantation health','Climate stress','Weather forecast','Historical yield','Future climate conditions'].map((item, index) => <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm" key={item}><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-lime-700">{index + 1}</span>{item}<b className="ml-auto text-xs text-emerald-600">Ready</b></div>)}</div>
//             <button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setPredicted(true)}>{predicted ? 'Prediction complete ✓' : 'Generate yield prediction'}</button>
//           </div>

//           <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10">
//             <p className="text-xs font-bold tracking-widest text-emerald-200">AI ANALYSIS</p><h2 className="mt-3 font-serif text-3xl">Harvest outlook</h2><p className="mt-4 max-w-xl text-sm leading-6 text-emerald-100">The model evaluates harvest timing, weather suitability, yield potential and the impact of delaying harvest.</p>
//             <div className="mt-10 grid gap-4 sm:grid-cols-3"><Result label="Best harvest date" value={predicted ? '15 July' : '—'} /><Result label="Expected yield" value={predicted ? '2,250' : '—'} suffix={predicted ? 'kg/ha' : ''} /><Result label="AI confidence" value={predicted ? '91' : '—'} suffix={predicted ? '%' : ''} /></div>
//           </div>
//         </div>

//         <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-slate-400">RECOMMENDATION</p><div className="mt-4 flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-serif text-3xl">{predicted ? 'Harvest within the next 2–3 days' : 'Awaiting prediction'}</h2><p className="mt-2 text-sm text-slate-500">{predicted ? 'Weather conditions are favourable and the expected yield is at its strongest point.' : 'Review the available signals and generate your harvest forecast.'}</p></div><span className="rounded-full bg-lime-100 px-5 py-3 text-sm font-bold text-lime-800">{predicted ? 'Optimal window' : 'Not analysed'}</span></div></div>
//       </section>
//       <Footer />
//     </main>
//   )
// }

// function Result({ label, value, suffix = '' }) { return <div className="rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">{label}</small><strong className="mt-3 block font-serif text-3xl text-lime-300">{value}</strong><span className="text-xs text-emerald-200">{suffix}</span></div> }

// export default YieldPrediction







import { useState } from 'react'
import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger" (shared with Plantation Health, Step 02)
 * — Same canopy green / parchment / turmeric-gold system, continued here.
 * — Signature element: the harvest outlook renders as a weighbridge docket —
 *   the paper chit estates issue at harvest, with a perforated tear edge and
 *   stamped entries — instead of a generic dark stats card.
 */

const INK = '#1F3D2E'
const INK_DARK = '#152A1E'
const PAPER = '#FFFFFF'
const RULE = '#E5EEE8'
const GOLD = '#7EC151'
const GOLD_DEEP = '#568F32'
const SAGE = '#568F32'

function YieldPrediction() {
  const [predicted, setPredicted] = useState(false)

  const signals = [
    'Harvest readiness',
    'Plantation health',
    'Climate stress',
    'Weather forecast',
    'Historical yield',
    'Future climate conditions',
  ]

  return (
    <main
      className="min-h-screen text-[#1F3D2E]"
      style={{ background: PAPER, fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .yp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .yp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .yp-docket {
          position: relative;
          background: ${INK};
        }
        .yp-docket::before,
        .yp-docket::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 18px;
          background-image: radial-gradient(circle, ${PAPER} 6px, transparent 6.5px);
          background-size: 24px 24px;
          background-position: -4px center;
        }
        .yp-docket::before { top: -9px; }
        .yp-docket::after { bottom: -9px; }

        .yp-stub {
          border-radius: 14px;
          background: rgba(246,243,233,0.06);
          border: 1px solid rgba(246,243,233,0.14);
        }
      `}</style>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        {/* ── Intro ─────────────────────────────────────────────── */}
        {/* <p className="yp-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 04 · HARVEST INTELLIGENCE
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="yp-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
              Harvest scheduling &amp; expected yield
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4A5A45]">
              The model weighs field readiness, climate, weather and historical
              records to call the best harvest window — and issue a yield
              docket for it.
            </p>
          </div>
        </div> */}

        {/* ── Workspace ─────────────────────────────────────────── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          {/* SIGNALS */}
          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <div className="mb-6 flex items-start justify-between border-b pb-5" style={{ borderColor: RULE }}>
              <div>
                <small className="yp-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Inputs</small>
                <h2 className="yp-display mt-1 text-xl font-medium" style={{ color: INK_DARK }}>
                  Prediction signals
                </h2>
              </div>
            </div>

            <div className="space-y-2">
              {signals.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm"
                  style={{ background: '#F6F3E9' }}
                >
                  <span
                    className="yp-mono grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold"
                    style={{ background: '#FFFEF9', color: GOLD_DEEP, border: `1px solid ${RULE}` }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[#33422F]">{item}</span>
                  <b className="yp-mono ml-auto text-[11px] tracking-wide" style={{ color: SAGE }}>
                    READY
                  </b>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPredicted(true)}
              className="yp-display mt-7 w-full rounded-sm py-3.5 text-[15px] font-medium tracking-wide transition active:scale-[.99]"
              style={
                predicted
                  ? { background: '#E8E3D3', color: INK_DARK, border: `1px solid ${RULE}` }
                  : { background: INK, color: PAPER }
              }
            >
              {predicted ? 'Prediction complete ✓' : 'Generate yield prediction'}
            </button>
          </div>

          {/* HARVEST DOCKET */}
          <div className="yp-docket rounded-sm px-7 py-10 text-white shadow-lg md:px-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="yp-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>
                  AI ANALYSIS
                </p>
                <h2 className="yp-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>
                  Harvest outlook
                </h2>
              </div>
              <span className="yp-mono text-[11px] tracking-widest text-white/40">No. 04</span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Evaluates harvest timing, weather suitability, yield potential
              and the cost of delaying harvest.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <Result label="Best harvest date" value={predicted ? '15 July' : '—'} />
              <Result label="Expected yield" value={predicted ? '2,250' : '—'} suffix={predicted ? 'kg/ha' : ''} />
              <Result label="AI confidence" value={predicted ? '91' : '—'} suffix={predicted ? '%' : ''} />
            </div>
          </div>
        </div>

        {/* ── Recommendation ────────────────────────────────────── */}
        <div className="mt-5 rounded-sm border p-7 md:p-9" style={{ borderColor: RULE, background: '#FFFEF9' }}>
          <p className="yp-mono text-[11px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>
            RECOMMENDATION
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="yp-display text-3xl font-medium" style={{ color: INK_DARK }}>
                {predicted ? 'Harvest within the next 2–3 days' : 'Awaiting prediction'}
              </h2>
              <p className="mt-2 text-sm text-[#5A6A54]">
                {predicted
                  ? 'Weather conditions are favourable and the expected yield is at its strongest point.'
                  : 'Review the available signals and generate your harvest forecast.'}
              </p>
            </div>
            <span
              className="yp-mono rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide"
              style={
                predicted
                  ? { background: '#EAF1E4', color: SAGE }
                  : { background: '#EFEBDD', color: '#9AA593' }
              }
            >
              {predicted ? 'OPTIMAL WINDOW' : 'NOT ANALYSED'}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Result({ label, value, suffix = '' }) {
  return (
    <div className="yp-stub p-5">
      <small className="yp-mono text-[10px] uppercase tracking-[.15em] text-white/50">{label}</small>
      <strong className="yp-display mt-2 block text-3xl font-medium" style={{ color: GOLD }}>
        {value}
      </strong>
      {suffix && <span className="yp-mono text-[11px] text-white/50">{suffix}</span>}
    </div>
  )
}

export default YieldPrediction
