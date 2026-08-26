import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

/**
 * Design language: "Estate Ledger"
 * — Inspired by the graded, stamped record-books used on Sri Lankan tea &
 *   rubber estates. Deep canopy green + parchment + turmeric gold accent.
 * — The health score renders as a certification stamp, echoing how estates
 *   historically grade and seal chests of produce.
 * — Left/right panels read like an open ledger, split by a stitched spine.
 */

const INK = '#1F3D2E'
const INK_DARK = '#152A1E'
const PAPER = '#F6F3E9'
const RULE = '#DDD5C0'
const GOLD = '#B9872E'
const GOLD_DEEP = '#93691F'
const RUST = '#A6432F'
const SAGE = '#5E7E52'

function PlantationHealth() {
  const [analysed, setAnalysed] = useState(false)

  return (
    <main
      className="min-h-screen text-[#1F3D2E]"
      style={{ background: PAPER, fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .ph-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .ph-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .ph-spine {
          background-image: repeating-linear-gradient(
            to bottom,
            ${RULE} 0px, ${RULE} 2px, transparent 2px, transparent 10px
          );
        }

        .ph-stamp {
          position: relative;
          width: 148px;
          height: 148px;
          border-radius: 9999px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${PAPER};
          background: radial-gradient(circle at 35% 30%, ${GOLD}, ${GOLD_DEEP} 70%);
          box-shadow: 0 0 0 3px ${PAPER}, 0 0 0 5px ${GOLD_DEEP}, 0 10px 24px -8px rgba(31,61,46,0.45);
        }
        .ph-stamp::before {
          content: '';
          position: absolute;
          inset: 10px;
          border-radius: 9999px;
          border: 1px dashed rgba(246,243,233,0.6);
        }
        .ph-stamp.is-idle {
          background: radial-gradient(circle at 35% 30%, #cfc9b4, #b7b090 70%);
          box-shadow: 0 0 0 3px ${PAPER}, 0 0 0 5px #b7b090, 0 10px 24px -8px rgba(31,61,46,0.25);
        }

        .ph-field-underline {
          border-bottom: 1px solid ${RULE};
          transition: border-color .15s ease;
        }
        .ph-field-underline:focus-within { border-color: ${INK}; }
      `}</style>

      <Header />

      {/* ── Page intro ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 md:px-8">
        <p className="ph-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          FIELD RECORD · PLANTATION INTELLIGENCE
        </p>
        <h1 className="ph-display mt-3 text-4xl font-medium leading-tight md:text-5xl" style={{ color: INK_DARK }}>
          Plantation health assessment
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#4A5A45]">
          Enter today&rsquo;s field conditions and let the estate ledger grade
          your plantation&rsquo;s condition — the way a grader would seal a
          chest of tea.
        </p>
      </div>

      {/* ── Ledger workspace ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div
          className="grid overflow-hidden rounded-sm border md:grid-cols-[1fr_2px_1fr]"
          style={{ borderColor: RULE, background: '#FFFEF9' }}
        >
          {/* INPUTS */}
          <div className="p-6 md:p-9">
            <PanelTitle step="01" title="Tell us about your field" label="Inputs" />

            <label className="mt-6 flex cursor-pointer flex-col items-center gap-2 rounded-sm border border-dashed px-6 py-8 text-center transition hover:bg-[#F6F3E9]" style={{ borderColor: RULE }}>
              <input type="file" accept="image/*" className="hidden" />
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: INK, color: PAPER }}
                aria-hidden="true"
              >
                ⤒
              </span>
              <strong className="ph-display text-base font-medium" style={{ color: INK_DARK }}>
                Upload a plantation photo
              </strong>
              <small className="text-xs text-[#7A8874]">PNG, JPG or WEBP · Max 10MB</small>
            </label>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              <Field label="Temperature" value="21" unit="°C" />
              <Field label="Rainfall" value="150" unit="mm" />
              <Field label="Humidity" value="82" unit="%" />
              <Field label="Wind speed" value="8" unit="km/h" />
              <label className="col-span-2 flex flex-col gap-1.5">
                <span className="ph-mono text-[10px] uppercase tracking-[.15em] text-[#7A8874]">
                  Solar radiation
                </span>
                <div className="ph-field-underline">
                  <select
                    defaultValue="Moderate"
                    className="w-full bg-transparent py-1.5 text-sm font-medium outline-none"
                    style={{ color: INK_DARK }}
                  >
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                  </select>
                </div>
              </label>
            </div>

            <button
              onClick={() => setAnalysed(true)}
              className="ph-display mt-9 w-full rounded-sm py-3.5 text-[15px] font-medium tracking-wide transition active:scale-[.99]"
              style={
                analysed
                  ? { background: '#E8E3D3', color: INK_DARK, border: `1px solid ${RULE}` }
                  : { background: INK, color: PAPER }
              }
            >
              {analysed ? 'Analysis complete ✓' : 'Run AI assessment →'}
            </button>
          </div>

          {/* SPINE */}
          <div className="ph-spine hidden md:block" aria-hidden="true" />

          {/* OUTPUTS */}
          <div className="p-6 md:p-9" style={{ background: '#FBF9F2' }}>
            <PanelTitle step="02" title="AI health assessment" label="Outputs" />

            <div className="mt-6 flex items-center gap-6">
              <div className={`ph-stamp ${analysed ? '' : 'is-idle'}`}>
                <strong className="ph-display text-3xl font-semibold leading-none">
                  {analysed ? '91' : '—'}
                </strong>
                <small className="ph-mono mt-1 text-[10px] tracking-[.1em] opacity-90">/ 100</small>
              </div>
              <div>
                <small className="ph-mono text-[10px] uppercase tracking-[.2em] text-[#7A8874]">
                  Plantation health score
                </small>
                <h3 className="ph-display mt-1 text-xl font-medium" style={{ color: INK_DARK }}>
                  {analysed ? 'Healthy & stable' : 'Awaiting analysis'}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#5A6A54]">
                  {analysed
                    ? 'Your field is showing strong growth conditions.'
                    : 'Add your field data and run the assessment.'}
                </p>
              </div>
            </div>

            <div className="mt-8 divide-y" style={{ borderColor: RULE }}>
              <Stress label="Heat stress" value={analysed ? 'Low' : '—'} />
              <Stress label="Water stress" value={analysed ? 'Medium' : '—'} />
              <Stress label="Rainfall stress" value={analysed ? 'Low' : '—'} />
              <Stress label="Early warning" value={analysed ? 'No immediate risk' : '—'} tone="note" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Recommendations ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="ph-mono text-[11px] tracking-[.25em]" style={{ color: GOLD_DEEP }}>
          ACTIONABLE GUIDANCE
        </p>
        <h2 className="ph-display mt-2 text-3xl font-medium" style={{ color: INK_DARK }}>
          What should you do next?
        </h2>
        <p className="mt-2 max-w-lg text-[15px] text-[#4A5A45]">
          Practical, zone-specific recommendations generated from your plantation conditions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Recommendation title="Monitor soil moisture">
            Schedule irrigation if no rainfall occurs within the next 2–3 days.
          </Recommendation>
          <Recommendation title="Maintain green coverage">
            Keep shade cover and mulch in affected blocks to protect soil moisture.
          </Recommendation>
          <Recommendation title="Watch rainfall patterns">
            Improve drainage during periods of excess rainfall to reduce disease risk.
          </Recommendation>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function PanelTitle({ step, title, label }) {
  return (
    <div className="flex items-baseline justify-between border-b pb-4" style={{ borderColor: RULE }}>
      <div>
        <span className="ph-mono text-[10px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>
          STEP {step}
        </span>
        <h2 className="ph-display mt-1 text-lg font-medium" style={{ color: INK_DARK }}>
          {title}
        </h2>
      </div>
      <span className="ph-mono text-[10px] uppercase tracking-[.2em] text-[#9AA593]">{label}</span>
    </div>
  )
}

function Field({ label, value, unit }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="ph-mono text-[10px] uppercase tracking-[.15em] text-[#7A8874]">{label}</span>
      <div className="ph-field-underline flex items-baseline gap-1.5 py-1.5">
        <input
          defaultValue={value}
          type="number"
          className="ph-mono w-full bg-transparent text-[15px] font-semibold outline-none"
          style={{ color: INK_DARK }}
        />
        <b className="text-xs font-medium text-[#8A9584]">{unit}</b>
      </div>
    </label>
  )
}

function Stress({ label, value, tone }) {
  const isIdle = value === '—'
  const color = isIdle ? '#9AA593' : tone === 'note' ? SAGE : value === 'Medium' ? GOLD_DEEP : value === 'High' ? RUST : SAGE
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-[#3E4C39]">{label}</span>
      <b className="ph-mono text-xs font-semibold tracking-wide" style={{ color }}>
        {value}
      </b>
    </div>
  )
}

function Recommendation({ title, children }) {
  return (
    <div className="rounded-sm border p-5" style={{ borderColor: RULE, background: '#FFFEF9' }}>
      <span className="ph-mono text-[10px] tracking-[.2em]" style={{ color: GOLD_DEEP }}>
        ➤
      </span>
      <strong className="ph-display mt-2 block text-base font-medium" style={{ color: INK_DARK }}>
        {title}
      </strong>
      <p className="mt-1.5 text-sm leading-relaxed text-[#5A6A54]">{children}</p>
    </div>
  )
}

export default PlantationHealth