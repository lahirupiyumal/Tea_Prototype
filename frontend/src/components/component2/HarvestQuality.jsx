import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function HarvestQuality() {
  const [analysed, setAnalysed] = useState(false)
  const signals = ['Plantation health', 'Tea bush maturity', 'Climate conditions', 'Weather forecast', 'Harvest time', 'Estate zone']

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 05 / QUALITY INTELLIGENCE</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Harvest quality potential prediction</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">Use AI to estimate the quality potential of your harvest before it reaches the factory floor.</p></div>
        </div> */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">AI SYSTEM INPUTS</p><h2 className="mt-3 font-serif text-2xl">What the model evaluates</h2><div className="mt-6 space-y-3">{signals.map((signal, index) => <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm" key={signal}><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-lime-700">{index + 1}</span>{signal}<b className="ml-auto text-xs text-emerald-600">Ready</b></div>)}</div><button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setAnalysed(true)}>{analysed ? 'Quality analysis complete ✓' : 'Analyse harvest quality'}</button></div>
          <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10"><p className="text-xs font-bold tracking-widest text-emerald-200">QUALITY OUTPUT</p><h2 className="mt-3 font-serif text-3xl">Harvest Quality Potential</h2><p className="mt-4 text-sm leading-6 text-emerald-100">The model combines plantation health, maturity and climate conditions to estimate the quality grade.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><Quality level="Premium" active={analysed} /><Quality level="Medium" /><Quality level="Low" /></div><div className="mt-8 rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">PREDICTED QUALITY</small><strong className="mt-2 block font-serif text-4xl text-lime-300">{analysed ? 'Premium' : '—'}</strong></div></div>
        </div>

        <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-slate-400">EXAMPLE AI ANALYSIS</p><div className="mt-6 grid gap-4 md:grid-cols-3"><Metric label="Plantation health" value={analysed ? '91%' : '—'} /><Metric label="Harvest ready" value={analysed ? '96%' : '—'} /><Metric label="Climate" value={analysed ? 'Good' : '—'} /></div><div className="mt-8 border-t border-emerald-100 pt-7"><p className="text-xs font-bold tracking-widest text-lime-700">RECOMMENDATION</p><h2 className="mt-3 font-serif text-3xl">{analysed ? 'Harvest within the next 2–3 days.' : 'Awaiting quality analysis'}</h2><p className="mt-3 text-sm text-slate-500">{analysed ? 'This timing supports higher yield, better tea quality and improved market value.' : 'Run the AI analysis to receive a harvest recommendation.'}</p><div className="mt-6 grid gap-3 text-sm sm:grid-cols-2"><Benefit text="Higher yield" /><Benefit text="Higher tea quality" /><Benefit text="Better market value" /><Benefit text="Improved factory performance" /></div></div></div>
      </section>
      <Footer />
    </main>
  )
}

function Quality({ level, active = false }) { return <div className={`rounded-2xl p-5 ${active ? 'bg-lime-300 text-emerald-950' : 'bg-white/10'}`}><span className="text-2xl">★</span><strong className="mt-3 block">{level}</strong><small className="mt-1 block">{active ? 'Recommended' : 'Potential grade'}</small></div> }
function Metric({ label, value }) { return <div className="rounded-2xl bg-emerald-50 p-5"><small className="text-xs text-slate-500">{label}</small><strong className="mt-2 block font-serif text-3xl">{value}</strong></div> }
function Benefit({ text }) { return <div className="rounded-xl bg-emerald-50 p-4 text-emerald-900">✅ {text}</div> }

export default HarvestQuality
