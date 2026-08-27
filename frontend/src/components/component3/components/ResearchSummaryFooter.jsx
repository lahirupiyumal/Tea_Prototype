export default function ResearchSummaryFooter({ analysisResults, currentSample }) {
  const highestOrigin = analysisResults?.originSimilarity?.highest || 'Sri Lanka'
  const highestScore = analysisResults?.originSimilarity?.highestScore || 91.4
  const oqiScore = analysisResults?.quality?.score || 87.8

  const summaryGrid = [
    { label: 'Unified Multi-Task Analysis', value: '✓ 5 Coordinated Tasks', sub: 'Single Image Input' },
    { label: 'Best Origin Match', value: highestOrigin === 'Sri Lanka' ? 'Sri Lanka 🇱🇰' : 'India 🇮🇳', sub: 'Highest Terroir Match' },
    { label: 'Origin Similarity', value: `${highestScore}%`, sub: 'High Visual Similarity' },
    { label: 'Cross-Origin Benchmark', value: '2 Countries', sub: 'LK • IN Profiles' },
    { label: 'Overall Quality', value: `${oqiScore} / 100`, sub: 'Excellent Category' },
    { label: 'Explainability', value: 'Grad-CAM++', sub: 'Visual Attribution' }
  ]

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-emerald-950">
              AI Tea Intelligence Summary & Research Contribution
            </h3>
            <span className="text-xs font-black px-2.5 py-1 bg-lime-400 text-emerald-950 rounded-full uppercase">
              Summary Report
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Consolidated intelligence evaluation for sample {currentSample?.id || 'TS-LK-9021'}.
          </p>
        </div>
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {summaryGrid.map((item) => (
          <div key={item.label} className="bg-[#fbfcf8] p-4 rounded-2xl border border-slate-200 text-center space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              {item.label}
            </span>
            <span className="text-sm font-black text-emerald-950 block font-mono">
              {item.value}
            </span>
            <span className="text-[9px] text-lime-700 font-semibold block">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Research Contribution Box */}
      <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-800 space-y-2">
        <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider">
          Research Contribution Statement
        </h4>
        <p className="text-xs text-emerald-100 leading-relaxed font-serif text-sm">
          "The proposed framework integrates multi-task tea quality assessment, cross-origin benchmarking, origin similarity-based provenance support and explainable AI into a unified tea intelligence system."
        </p>
      </div>

      {/* Scientific Responsibility Disclaimers & Tags */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase">
          <span className="text-slate-500 mr-2">Scientific Validation Badges:</span>
          <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
            Prototype Result
          </span>
          <span className="bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full border border-blue-300">
            Demonstration Score
          </span>
          <span className="bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full border border-purple-300">
            Reference Profile
          </span>
          <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300">
            Prototype AI Prediction
          </span>
          <span className="bg-lime-100 text-lime-900 px-2.5 py-0.5 rounded-full border border-lime-300">
            Prototype Grad-CAM++
          </span>
        </div>

        <div className="text-xs text-slate-600 border-t border-slate-200/80 pt-3 flex items-start gap-2">
          <span className="text-amber-600 font-bold">ℹ️ Scientific Responsibility Disclaimer:</span>
          <span className="italic">
            Research prototype — real-world deployment requires validation using geographically verified tea image datasets and experimentally measured ground-truth data.
          </span>
        </div>
      </div>
    </section>
  )
}
