// import { useMemo, useState } from 'react'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// function DensityPlanning() {
//   const [analysed, setAnalysed] = useState(false)
//   const [area, setArea] = useState(1)
//   const [rowSpacing, setRowSpacing] = useState(1.2)
//   const [plantSpacing, setPlantSpacing] = useState(0.75)
//   const bushCount = useMemo(() => Math.round((Number(area) * 4046.86) / (Number(rowSpacing) * Number(plantSpacing))), [area, rowSpacing, plantSpacing])

//   return (
//     <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
//       <Header />
//       <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
//         {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 06 / PLANTATION PLANNING</p>
//         <div className="mt-4 flex flex-wrap items-end justify-between gap-6"><div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Plantation density planning &amp; bush layout recommendation</h1><p className="mt-4 max-w-3xl leading-7 text-slate-500">AI uses land area, row spacing, plant spacing, plantation zone and terrain information to recommend an optimized plantation layout.</p></div></div> */}

//         <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
//           <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">PLANTATION INPUTS</p><h2 className="mt-3 font-serif text-2xl">Tell us about your land</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><Input label="Total land area" value={area} setValue={setArea} unit="acre" /><Input label="Row spacing" value={rowSpacing} setValue={setRowSpacing} unit="m" /><Input label="Plant spacing" value={plantSpacing} setValue={setPlantSpacing} unit="m" /><Select label="Plantation zone" options={['High grown', 'Mid grown', 'Low grown']} /><Select label="Terrain type" options={['Level', 'Sloped', 'Hilly']} /></div><button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setAnalysed(true)}>{analysed ? 'Density analysis complete ✓' : 'Optimize plantation layout'}</button></div>
//           <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10"><p className="text-xs font-bold tracking-widest text-emerald-200">AI ANALYSIS</p><h2 className="mt-3 font-serif text-3xl">Recommended planting density</h2><p className="mt-4 text-sm leading-6 text-emerald-100">Planting density is calculated using the land area and the spacing between rows and bushes.</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><Output label="Recommended bush count" value={analysed ? bushCount.toLocaleString() : '—'} suffix={analysed ? 'bushes' : ''} /><Output label="Plantation density" value={analysed ? 'Optimal' : '—'} /><Output label="Recommended spacing" value={analysed ? `${rowSpacing} m × ${plantSpacing} m` : '—'} /><Output label="Layout recommendation" value={analysed ? 'Contour rows' : '—'} /></div></div>
//         </div>

//         <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-lime-700">RECOMMENDATION</p><div className="mt-4 flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-serif text-3xl">{analysed ? 'Maintain an optimized bush layout.' : 'Awaiting layout analysis'}</h2><p className="mt-2 text-sm text-slate-500">{analysed ? 'Use consistent spacing and contour planting to improve access, airflow and plantation productivity.' : 'Enter your plantation details and optimize the layout to see recommendations.'}</p></div><span className="rounded-full bg-lime-100 px-5 py-3 text-sm font-bold text-lime-800">{analysed ? 'Optimal density' : 'Not analysed'}</span></div></div>
//       </section>
//       <Footer />
//     </main>
//   )
// }

// function Input({ label, value, setValue, unit }) { return <label className="text-xs font-bold text-slate-600">{label}<div className="mt-2 flex rounded-lg border border-emerald-100 bg-slate-50"><input className="w-full bg-transparent p-3 text-sm outline-none" type="number" min="0" step="0.01" value={value} onChange={(event) => setValue(event.target.value)} /><b className="p-3 text-xs text-slate-400">{unit}</b></div></label> }
// function Select({ label, options }) { return <label className="text-xs font-bold text-slate-600">{label}<div className="mt-2 flex rounded-lg border border-emerald-100 bg-slate-50"><select className="w-full bg-transparent p-3 text-sm outline-none" defaultValue={options[0]}>{options.map((option) => <option key={option}>{option}</option>)}</select></div></label> }
// function Output({ label, value, suffix = '' }) { return <div className="rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">{label}</small><strong className="mt-2 block font-serif text-2xl text-lime-300">{value}</strong><span className="text-xs text-emerald-200">{suffix}</span></div> }

// export default DensityPlanning





import { useMemo, useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger" (shared across all steps).
 * — Signature element here: the recommended layout renders as a small
 *   survey-plan grid — corner registration marks, dimension captions —
 *   echoing a land surveyor's plot sketch, with dot spacing that reacts
 *   to the row/plant spacing inputs.
 */

const INK = '#1F3D2E'
const INK_DARK = '#152A1E'
const PAPER = '#F6F3E9'
const RULE = '#DDD5C0'
const GOLD = '#B9872E'
const GOLD_DEEP = '#93691F'

function DensityPlanning() {
  const [analysed, setAnalysed] = useState(false)
  const [area, setArea] = useState(1)
  const [rowSpacing, setRowSpacing] = useState(1.2)
  const [plantSpacing, setPlantSpacing] = useState(0.75)
  const bushCount = useMemo(
    () => Math.round((Number(area) * 4046.86) / (Number(rowSpacing) * Number(plantSpacing))),
    [area, rowSpacing, plantSpacing]
  )

  const gapX = Math.min(46, Math.max(12, Number(plantSpacing || 0.1) * 30))
  const gapY = Math.min(46, Math.max(12, Number(rowSpacing || 0.1) * 30))

  return (
    <main
      className="min-h-screen text-[#1F3D2E]"
      style={{ background: PAPER, fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .dp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .dp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .dp-field-underline { border-bottom: 1px solid ${RULE}; transition: border-color .15s ease; }
        .dp-field-underline:focus-within { border-color: ${PAPER}; }

        .dp-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: rgba(246,243,233,0.35);
        }
        .dp-corner.tl { top: -1px; left: -1px; border-top: 1px solid; border-left: 1px solid; }
        .dp-corner.tr { top: -1px; right: -1px; border-top: 1px solid; border-right: 1px solid; }
        .dp-corner.bl { bottom: -1px; left: -1px; border-bottom: 1px solid; border-left: 1px solid; }
        .dp-corner.br { bottom: -1px; right: -1px; border-bottom: 1px solid; border-right: 1px solid; }
      `}</style>

      <Header />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        {/* ── Intro ─────────────────────────────────────────────── */}
        <p className="dp-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 06 · PLANTATION PLANNING
        </p>
        <div className="mt-3 max-w-3xl">
          <h1 className="dp-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
            Density planning &amp; bush layout recommendation
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A45]">
            Land area, row spacing, plant spacing, zone and terrain combine
            into an optimised plantation layout.
          </p>
        </div>

        {/* ── Workspace ─────────────────────────────────────────── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          {/* INPUTS */}
          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="dp-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Plantation inputs</p>
            <h2 className="dp-display mt-2 text-xl font-medium" style={{ color: INK_DARK }}>
              Tell us about your land
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Input label="Total land area" value={area} setValue={setArea} unit="acre" />
              <Input label="Row spacing" value={rowSpacing} setValue={setRowSpacing} unit="m" />
              <Input label="Plant spacing" value={plantSpacing} setValue={setPlantSpacing} unit="m" />
              <Select label="Plantation zone" options={['High grown', 'Mid grown', 'Low grown']} />
              <Select label="Terrain type" options={['Level', 'Sloped', 'Hilly']} />
            </div>

            <button
              onClick={() => setAnalysed(true)}
              className="dp-display mt-8 w-full rounded-sm py-3.5 text-[15px] font-medium tracking-wide transition active:scale-[.99]"
              style={analysed ? { background: '#E8E3D3', color: INK_DARK, border: `1px solid ${RULE}` } : { background: INK, color: PAPER }}
            >
              {analysed ? 'Density analysis complete ✓' : 'Optimize plantation layout'}
            </button>
          </div>

          {/* AI ANALYSIS — survey plan */}
          <div className="rounded-sm p-7 text-white md:p-10" style={{ background: INK }}>
            <p className="dp-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>AI ANALYSIS</p>
            <h2 className="dp-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>
              Recommended planting density
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Density is calculated from the land area and the spacing
              between rows and bushes.
            </p>

            {/* Survey-plan grid preview */}
            <div
              className="relative mt-8 overflow-hidden rounded-sm p-6"
              style={{ background: 'rgba(246,243,233,0.05)', border: '1px solid rgba(246,243,233,0.14)' }}
            >
              <span className="dp-corner tl" /><span className="dp-corner tr" />
              <span className="dp-corner bl" /><span className="dp-corner br" />

              <div
                className="grid justify-center"
                style={{ gridTemplateColumns: 'repeat(7, 6px)', gap: `${gapY}px ${gapX}px` }}
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: analysed ? GOLD : 'rgba(246,243,233,0.3)' }} />
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-6 border-t pt-4" style={{ borderColor: 'rgba(246,243,233,0.12)' }}>
                <span className="dp-mono text-[10px] tracking-wide text-white/50">
                  ROW ↕ {Number(rowSpacing || 0).toFixed(2)} m
                </span>
                <span className="dp-mono text-[10px] tracking-wide text-white/50">
                  PLANT ↔ {Number(plantSpacing || 0).toFixed(2)} m
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Output label="Recommended bush count" value={analysed ? bushCount.toLocaleString() : '—'} suffix={analysed ? 'bushes' : ''} />
              <Output label="Plantation density" value={analysed ? 'Optimal' : '—'} />
              <Output label="Recommended spacing" value={analysed ? `${rowSpacing} m × ${plantSpacing} m` : '—'} />
              <Output label="Layout recommendation" value={analysed ? 'Contour rows' : '—'} />
            </div>
          </div>
        </div>

        {/* ── Recommendation ────────────────────────────────────── */}
        <div className="mt-5 rounded-sm border p-7 md:p-9" style={{ borderColor: RULE, background: '#FFFEF9' }}>
          <p className="dp-mono text-[11px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>RECOMMENDATION</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="dp-display text-3xl font-medium" style={{ color: INK_DARK }}>
                {analysed ? 'Maintain an optimized bush layout.' : 'Awaiting layout analysis'}
              </h2>
              <p className="mt-2 text-sm text-[#5A6A54]">
                {analysed
                  ? 'Use consistent spacing and contour planting to improve access, airflow and plantation productivity.'
                  : 'Enter your plantation details and optimize the layout to see recommendations.'}
              </p>
            </div>
            <span
              className="dp-mono rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide"
              style={analysed ? { background: '#EAF1E4', color: '#5E7E52' } : { background: '#EFEBDD', color: '#9AA593' }}
            >
              {analysed ? 'OPTIMAL DENSITY' : 'NOT ANALYSED'}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Input({ label, value, setValue, unit }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="dp-mono text-[10px] uppercase tracking-[.15em] text-[#7A8874]">{label}</span>
      <div className="dp-field-underline flex items-baseline gap-1.5 py-1.5">
        <input
          className="dp-mono w-full bg-transparent text-[15px] font-semibold outline-none"
          style={{ color: '#152A1E' }}
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <b className="text-xs font-medium text-[#8A9584]">{unit}</b>
      </div>
    </label>
  )
}

function Select({ label, options }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="dp-mono text-[10px] uppercase tracking-[.15em] text-[#7A8874]">{label}</span>
      <div className="dp-field-underline py-1.5">
        <select className="w-full bg-transparent text-sm font-medium outline-none" style={{ color: '#152A1E' }} defaultValue={options[0]}>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
    </label>
  )
}

function Output({ label, value, suffix = '' }) {
  return (
    <div className="rounded-sm p-5" style={{ background: 'rgba(246,243,233,0.06)', border: '1px solid rgba(246,243,233,0.12)' }}>
      <small className="dp-mono text-[10px] uppercase tracking-[.15em] text-white/50">{label}</small>
      <strong className="dp-display mt-2 block text-2xl font-medium" style={{ color: '#B9872E' }}>{value}</strong>
      {suffix && <span className="dp-mono text-[11px] text-white/50">{suffix}</span>}
    </div>
  )
}

export default DensityPlanning