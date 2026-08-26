import Header from '../layout/Header'
import Footer from '../layout/Footer'

function HarvestReadinessDetection() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 03 / HARVEST INTELLIGENCE</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Harvest readiness detection</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">Use AI-powered field signals to identify the ideal harvest window and protect the quality of every tea leaf.</p></div>
        </div> */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <label className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm transition hover:border-lime-400 hover:bg-lime-50/40"><input className="hidden" type="file" accept="image/*" /><span className="text-4xl text-lime-700">⌁</span><strong className="mt-4 text-lg">Upload tea bush image</strong><span className="mt-2 text-sm text-slate-500">PNG, JPG or WEBP · Max 10MB</span></label>
          <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">AI ANALYSIS</p><h2 className="mt-3 font-serif text-2xl">What the model evaluates</h2><div className="mt-6 grid gap-3 sm:grid-cols-3">{['Bud growth','Leaf development','Harvest stage'].map((item, index) => <div className="rounded-xl bg-emerald-50 p-4" key={item}><span className="text-xs text-lime-700">0{index + 1}</span><strong className="mt-3 block text-sm">{item}</strong><span className="mt-2 block text-xs text-slate-500">Image signal detected</span></div>)}</div></div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10">
            <div className="flex items-start justify-between"><div><p className="text-xs font-bold tracking-widest text-emerald-200">CURRENT ESTATE</p><h2 className="mt-3 font-serif text-3xl">Nuwara Eliya Estate</h2></div><span className="rounded-full bg-white/10 px-3 py-2 text-xs text-lime-200">LIVE ↗</span></div>
            <div className="mt-12 flex items-end gap-8"><div><strong className="font-serif text-7xl text-lime-300">94</strong><span className="ml-2 text-slate-300">/100</span><p className="mt-2 text-sm text-emerald-100">Harvest readiness score</p></div><div className="mb-3 h-24 w-px bg-white/20"/><div className="mb-3"><p className="text-xs uppercase tracking-widest text-emerald-200">Recommended window</p><strong className="mt-2 block text-xl">Next 3–5 days</strong><small className="text-emerald-200">Conditions are favourable</small></div></div>
            <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[94%] rounded-full bg-lime-300"/></div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">READINESS SIGNALS</p><div className="mt-6 space-y-5">{[['Leaf maturity','High','bg-lime-500'],['Moisture level','Optimal','bg-emerald-500'],['Weather stability','Good','bg-sky-500'],['Plucking quality','Excellent','bg-amber-400']].map(([label,value,color])=><div key={label}><div className="mb-2 flex justify-between text-sm"><span className="text-slate-600">{label}</span><b>{value}</b></div><div className="h-2 rounded-full bg-slate-100"><div className={`h-full w-4/5 rounded-full ${color}`}/></div></div>)}</div></div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3"><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">☀</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">WEATHER WINDOW</p><h3 className="mt-2 font-serif text-xl">Stable conditions</h3><p className="mt-2 text-sm text-slate-500">Low rain probability during the recommended harvest period.</p></article><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">⌁</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">AI CONFIDENCE</p><h3 className="mt-2 font-serif text-xl">92% confidence</h3><p className="mt-2 text-sm text-slate-500">Based on imagery, climate and field history.</p></article><article className="rounded-2xl border border-emerald-100 bg-white p-6"><span className="text-2xl text-lime-700">✓</span><p className="mt-5 text-xs font-bold tracking-widest text-slate-400">NEXT ACTION</p><h3 className="mt-2 font-serif text-xl">Prepare your team</h3><p className="mt-2 text-sm text-slate-500">Plan plucking crews for the upcoming optimal window.</p></article></div>
      </section>
      <Footer />
    </main>
  )
}

export default HarvestReadinessDetection
