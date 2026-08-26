import { useMemo, useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function DensityPlanning() {
  const [analysed, setAnalysed] = useState(false)
  const [area, setArea] = useState(1)
  const [rowSpacing, setRowSpacing] = useState(1.2)
  const [plantSpacing, setPlantSpacing] = useState(0.75)
  const bushCount = useMemo(() => Math.round((Number(area) * 4046.86) / (Number(rowSpacing) * Number(plantSpacing))), [area, rowSpacing, plantSpacing])

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 06 / PLANTATION PLANNING</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6"><div><h1 className="font-serif text-4xl font-semibold md:text-5xl">Plantation density planning &amp; bush layout recommendation</h1><p className="mt-4 max-w-3xl leading-7 text-slate-500">AI uses land area, row spacing, plant spacing, plantation zone and terrain information to recommend an optimized plantation layout.</p></div><span className="rounded-full border border-lime-200 bg-white px-4 py-2 text-xs font-bold text-lime-700">● AI engine ready</span></div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"><p className="text-xs font-bold tracking-widest text-slate-400">PLANTATION INPUTS</p><h2 className="mt-3 font-serif text-2xl">Tell us about your land</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><Input label="Total land area" value={area} setValue={setArea} unit="acre" /><Input label="Row spacing" value={rowSpacing} setValue={setRowSpacing} unit="m" /><Input label="Plant spacing" value={plantSpacing} setValue={setPlantSpacing} unit="m" /><Select label="Plantation zone" options={['High grown', 'Mid grown', 'Low grown']} /><Select label="Terrain type" options={['Level', 'Sloped', 'Hilly']} /></div><button className="mt-7 w-full rounded-xl bg-emerald-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-800" onClick={() => setAnalysed(true)}>{analysed ? 'Density analysis complete ✓' : 'Optimize plantation layout'}</button></div>
          <div className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl md:p-10"><p className="text-xs font-bold tracking-widest text-emerald-200">AI ANALYSIS</p><h2 className="mt-3 font-serif text-3xl">Recommended planting density</h2><p className="mt-4 text-sm leading-6 text-emerald-100">Planting density is calculated using the land area and the spacing between rows and bushes.</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><Output label="Recommended bush count" value={analysed ? bushCount.toLocaleString() : '—'} suffix={analysed ? 'bushes' : ''} /><Output label="Plantation density" value={analysed ? 'Optimal' : '—'} /><Output label="Recommended spacing" value={analysed ? `${rowSpacing} m × ${plantSpacing} m` : '—'} /><Output label="Layout recommendation" value={analysed ? 'Contour rows' : '—'} /></div></div>
        </div>

        <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-10"><p className="text-xs font-bold tracking-widest text-lime-700">RECOMMENDATION</p><div className="mt-4 flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-serif text-3xl">{analysed ? 'Maintain an optimized bush layout.' : 'Awaiting layout analysis'}</h2><p className="mt-2 text-sm text-slate-500">{analysed ? 'Use consistent spacing and contour planting to improve access, airflow and plantation productivity.' : 'Enter your plantation details and optimize the layout to see recommendations.'}</p></div><span className="rounded-full bg-lime-100 px-5 py-3 text-sm font-bold text-lime-800">{analysed ? 'Optimal density' : 'Not analysed'}</span></div></div>
      </section>
      <Footer />
    </main>
  )
}

function Input({ label, value, setValue, unit }) { return <label className="text-xs font-bold text-slate-600">{label}<div className="mt-2 flex rounded-lg border border-emerald-100 bg-slate-50"><input className="w-full bg-transparent p-3 text-sm outline-none" type="number" min="0" step="0.01" value={value} onChange={(event) => setValue(event.target.value)} /><b className="p-3 text-xs text-slate-400">{unit}</b></div></label> }
function Select({ label, options }) { return <label className="text-xs font-bold text-slate-600">{label}<div className="mt-2 flex rounded-lg border border-emerald-100 bg-slate-50"><select className="w-full bg-transparent p-3 text-sm outline-none" defaultValue={options[0]}>{options.map((option) => <option key={option}>{option}</option>)}</select></div></label> }
function Output({ label, value, suffix = '' }) { return <div className="rounded-2xl bg-white/10 p-5"><small className="text-xs text-emerald-200">{label}</small><strong className="mt-2 block font-serif text-2xl text-lime-300">{value}</strong><span className="text-xs text-emerald-200">{suffix}</span></div> }

export default DensityPlanning
