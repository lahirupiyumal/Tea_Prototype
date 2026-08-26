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

const ecosystemFeatures = [
  {
    marker: 'Field',
    title: 'Know your fields',
    description:
      'Real-time crop health, soil, and weather signals so every plot gets the decision it actually needs.',
    link: 'Explore field insights',
    size: 'lg',
  },
  {
    marker: 'Network',
    title: 'Grow with purpose',
    description: 'Growers, factories, and buyers on one transparent ledger of quality.',
    link: 'Discover the network',
    size: 'sm',
  },
  {
    marker: 'Market',
    title: 'Trade with confidence',
    description: 'Traceable data that lets Ceylon tea earn the price it deserves.',
    link: 'See the difference',
    size: 'sm',
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
      aria-label="Loading Ceylon Tea Intelligence Platform"
    >
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mb-7">
        <circle cx="36" cy="36" r="30" stroke="#d9eadb" strokeWidth="1.5" />
        <circle
          cx="36"
          cy="36"
          r="30"
          stroke="#1d7a59"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 30}
          strokeDashoffset={2 * Math.PI * 30 * (1 - progress / 100)}
          transform="rotate(-90 36 36)"
          className="transition-[stroke-dashoffset] duration-150 ease-linear motion-reduce:transition-none"
        />
        <path
          d="M36 50c9-4 14-12 14-21 0-3-.6-6-1.7-8.6C45 24 39 27 36 34c-3-7-9-10-12.3-13.6C22.6 23 22 26 22 29c0 9 5 17 14 21z"
          fill="#1d7a59"
          opacity="0.9"
        />
      </svg>
      <p className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[.28em] text-[#1d6f4d]">
        CALIBRATING FIELD DATA
      </p>
      <p className="mt-3 font-['JetBrains_Mono',monospace] text-3xl font-medium text-[#123d31]">
        {Math.min(progress, 100)}
        <span className="text-[#1d7a59]">%</span>
      </p>
    </div>
  )
}

function Home() {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

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
        className={`min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#f3fbf6_0%,_#f9fdfb_28%,_#ffffff_100%)] font-['Inter',sans-serif] text-[#153c31] transition-all duration-700 ${
          ready ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 26s linear infinite; }
          @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .float-slow { animation: float-slow 7s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track, .float-slow { animation: none !important; }
          }
        `}</style>

        <Header />

        {/* HERO */}
        <section
          className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-5 py-24 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12"
          id="home"
        >
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

          <div className="relative">
            <p className="flex items-center gap-2 font-['JetBrains_Mono',monospace] text-[11px] font-medium tracking-[.24em] text-[#1d7a59]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1d7a59]" />
              CEYLON TEA INTELLIGENCE PLATFORM
            </p>

            <h1 className="mt-7 max-w-xl font-['Space_Grotesk',sans-serif] text-5xl font-semibold leading-[1.05] tracking-tight text-[#153c31] md:text-6xl">
              Every leaf,
              <br />
              <span className="text-[#1d7a59]">accounted for.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-[#4f655e]">
              From highland estate to export crate, one platform gives growers, factories, and buyers a shared,
              real-time read on quality — powered by field data and AI.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                className="rounded-full bg-[#1d7a59] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#155c42]"
                href="/dashboard"
              >
                AI-Powered Tea Plantation<br />Health, Harvest &amp; Quality Intelligence System
              </a>
              <a
                className="text-sm font-semibold text-[#153c31] underline decoration-[#9ad9b6]/70 underline-offset-4 hover:decoration-[#1d7a59]"
                href="#ecosystem"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Signature element — floating live estate ledger */}
          <div className="relative hidden h-[480px] lg:block">
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

        {/* ECOSYSTEM — bento grid */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-12" id="ecosystem">
          <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full border border-lime-100" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 top-28 h-48 w-48 rounded-full border border-lime-100" aria-hidden="true" />
          <div className="mx-auto max-w-6xl">
            <h2 className="mx-auto my-6 max-w-2xl font-['Space_Grotesk',sans-serif] text-4xl font-semibold leading-tight text-[#153c31] md:text-5xl">
              From soil to shelf, <span className="text-[#1d7a59]">intelligence at every step.</span>
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {ecosystemFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className={`group relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 p-8 transition duration-300 hover:border-[#6EE7B7]/40 hover:bg-white ${
                    feature.size === 'lg' ? 'md:col-span-2 md:flex md:items-center md:justify-between md:gap-10' : ''
                  }`}
                >
                  <div className={feature.size === 'lg' ? 'max-w-md' : ''}>
                    <span className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#1d7a59]">
                      {feature.marker.toUpperCase()}
                    </span>
                    <h3 className="my-4 font-['Space_Grotesk',sans-serif] text-2xl text-[#153c31]">{feature.title}</h3>
                    <p className="mb-6 text-sm leading-6 text-[#5b6f68]">{feature.description}</p>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ELEVATION GRADES */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-12" id="grades">
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
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-12" id="voices">
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
        <section className="relative overflow-hidden bg-white px-5 py-24 text-emerald-950 md:px-12">
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
