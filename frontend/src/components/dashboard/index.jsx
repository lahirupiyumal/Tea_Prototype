import { useState } from 'react'
import PlantationHealth from '../component2/PlantationHealth'
import YieldPrediction from '../component2/YieldPrediction'
import HarvestReadinessDetection from '../component2/HarvestReadinessDetection'
import HarvestQuality from '../component2/HarvestQuality'
import DensityPlanning from '../component2/DensityPlanning'

const menuItems = [
  ['health', '🌿', 'Plantation Health', PlantationHealth],
  ['yield', '📈', 'Yield Prediction', YieldPrediction],
  ['readiness', '🍃', 'Harvest Readiness', HarvestReadinessDetection],
  ['quality', '⭐', 'Harvest Quality', HarvestQuality],
  ['density', '📐', 'Density Planning', DensityPlanning],
]

function Dashboard() {
  const [active, setActive] = useState('health')
  const ActivePage = menuItems.find(([id]) => id === active)[3]

  return <div className="dashboard-shell min-h-screen bg-slate-50 font-sans text-emerald-950">
    <aside className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-emerald-950 px-5 py-7 text-white shadow-xl">
      <a href="/" className="border-b border-white/10 px-3 pb-7"><p className="text-xs font-bold tracking-[.2em] text-lime-300">CEYLON TEA</p><h1 className="mt-2 font-serif text-2xl">Intelligence System</h1></a>
      <div className="px-3 pt-8"><p className="text-[10px] font-bold tracking-[.2em] text-emerald-300">DASHBOARD MENU</p></div>
      <nav className="mt-4 space-y-2" aria-label="Dashboard sections">
        {menuItems.map(([id, icon, label]) => <button key={id} type="button" onClick={() => setActive(id)} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${active === id ? 'bg-lime-300 text-emerald-950 shadow-lg' : 'text-emerald-100 hover:bg-white/10'}`}><span className="text-xl">{icon}</span><span>{label}</span>{active === id && <span className="ml-auto">→</span>}</button>)}
      </nav>
      <div className="mt-auto rounded-2xl bg-white/10 p-4 text-xs leading-5 text-emerald-100"><span className="text-lime-300">●</span> All AI systems are online<br /><span className="text-emerald-300">Last updated just now</span></div>
    </aside>
    <div className="min-h-screen pl-72">
      <ActivePage />
    </div>
  </div>
}

export default Dashboard
