import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function YieldPrediction() {
  const [predicted, setPredicted] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 04 / HARVEST INTELLIGENCE</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Intelligent harvest scheduling &amp; expected yield prediction</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">AI combines field readiness, climate, weather and historical data to identify the best harvest window and predict expected yield.</p></div>
        </div> */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
            <div className="mb-7 flex items-start justify-between"><div><small className="text-[10px] font-bold tracking-widest text-slate-400">INPUTS</small><h2 className="mt-2 font-serif text-2xl">Prediction signals</h2></div><span className="text-2xl text-lime-700">⌁</span></div>
            <div className="space-y-3">{['Harvest readiness','Plantation health','Climate stress','Weather forecast','Historical yield','Future climate conditions'].map((item, index) => <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm" key={item}><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-lime-700">{index + 1}</span>{item}<b className="ml-auto text-xs text-emerald-600">Ready</b></div>)}</div>
            <button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setPredicted(true)}>{predicted ? 'Prediction complete ✓' : 'Generate yield prediction'}</button>
          </div>

          <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10">
            <p className="text-xs font-bold tracking-widest text-emerald-200">AI ANALYSIS</p><h2 className="mt-3 font-serif text-3xl">Harvest outlook</h2><p className="mt-4 max-w-xl text-sm leading-6 text-emerald-100">The model evaluates harvest timing, weather suitability, yield potential and the impact of delaying harvest.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3"><Result label="Best harvest date" value={predicted ? '15 July' : '—'} /><Result label="Expected yield" value={predicted ? '2,250' : '—'} suffix={predicted ? 'kg/ha' : ''} /><Result label="AI confidence" value={predicted ? '91' : '—'} suffix={predicted ? '%' : ''} /></div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-slate-400">RECOMMENDATION</p><div className="mt-4 flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-serif text-3xl">{predicted ? 'Harvest within the next 2–3 days' : 'Awaiting prediction'}</h2><p className="mt-2 text-sm text-slate-500">{predicted ? 'Weather conditions are favourable and the expected yield is at its strongest point.' : 'Review the available signals and generate your harvest forecast.'}</p></div><span className="rounded-full bg-lime-100 px-5 py-3 text-sm font-bold text-lime-800">{predicted ? 'Optimal window' : 'Not analysed'}</span></div></div>
      </section>
      <Footer />
    </main>
  )
}

function Result({ label, value, suffix = '' }) { return <div className="rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">{label}</small><strong className="mt-3 block font-serif text-3xl text-lime-300">{value}</strong><span className="text-xs text-emerald-200">{suffix}</span></div> }

export default YieldPrediction
