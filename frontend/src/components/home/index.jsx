import { useEffect, useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

/**
 * DESIGN TOKENS — "Professional Green"
 * A cleaner, more corporate styling for a Ceylon tea intelligence platform.
 * This version keeps the tea identity while shifting the interface toward a
 * polished green-first aesthetic: soft executive backgrounds, deep forest text,
 * and balanced premium accents that feel credible for enterprise users.
 */

const liveMetrics = [
  { label: 'Nuwara Eliya', metric: 'NDVI', value: '0.82', trend: [40, 55, 48, 62, 70, 66, 78] },
  { label: 'Kandy', metric: 'Soil moisture', value: '68%', trend: [30, 42, 38, 50, 46, 58, 60] },
  { label: 'Ruhuna', metric: 'Auction index', value: '+4.2%', trend: [20, 28, 24, 34, 30, 44, 52] },
]

const tickerTags = [
  'Field-level crop data',
  'Factory lot traceability',
  'AI quality scoring',
  'Live auction signals',
  'Estate-to-export chain of custody',
]

const solutionPaths = [
  {
    title: 'Tea leaf diseases',
    short: 'Detect disease before it spreads.',
    detail: 'Upload a leaf image and get an explainable diagnosis, confidence score, and practical next steps for the field team.',
    outcome: 'Earlier intervention',
    href: '/disease-intelligence',
    action: 'Open disease intelligence',
  },
  {
    title: 'Poor quality evaluation',
    short: 'Turn quality checks into a repeatable score.',
    detail: 'Combine grade, defect, purity, and origin signals into one evidence-backed quality view for every tea batch.',
    outcome: 'Consistent grading',
    href: '/quality-intelligence',
    action: 'Explore quality intelligence',
  },
  {
    title: 'Weather and climate variations',
    short: 'See how climate changes the crop.',
    detail: 'Track field conditions, weather signals, and crop stress together so growers can act before yield and quality drop.',
    outcome: 'Climate-aware action',
    href: '/plantation-health',
    action: 'View plantation health',
  },
  {
    title: 'Inaccurate yield forecasting',
    short: 'Plan harvest with better evidence.',
    detail: 'Use plantation data and harvest intelligence to estimate readiness, expected yield, and the best timing for action.',
    outcome: 'Smarter harvest planning',
    href: '/yield-prediction',
    action: 'Open yield prediction',
  },
  {
    title: 'Export market uncertainty',
    short: 'Connect origin, quality, and market decisions.',
    detail: 'Give buyers and exporters a traceable view from estate to lot, with market context that supports stronger decisions.',
    outcome: 'Confident trade',
    href: '/component4',
    action: 'View export intelligence',
  },
]

const platformPillars = [
  ['01', 'Disease intelligence', 'Find field problems early'],
  ['02', 'Plantation & harvest', 'Grow with better signals'],
  ['03', 'Quality & origin', 'Prove every lot'],
  ['04', 'Export & market', 'Trade with confidence'],
]

const ecosystemFeatures = [
  {
    marker: 'Field',
    title: 'Know your fields',
    description:
      'Real-time crop health, soil, and weather signals so every plot gets the decision it actually needs.',
    link: 'Explore field insights',
    size: 'lg',
    eyebrow: '01 / FIELD INTELLIGENCE',
    stat: '24/7',
    statLabel: 'signal coverage',
  },
  {
    marker: 'Network',
    title: 'Grow with purpose',
    description: 'Growers, factories, and buyers on one transparent ledger of quality.',
    link: 'Discover the network',
    size: 'sm',
    eyebrow: '02 / SHARED NETWORK',
    stat: '1',
    statLabel: 'source of truth',
  },
  {
    marker: 'Market',
    title: 'Trade with confidence',
    description: 'Traceable data that lets Ceylon tea earn the price it deserves.',
    link: 'See the difference',
    size: 'sm',
    eyebrow: '03 / TRACEABLE MARKET',
    stat: '100%',
    statLabel: 'lot visibility',
  },
]

const elevationGrades = [
  {
    grade: 'High Grown',
    range: '> 1,200 m',
    regions: 'Nuwara Eliya · Uva · Dimbula',
    note: 'Bright, brisk liquors. The slowest growth and the highest scrutiny per leaf.',
    level: 92,
  },
  {
    grade: 'Mid Grown',
    range: '600 – 1,200 m',
    regions: 'Kandy · Uda Pussellawa',
    note: 'Balanced body and colour. The widest range of factory processing styles.',
    level: 64,
  },
  {
    grade: 'Low Grown',
    range: '< 600 m',
    regions: 'Ruhuna · Sabaragamuwa',
    note: 'Strong, dark liquors. The highest volume, and the hardest to trace at scale.',
    level: 38,
  },
]

const testimonials = [
  {
    quote:
      'We used to walk the estate to know what the estate already knew. Now the data reaches us before the weather does.',
    name: 'Estate Manager',
    place: 'Nuwara Eliya',
  },
  {
    quote:
      'Buyers ask where a lot came from and what happened to it. For the first time, we can answer that in one screen.',
    name: 'Factory Owner',
    place: 'Kandy',
  },
  {
    quote:
      'Traceable quality data changed how we negotiate. We pay for what the tea actually is, not what the paperwork says.',
    name: 'Export Buyer',
    place: 'Colombo',
  },
]

function LoadingScreen({ progress }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#edf9f0] transition-opacity duration-700 ${
        progress >= 100 ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading TeaCore"
    >
      <img src="/teawise-logo.png" alt="TeaCore logo" className="h-24 w-24 object-contain" />
      <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-[#d9eadb]" aria-hidden="true">
        <div
          className="h-full rounded-full bg-[#1d7a59] transition-[width] duration-150 ease-linear motion-reduce:transition-none"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}

function Home() {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1400
    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setReady(true), 250)
      }
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <LoadingScreen progress={progress} />

      <main
        className={`home-page min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top,_#f3fbf6_0%,_#f9fdfb_28%,_#ffffff_100%)] font-['Inter',sans-serif] text-[#153c31] transition-all duration-700 ${
          ready ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 26s linear infinite; }
          @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .float-slow { animation: float-slow 7s ease-in-out infinite; }
          @keyframes tea-zoom { from { transform: scale(1); } to { transform: scale(1.06); } }
          .tea-hero-image { animation: tea-zoom 18s ease-out both; }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track, .float-slow, .tea-hero-image { animation: none !important; }
          }
        `}</style>

        <Header />

        {/* HERO */}
        <section
          className="relative grid min-h-[calc(100vh-80px)] w-full items-center gap-16 overflow-hidden px-5 py-24 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12"
          id="home"
        >
          <img src="/tea-leaves-hero.png" alt="Fresh tea leaves in a tea plantation" className="tea-hero-image absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,38,26,.9)_0%,rgba(12,57,36,.72)_38%,rgba(12,57,36,.08)_82%)]" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,31,22,.66)_0%,transparent_42%,rgba(6,31,22,.18)_100%)]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #86EFAC 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
            style={{ background: 'radial-gradient(circle, #FDBA74 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute right-8 top-10 select-none" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.24em] text-[#cde8b2]">
              <span className="h-px w-10 bg-[#a6d86c]" />
              Ceylon tea intelligence
            </div>
            <h1 className="mt-7 max-w-xl font-['Space_Grotesk',sans-serif] text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Every leaf,
              <br />
              <span className="text-[#b9e66f]">accounted for.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/80 md:text-lg">
              From highland estate to export crate, one platform gives growers, factories, and buyers a shared,
              real-time read on quality — powered by field data and AI.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                className="rounded-full bg-[#b9e66f] px-6 py-3.5 text-sm font-bold text-[#173d2e] shadow-[0_10px_30px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:bg-white"
                href="#ecosystem"
              >
                Explore the platform
              </a>
              <a
                className="text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                href="#grades"
              >
                See tea by elevation
              </a>
            </div>
          </div>

          {/* Signature element — floating live estate ledger */}
          <div className="hidden">
            <div className="float-slow absolute inset-x-6 top-4 rounded-2xl border border-emerald-100 bg-white/95 p-6 shadow-2xl shadow-emerald-900/5 backdrop-blur">
              <div className="flex items-center justify-between border-b border-[#dfeae4] pb-4">
                <span className="font-['Space_Grotesk',sans-serif] text-sm font-medium">Live estate ledger</span>
                <span className="flex items-center gap-1.5 font-['JetBrains_Mono',monospace] text-[10px] tracking-widest text-[#1d7a59]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1d7a59]" />
                  LIVE
                </span>
              </div>

              <div className="mt-5 space-y-5">
                {liveMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-emerald-950">{m.label}</p>
                        <p className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest text-[#5a746b]">
                          {m.metric.toUpperCase()}
                        </p>
                      </div>
                      <p className="font-['JetBrains_Mono',monospace] text-lg text-[#1d7a59]">{m.value}</p>
                    </div>
                    <div className="mt-2.5 flex h-8 items-end gap-1">
                      {m.trend.map((v, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-[#dfeae4]"
                          style={{ height: `${v}%`, backgroundColor: i === m.trend.length - 1 ? '#1d7a59' : '#dfeae4' }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>

        {/* TICKER */}
        <div className="relative overflow-hidden border-y border-emerald-100 bg-[#f2faf4] py-4">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
            {[...tickerTags, ...tickerTags].map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-['JetBrains_Mono',monospace] text-xs tracking-wide text-[#526b62]"
              >
                <span className="h-1 w-1 rounded-full bg-[#1d7a59]" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CHALLENGES TO SOLUTIONS */}
        <section className="solution-section relative overflow-hidden px-5 py-20 md:px-12 md:py-28" id="solutions">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,_#d8edbd_0%,_transparent_68%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="solution-kicker">THE INDUSTRY, CONNECTED</p>
              <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-semibold leading-tight text-[#153c31] md:text-6xl">
                From the field to the <span className="text-[#5f9f3d]">final shipment.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#60766d]">
                TeaCore brings the Sri Lankan tea value chain into one intelligent workspace, replacing disconnected guesses with timely evidence.
              </p>
            </div>

            <div className="solution-layout mt-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
              <div className="solution-challenge-list" role="tablist" aria-label="Tea industry challenges">
                {solutionPaths.map((path, index) => (
                  <button
                    key={path.title}
                    className={`solution-challenge ${activeSolution === index ? 'is-active' : ''}`}
                    onClick={() => setActiveSolution(index)}
                    role="tab"
                    aria-selected={activeSolution === index}
                    type="button"
                  >
                    <span className="solution-number">0{index + 1}</span>
                    <span className="text-left">
                      <strong>{path.title}</strong>
                      <small>{path.short}</small>
                    </span>
                    <span className="solution-arrow" aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>

              <article className="solution-detail" role="tabpanel" aria-label={`${solutionPaths[activeSolution].title} solution`}>
                <div className="solution-detail-top">
                  <span className="solution-badge">TEACORE RESPONSE</span>
                  <span className="solution-status"><span /> READY TO EXPLORE</span>
                </div>
                <p className="mt-12 text-sm font-semibold uppercase tracking-[.16em] text-[#7a9e4d]">Challenge 0{activeSolution + 1}</p>
                <h3 className="mt-3 max-w-xl font-['Space_Grotesk',sans-serif] text-3xl font-semibold leading-tight text-[#153c31] md:text-5xl">
                  {solutionPaths[activeSolution].title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#526b62]">{solutionPaths[activeSolution].detail}</p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a className="solution-action" href={solutionPaths[activeSolution].href}>{solutionPaths[activeSolution].action} <span aria-hidden="true">↗</span></a>
                  <span className="solution-outcome"><span>+</span> {solutionPaths[activeSolution].outcome}</span>
                </div>
                <div className="solution-progress" aria-hidden="true"><span style={{ width: `${((activeSolution + 1) / solutionPaths.length) * 100}%` }} /></div>
              </article>
            </div>
            <div className="platform-map mt-5">
              <div className="platform-map-heading">
                <span>ONE CONNECTED PLATFORM</span>
                <small>React · FastAPI · AI/ML · Computer Vision · Blockchain</small>
              </div>
              <div className="platform-pillars">
                {platformPillars.map(([number, title, description]) => (
                  <div key={number} className="platform-pillar">
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM — bento grid */}
        <section className="home-ecosystem relative overflow-hidden bg-[#f8fbf7] px-5 py-24 md:px-12 md:py-32" id="ecosystem">
          <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border border-[#dcefc9]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-12 top-24 h-48 w-48 rounded-full border border-[#dcefc9]" aria-hidden="true" />
          <div className="mx-auto max-w-6xl">
            <h2 className="my-6 max-w-3xl font-['Space_Grotesk',sans-serif] text-4xl font-semibold leading-[1.05] tracking-tight text-[#153c31] md:text-6xl">
              From soil to shelf, <span className="text-[#1d7a59]">intelligence at every step.</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-[#60766d]">One connected view for the people who grow, make, and move Ceylon tea.</p>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {ecosystemFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-[#dce9df] bg-white p-8 shadow-[0_12px_40px_rgba(21,60,49,.04)] transition duration-300 hover:-translate-y-1 hover:border-[#a9d5a0] hover:shadow-[0_20px_50px_rgba(21,60,49,.09)] md:p-10 ${
                    feature.size === 'lg' ? 'md:col-span-2 md:flex md:items-center md:justify-between md:gap-10' : ''
                  }`}
                >
                  <div className={feature.size === 'lg' ? 'max-w-md' : ''}>
                    <div className="mb-8 flex items-center justify-between"><span className="font-['JetBrains_Mono',monospace] text-[10px] font-semibold tracking-[.16em] text-[#1d7a59]">{feature.eyebrow}</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf7e9] text-lg text-[#1d7a59]">{feature.size === 'lg' ? '⌁' : feature.marker === 'Network' ? '↗' : '◌'}</span></div>
                    <h3 className="my-4 font-['Space_Grotesk',sans-serif] text-2xl text-[#153c31]">{feature.title}</h3>
                    <p className="mb-8 max-w-lg text-sm leading-6 text-[#5b6f68]">{feature.description}</p>
                    <a
                      className="text-xs font-semibold tracking-wide text-[#1d7a59] underline decoration-[#a8e3b6]/80 underline-offset-4 group-hover:decoration-[#1d7a59]"
                      href="#ecosystem"
                    >
                      {feature.link}
                    </a>
                  </div>
                  {feature.size === 'lg' && (
                    <div className="mt-8 flex gap-1.5 md:mt-0" aria-hidden="true">
                      {[36, 58, 44, 72, 50, 80, 62].map((h, i) => (
                        <div key={i} className="w-3 rounded-full bg-[#26352E]" style={{ height: `${h}px` }}>
                          <div
                            className="w-3 rounded-full bg-[#1d7a59]"
                            style={{ height: `${h * 0.55}px`, marginTop: `${h * 0.45}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {feature.size !== 'lg' && <div className="mt-8 flex items-end justify-between border-t border-[#e5eee8] pt-5"><span className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-[#153c31]">{feature.stat}</span><span className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-widest text-[#789087]">{feature.statLabel}</span></div>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ELEVATION GRADES */}
        <section className="home-grades relative overflow-hidden bg-white px-5 py-24 md:px-12" id="grades">
          <div className="pointer-events-none absolute left-0 top-0 h-1 w-32 rounded-r-full bg-gradient-to-r from-lime-300 to-transparent" aria-hidden="true" />
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="mt-5 max-w-lg font-['Space_Grotesk',sans-serif] text-3xl font-semibold leading-tight text-[#153c31] md:text-4xl">
                  Three elevations. <span className="text-[#1d7a59]">One standard of proof.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#5a746b]">
                Ceylon tea has always been graded by altitude. Our platform carries that same rigour into every
                record — so a claim about elevation, harvest date, or process is a fact you can trace, not a line
                on a label.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {elevationGrades.map((tier) => (
                <div
                  key={tier.grade}
                  className="relative rounded-2xl border border-emerald-100 bg-emerald-50 p-8 transition hover:border-[#E2872E]/40"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] tracking-widest text-[#1d7a59]">
                    {tier.range}
                  </span>
                  <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-2xl text-[#153c31]">{tier.grade}</h3>
                  <p className="mt-2 text-xs font-medium tracking-wide text-[#5a746b]">{tier.regions}</p>
                  <p className="mt-5 text-sm leading-6 text-[#5a746b]">{tier.note}</p>
                  <div className="mt-7 h-1 rounded-full bg-[#dfeae4]">
                    <div
                      className="h-1 rounded-full bg-gradient-to-r from-[#a7e1bb] to-[#1d7a59]"
                      style={{ width: `${tier.level}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="home-voices relative overflow-hidden bg-white px-5 py-24 md:px-12" id="voices">
          <div className="pointer-events-none absolute bottom-8 left-8 text-7xl text-orange-100/80" aria-hidden="true">❋</div>
          <div className="mx-auto max-w-6xl">
            <h2 className="mt-5 max-w-xl font-['Space_Grotesk',sans-serif] text-3xl font-semibold leading-tight text-[#153c31] md:text-4xl">
              Every stage, in <span className="text-[#1d7a59]">its own words.</span>
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-emerald-50 p-8"
                >
                  <span className="font-['Space_Grotesk',sans-serif] text-5xl leading-none text-[#1d7a59]/50">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 font-['Space_Grotesk',sans-serif] text-lg leading-snug text-[#153c31]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-[#d8e8dd] pt-4 text-xs">
                    <span className="font-['JetBrains_Mono',monospace] tracking-widest text-[#1d7a59]">
                      {t.name.toUpperCase()}
                    </span>
                    <span className="text-[#5a746b]"> — {t.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="home-cta relative overflow-hidden bg-white px-5 py-24 text-emerald-950 md:px-12">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, #E2872E 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="mt-5 font-['Space_Grotesk',sans-serif] text-3xl font-semibold leading-tight text-[#153c31] md:text-4xl">
                See your estate this <span className="text-[#1d7a59]">clearly.</span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-[#5a746b]">
                Bring your fields, factory, or trading desk onto one platform. Setup starts with a single estate.
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-wrap items-center gap-6">
              <a
                className="rounded-full bg-[#1d7a59] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#155c42]"
                href="#ecosystem"
              >
                Request a demo
              </a>
              <a
                className="text-sm font-semibold text-[#153c31] underline decoration-[#a8e3b6]/80 underline-offset-4 hover:decoration-[#1d7a59]"
                href="#home"
              >
                Back to top
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Home
