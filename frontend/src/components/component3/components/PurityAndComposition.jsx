export default function PurityAndComposition({ purityData, compositionData }) {
  if (!purityData || !compositionData) return null

  const { purityScore, teaMaterial, foreignMaterial } = purityData
  const { composition, interpretation } = compositionData

  // SVG Circular Gauge parameters for Purity
  const radius = 54
  const strokeWidth = 10
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (purityScore / 100) * circumference

  // Donut chart parameters for Mixed Composition
  const compItems = [
    { label: 'Tea Leaves', value: composition.teaLeaves, color: '#15803d' }, // emerald-700
    { label: 'Tea Dust', value: composition.teaDust, color: '#84cc16' },   // lime-500
    { label: 'Stems / Fibers', value: composition.stemsFibers, color: '#eab308' }, // yellow-500
    { label: 'Foreign Material', value: composition.foreignMaterial, color: '#ef4444' } // red-500
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Task 5: Purity Estimation */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-emerald-950">5. Tea Purity Estimation</h3>
              <span className="text-xs font-semibold px-2 py-0.5 bg-lime-100 text-lime-900 rounded-full">
                Task 5
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Spectral and visual ratio of pure tea leaf substance versus non-leaf matrix.
            </p>
          </div>
          <span className="bg-emerald-950 text-lime-400 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
            Prototype Purity Estimation
          </span>
        </div>

        {/* Circular Progress Gauge & Breakdown */}
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
          {/* Radial Ring */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="text-slate-100 stroke-current"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="text-emerald-700 stroke-current transition-all duration-1000 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-3xl font-black text-emerald-950 tracking-tight">{purityScore}%</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Purity Score</span>
            </div>
          </div>

          {/* Breakdown cards */}
          <div className="w-full sm:w-1/2 space-y-3">
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider block">Tea Material</span>
                <span className="text-xl font-black text-emerald-950">{teaMaterial}%</span>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            </div>

            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-rose-800 font-bold uppercase tracking-wider block">Foreign Material</span>
                <span className="text-xl font-black text-rose-950">{foreignMaterial}%</span>
              </div>
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
          <b>Purity Threshold:</b> Sample complies with ISO 3720 tea quality minimum threshold standard (&gt;90% leaf material).
        </div>
      </section>

      {/* Task 6: Mixed Composition Analysis */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-emerald-950">6. Mixed Composition Analysis</h3>
              <span className="text-xs font-semibold px-2 py-0.5 bg-lime-100 text-lime-900 rounded-full">
                Task 6
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Granular constituent breakdown of leaf matter, dust, stems/fibers, and non-tea debris.
            </p>
          </div>
        </div>

        {/* Horizontal Stacked Bar Chart & Metrics */}
        <div className="space-y-4">
          {/* Stacked Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Constituent Distribution</span>
              <span className="text-emerald-800 font-mono">Total: 100%</span>
            </div>
            <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200 shadow-inner">
              {compItems.map(item => (
                <div
                  key={item.label}
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  className="h-full transition-all duration-700 first:rounded-l-full last:rounded-r-full"
                  title={`${item.label}: ${item.value}%`}
                />
              ))}
            </div>
          </div>

          {/* Legend Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            {compItems.map(item => (
              <div key={item.label} className="bg-[#fbfcf8] p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="font-semibold text-slate-700">{item.label}</span>
                </div>
                <span className="font-mono font-bold text-emerald-950">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interpretation Note */}
        <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80">
          <div className="text-xs font-bold text-emerald-950 mb-1">Composition Interpretation</div>
          <p className="text-xs text-slate-600 leading-relaxed">{interpretation}</p>
        </div>
      </section>

    </div>
  )
}
