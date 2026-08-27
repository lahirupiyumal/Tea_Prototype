export default function OverallQualityIndex({ qualityData, currentSample }) {
  if (!qualityData) return null

  const { score, category, interpretation } = qualityData

  // Color mapping based on category
  const categoryConfig = {
    Excellent: { bg: 'bg-emerald-950', badge: 'bg-lime-400 text-emerald-950', border: 'border-lime-500', glow: 'shadow-lime-500/20' },
    Good: { bg: 'bg-emerald-900', badge: 'bg-emerald-200 text-emerald-950', border: 'border-emerald-400', glow: 'shadow-emerald-500/20' },
    Moderate: { bg: 'bg-amber-900', badge: 'bg-amber-200 text-amber-950', border: 'border-amber-400', glow: 'shadow-amber-500/20' },
    Low: { bg: 'bg-rose-950', badge: 'bg-rose-200 text-rose-950', border: 'border-rose-400', glow: 'shadow-rose-500/20' }
  }

  const config = categoryConfig[category] || categoryConfig.Good

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-emerald-950">
              11. Overall Quality Index (OQI)
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
              Task 11
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Weighted multi-factor quality aggregation across Tea Grade, Purity, Composition, Defect Control, and Origin Confidence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Score Card (5 cols) */}
        <div className={`${config.bg} text-white p-8 rounded-3xl border ${config.border} shadow-xl ${config.glow} flex flex-col justify-between space-y-6 lg:col-span-5`}>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest">
                Overall Quality Index
              </span>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase ${config.badge}`}>
                Category: {category}
              </span>
            </div>

            <div className="my-6">
              <div className="text-6xl font-black tracking-tight text-white font-mono flex items-baseline gap-2">
                <span>{score}</span>
                <span className="text-2xl font-normal text-emerald-300/80">/ 100</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-emerald-100/80">
            <div className="flex justify-between">
              <span>Sample Evaluated:</span>
              <b className="text-white font-mono">{currentSample?.id || 'Custom Upload'}</b>
            </div>
            <div className="flex justify-between">
              <span>Origin Standard:</span>
              <b className="text-lime-300">{currentSample?.country || 'Sri Lanka'}</b>
            </div>
          </div>
        </div>

        {/* Right: Weighted Components Breakdown & Interpretation (7 cols) */}
        <div className="lg:col-span-7 bg-[#fbfcf8] p-6 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-4">
              Weighted Index Factor Contribution
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs mb-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Tea Grade (25%)</span>
                <span className="font-bold text-emerald-950">92.4 %</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Purity (25%)</span>
                <span className="font-bold text-emerald-950">94.6 %</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Composition (20%)</span>
                <span className="font-bold text-emerald-950">88.0 %</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Defect Control (15%)</span>
                <span className="font-bold text-emerald-950">94.0 %</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 col-span-2 sm:col-span-2">
                <span className="text-slate-400 block text-[10px]">Origin Match (15%)</span>
                <span className="font-bold text-emerald-950">86.0 %</span>
              </div>
            </div>
          </div>

          {/* AI Quality Interpretation */}
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200/80">
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-2 mb-1">
              <span>🤖</span> AI Quality Interpretation Summary
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {interpretation}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
