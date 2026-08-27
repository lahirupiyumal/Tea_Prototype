// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// function HarvestReadinessDetection() {
//   return (
//     <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
//       <Header />
//       <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
//         {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 03 / HARVEST INTELLIGENCE</p>
//         <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
//           <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Harvest readiness detection</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">Use AI-powered field signals to identify the ideal harvest window and protect the quality of every tea leaf.</p></div>
//         </div> */}

//         <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
//           <label className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm transition hover:border-lime-400 hover:bg-lime-50/40"><input className="hidden" type="file" accept="image/*" /><span className="text-4xl text-lime-700">⌁</span><strong className="mt-4 text-lg">Upload tea bush image</strong><span className="mt-2 text-sm text-slate-500">PNG, JPG or WEBP · Max 10MB</span></label>
//           <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">AI ANALYSIS</p><h2 className="mt-3 font-serif text-2xl">What the model evaluates</h2><div className="mt-6 grid gap-3 sm:grid-cols-3">{['Bud growth','Leaf development','Harvest stage'].map((item, index) => <div className="rounded-xl bg-emerald-50 p-4" key={item}><span className="text-xs text-lime-700">0{index + 1}</span><strong className="mt-3 block text-sm">{item}</strong><span className="mt-2 block text-xs text-slate-500">Image signal detected</span></div>)}</div></div>
//         </div>

//         <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
//           <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10">
//             <div className="flex items-start justify-between"><div><p className="text-xs font-bold tracking-widest text-emerald-200">CURRENT ESTATE</p><h2 className="mt-3 font-serif text-3xl">Nuwara Eliya Estate</h2></div><span className="rounded-full bg-white/10 px-3 py-2 text-xs text-lime-200">LIVE ↗</span></div>
//             <div className="mt-12 flex items-end gap-8"><div><strong className="font-serif text-7xl text-lime-300">94</strong><span className="ml-2 text-slate-300">/100</span><p className="mt-2 text-sm text-emerald-100">Harvest readiness score</p></div><div className="mb-3 h-24 w-px bg-white/20"/><div className="mb-3"><p className="text-xs uppercase tracking-widest text-emerald-200">Recommended window</p><strong className="mt-2 block text-xl">Next 3–5 days</strong><small className="text-emerald-200">Conditions are favourable</small></div></div>
//             <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[94%] rounded-full bg-lime-300"/></div>
//           </div>
//           <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">READINESS SIGNALS</p><div className="mt-6 space-y-5">{[['Leaf maturity','High','bg-lime-500'],['Moisture level','Optimal','bg-emerald-500'],['Weather stability','Good','bg-sky-500'],['Plucking quality','Excellent','bg-amber-400']].map(([label,value,color])=><div key={label}><div className="mb-2 flex justify-between text-sm"><span className="text-slate-600">{label}</span><b>{value}</b></div><div className="h-2 rounded-full bg-slate-100"><div className={`h-full w-4/5 rounded-full ${color}`}/></div></div>)}</div></div>
//         </div>
//         <div className="mt-5 grid gap-5 md:grid-cols-3"><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">☀</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">WEATHER WINDOW</p><h3 className="mt-2 font-serif text-xl">Stable conditions</h3><p className="mt-2 text-sm text-slate-500">Low rain probability during the recommended harvest period.</p></article><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">⌁</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">AI CONFIDENCE</p><h3 className="mt-2 font-serif text-xl">92% confidence</h3><p className="mt-2 text-sm text-slate-500">Based on imagery, climate and field history.</p></article><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">✓</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">NEXT ACTION</p><h3 className="mt-2 font-serif text-xl">Prepare your team</h3><p className="mt-2 text-sm text-slate-500">Plan plucking crews for the upcoming optimal window.</p></article></div>
//       </section>
//       <Footer />
//     </main>
//   )
// }

// export default HarvestReadinessDetection





import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger" (shared across Plantation Health,
 * Yield Prediction and this page).
 * — Signature element here: the readiness score renders as a field gauge —
 *   the kind of dial instrument (moisture meter, altimeter) a plucking
 *   supervisor would actually carry — rather than a generic big number.
 */

const INK = '#1F3D2E'
const INK_DARK = '#152A1E'
const PAPER = '#FFFFFF'
const RULE = '#E5EEE8'
const GOLD = '#7EC151'
const GOLD_DEEP = '#568F32'
const SAGE = '#568F32'
const SKY = '#4E7A8C'

const READINESS_SCORE = 94
const SIGNALS = [
  { label: 'Bud growth', copy: 'Image signal detected' },
  { label: 'Leaf development', copy: 'Image signal detected' },
  { label: 'Harvest stage', copy: 'Image signal detected' },
]
const READINESS_BARS = [
  { label: 'Leaf maturity', value: 'High', pct: 88, color: GOLD },
  { label: 'Moisture level', value: 'Optimal', pct: 92, color: SAGE },
  { label: 'Weather stability', value: 'Good', pct: 80, color: SKY },
  { label: 'Plucking quality', value: 'Excellent', pct: 95, color: GOLD_DEEP },
]

function HarvestReadinessDetection() {
  // Gauge geometry — semicircle, radius 90, centred at (100,100)
  const circumference = Math.PI * 90
  const filled = (circumference * READINESS_SCORE) / 100
  const needleAngle = -90 + (READINESS_SCORE / 100) * 180

  return (
    <main
      className="min-h-screen text-[#1F3D2E]"
      style={{ background: PAPER, fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .hr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .hr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        {/* ── Intro ─────────────────────────────────────────────── */}
        {/* <p className="hr-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 03 · HARVEST INTELLIGENCE
        </p>
        <div className="mt-3 max-w-2xl">
          <h1 className="hr-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
            Harvest readiness detection
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A45]">
            Field signals read from bush imagery mark the ideal harvest
            window and protect the quality of every leaf.
          </p>
        </div> */}

        {/* ── Upload + what the model evaluates ───────────────────── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <label
            className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center transition hover:bg-[#F6F3E9]"
            style={{ borderColor: RULE, background: '#FFFEF9' }}
          >
            <input className="hidden" type="file" accept="image/*" />
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full text-lg"
              style={{ background: INK, color: PAPER }}
              aria-hidden="true"
            >
              ⤒
            </span>
            <strong className="hr-display mt-4 text-lg font-medium" style={{ color: INK_DARK }}>
              Upload a tea bush image
            </strong>
            <span className="mt-2 text-xs text-[#7A8874]">PNG, JPG or WEBP · Max 10MB</span>
          </label>

          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="hr-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">AI analysis</p>
            <h2 className="hr-display mt-2 text-xl font-medium" style={{ color: INK_DARK }}>
              What the model evaluates
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {SIGNALS.map((item, index) => (
                <div key={item.label} className="rounded-sm p-4" style={{ background: '#F6F3E9' }}>
                  <span className="hr-mono text-xs" style={{ color: GOLD_DEEP }}>0{index + 1}</span>
                  <strong className="mt-3 block text-sm" style={{ color: INK_DARK }}>{item.label}</strong>
                  <span className="mt-2 block text-xs text-[#7A8874]">{item.copy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Live estate gauge + readiness signals ───────────────── */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          {/* Gauge card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#315640] p-7 text-white shadow-xl md:p-10" style={{ background: 'linear-gradient(135deg, #1F3D2E 0%, #163025 100%)' }}>
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#7EC151]/15" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#7EC151]/10" aria-hidden="true" />
            <div className="flex items-start justify-between">
              <div>
                <p className="hr-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>
                  CURRENT ESTATE
                </p>
                <h2 className="hr-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>
                  Nuwara Eliya Estate
                </h2>
              </div>
              <span
                className="hr-mono flex items-center gap-1.5 rounded-full border border-[#7EC151]/20 bg-[#7EC151]/10 px-4 py-2 text-[10px] tracking-widest"
                style={{ color: '#BFE0A8' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#8FD16A' }} />
                LIVE
              </span>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center gap-10">
              {/* Gauge dial */}
              <div className="relative">
                <svg width="200" height="120" viewBox="0 0 200 110">
                  <path
                    d="M10,100 A90,90 0 0 1 190,100"
                    fill="none"
                    stroke="rgba(246,243,233,0.15)"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,100 A90,90 0 0 1 190,100"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${filled} ${circumference}`}
                  />
                  <line
                    x1="100" y1="100" x2="100" y2="24"
                    stroke={PAPER} strokeWidth="3" strokeLinecap="round"
                    transform={`rotate(${needleAngle} 100 100)`}
                  />
                  <circle cx="100" cy="100" r="6" fill={PAPER} />
                </svg>
                <div className="absolute inset-x-0 bottom-0 flex items-baseline justify-center gap-1">
                  <strong className="hr-display text-4xl font-semibold" style={{ color: GOLD }}>
                    {READINESS_SCORE}
                  </strong>
                  <span className="hr-mono text-xs text-white/50">/100</span>
                </div>
              </div>

              <div className="h-20 w-px bg-white/15" />

              <div>
                <p className="hr-mono text-[10px] uppercase tracking-[.2em]" style={{ color: GOLD }}>
                  Recommended window
                </p>
                <strong className="hr-display mt-2 block text-3xl font-medium" style={{ color: PAPER }}>
                  Next 3–5 days
                </strong>
                <small className="text-sm text-white/60">Conditions are favourable</small>
              </div>
            </div>
          </div>

          {/* Readiness signals */}
          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="hr-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Readiness signals</p>
            <div className="mt-6 space-y-5">
              {READINESS_BARS.map(({ label, value, pct, color }) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-[#4A5A45]">{label}</span>
                    <b style={{ color: INK_DARK }}>{value}</b>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: '#EFEBDD' }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Info cards ───────────────────────────────────────────── */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <InfoCard eyebrow="Weather window" title="Stable conditions">
            Low rain probability during the recommended harvest period.
          </InfoCard>
          <InfoCard eyebrow="AI confidence" title="92% confidence">
            Based on imagery, climate and field history.
          </InfoCard>
          <InfoCard eyebrow="Next action" title="Prepare your team">
            Plan plucking crews for the upcoming optimal window.
          </InfoCard>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function InfoCard({ eyebrow, title, children }) {
  return (
    <article className="rounded-sm border p-6" style={{ borderColor: RULE, background: '#FFFEF9' }}>
      <p className="hr-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">{eyebrow}</p>
      <h3 className="hr-display mt-3 text-xl font-medium" style={{ color: '#152A1E' }}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5A6A54]">{children}</p>
    </article>
  )
}

export default HarvestReadinessDetection
