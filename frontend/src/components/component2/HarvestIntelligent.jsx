import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger" (shared across Plantation Health,
 * Harvest Readiness and Yield Prediction).
 * This file merges Harvest Readiness Detection (Step 03) and
 * Yield Prediction (Step 04) into a single scrolling page, since both
 * already share the same token system — no restyling needed, just one
 * continuous ledger with a divider between the two steps.
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
const PREDICTION_SIGNALS = [
  'Harvest readiness',
  'Plantation health',
  'Climate stress',
  'Weather forecast',
  'Historical yield',
  'Future climate conditions',
]

function HarvestIntelligence() {
  const [predicted, setPredicted] = useState(false)

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
        .hi-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .hi-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .hi-docket { position: relative; background: ${INK}; }
        .hi-docket::before,
        .hi-docket::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 18px;
          background-image: radial-gradient(circle, ${PAPER} 6px, transparent 6.5px);
          background-size: 24px 24px;
          background-position: -4px center;
        }
        .hi-docket::before { top: -9px; }
        .hi-docket::after { bottom: -9px; }

        .hi-stub {
          border-radius: 14px;
          background: rgba(246,243,233,0.06);
          border: 1px solid rgba(246,243,233,0.14);
        }
      `}</style>

      <Header />

      {/* ══════════════════════════════════════════════════════════
          STEP 03 — HARVEST READINESS DETECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8">
        {/* <p className="hi-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 03 · HARVEST INTELLIGENCE
        </p> */}
        <div className="mt-3 max-w-2xl">
          <h1 className="hi-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
            Harvest readiness detection
          </h1>
          {/* <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A45]">
            Field signals read from bush imagery mark the ideal harvest
            window and protect the quality of every leaf.
          </p> */}
        </div>

        {/* Upload + what the model evaluates */}
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
            <strong className="hi-display mt-4 text-lg font-medium" style={{ color: INK_DARK }}>
              Upload a tea bush image
            </strong>
            <span className="mt-2 text-xs text-[#7A8874]">PNG, JPG or WEBP · Max 10MB</span>
          </label>

          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="hi-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">AI analysis</p>
            <h2 className="hi-display mt-2 text-xl font-medium" style={{ color: INK_DARK }}>
              What the model evaluates
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {SIGNALS.map((item, index) => (
                <div key={item.label} className="rounded-sm p-4" style={{ background: '#F6F3E9' }}>
                  <span className="hi-mono text-xs" style={{ color: GOLD_DEEP }}>0{index + 1}</span>
                  <strong className="mt-3 block text-sm" style={{ color: INK_DARK }}>{item.label}</strong>
                  <span className="mt-2 block text-xs text-[#7A8874]">{item.copy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live estate gauge + readiness signals */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-sm p-7 text-white md:p-10" style={{ background: INK }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="hi-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>
                  CURRENT ESTATE
                </p>
                <h2 className="hi-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>
                  Nuwara Eliya Estate
                </h2>
              </div>
              <span
                className="hi-mono flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] tracking-widest"
                style={{ background: 'rgba(246,243,233,0.1)', color: '#BFE0A8' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#8FD16A' }} />
                LIVE
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-10">
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
                  <strong className="hi-display text-4xl font-semibold" style={{ color: GOLD }}>
                    {READINESS_SCORE}
                  </strong>
                  <span className="hi-mono text-xs text-white/50">/100</span>
                </div>
              </div>

              <div className="h-16 w-px" style={{ background: 'rgba(246,243,233,0.15)' }} />

              <div>
                <p className="hi-mono text-[10px] uppercase tracking-[.2em]" style={{ color: GOLD }}>
                  Recommended window
                </p>
                <strong className="hi-display mt-2 block text-2xl font-medium" style={{ color: PAPER }}>
                  Next 3–5 days
                </strong>
                <small className="text-sm text-white/60">Conditions are favourable</small>
              </div>
            </div>
          </div>

          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <p className="hi-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Readiness signals</p>
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

        {/* Info cards */}
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

      {/* Divider between the two steps */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: RULE }} />
          <span className="hi-mono text-[10px] tracking-[.3em] text-[#9AA593]">NEXT STEP</span>
          <div className="h-px flex-1" style={{ background: RULE }} />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          STEP 04 — YIELD PREDICTION
      ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        {/* <p className="hi-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          STEP 04 · HARVEST INTELLIGENCE
        </p> */}
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="hi-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
              Harvest scheduling & expected yield
            </h2>
            {/* <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4A5A45]">
              The model weighs field readiness, climate, weather and historical
              records to call the best harvest window — and issue a yield
              docket for it.
            </p> */}
          </div>
        </div>

        {/* Workspace */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          {/* Signals */}
          <div className="rounded-sm border p-7" style={{ borderColor: RULE, background: '#FFFEF9' }}>
            <div className="mb-6 flex items-start justify-between border-b pb-5" style={{ borderColor: RULE }}>
              <div>
                <small className="hi-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">Inputs</small>
                <h3 className="hi-display mt-1 text-xl font-medium" style={{ color: INK_DARK }}>
                  Prediction signals
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              {PREDICTION_SIGNALS.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm"
                  style={{ background: '#F6F3E9' }}
                >
                  <span
                    className="hi-mono grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold"
                    style={{ background: '#FFFEF9', color: GOLD_DEEP, border: `1px solid ${RULE}` }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[#33422F]">{item}</span>
                  <b className="hi-mono ml-auto text-[11px] tracking-wide" style={{ color: SAGE }}>
                    READY
                  </b>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPredicted(true)}
              className="hi-display mt-7 w-full rounded-sm py-3.5 text-[15px] font-medium tracking-wide transition active:scale-[.99]"
              style={
                predicted
                  ? { background: '#E8E3D3', color: INK_DARK, border: `1px solid ${RULE}` }
                  : { background: INK, color: PAPER }
              }
            >
              {predicted ? 'Prediction complete ✓' : 'Generate yield prediction'}
            </button>
          </div>

          {/* Harvest docket */}
          <div className="hi-docket rounded-sm px-7 py-10 text-white shadow-lg md:px-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="hi-mono text-[11px] tracking-[.25em]" style={{ color: GOLD }}>
                  AI ANALYSIS
                </p>
                <h3 className="hi-display mt-2 text-3xl font-medium" style={{ color: PAPER }}>
                  Harvest outlook
                </h3>
              </div>
              <span className="hi-mono text-[11px] tracking-widest text-white/40">No. 04</span>
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

        {/* Recommendation */}
        <div className="mt-5 rounded-sm border p-7 md:p-9" style={{ borderColor: RULE, background: '#FFFEF9' }}>
          <p className="hi-mono text-[11px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>
            RECOMMENDATION
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="hi-display text-3xl font-medium" style={{ color: INK_DARK }}>
                {predicted ? 'Harvest within the next 2–3 days' : 'Awaiting prediction'}
              </h3>
              <p className="mt-2 text-sm text-[#5A6A54]">
                {predicted
                  ? 'Weather conditions are favourable and the expected yield is at its strongest point.'
                  : 'Review the available signals and generate your harvest forecast.'}
              </p>
            </div>
            <span
              className="hi-mono rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide"
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

function InfoCard({ eyebrow, title, children }) {
  return (
    <article className="rounded-sm border p-6" style={{ borderColor: RULE, background: '#FFFEF9' }}>
      <p className="hi-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">{eyebrow}</p>
      <h3 className="hi-display mt-3 text-xl font-medium" style={{ color: INK_DARK }}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5A6A54]">{children}</p>
    </article>
  )
}

function Result({ label, value, suffix = '' }) {
  return (
    <div className="hi-stub p-5">
      <small className="hi-mono text-[10px] uppercase tracking-[.15em] text-white/50">{label}</small>
      <strong className="hi-display mt-2 block text-3xl font-medium" style={{ color: GOLD }}>
        {value}
      </strong>
      {suffix && <span className="hi-mono text-[11px] text-white/50">{suffix}</span>}
    </div>
  )
}

export default HarvestIntelligence