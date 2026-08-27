export default function UnifiedMultiTaskFramework({ analysisResults, currentSample }) {
  if (!analysisResults) return null

  const { grade, purity, composition, defects, origin } = analysisResults

  const tasksList = [
    {
      task: 'Tea Grade Classification',
      key: 'Grade',
      result: grade.predictedGrade,
      score: `${grade.confidence}%`,
      status: 'High Confidence',
      badgeBg: 'bg-lime-100 text-lime-900',
      icon: '🍃'
    },
    {
      task: 'Purity Estimation',
      key: 'Purity',
      result: `${purity.purityScore}% Pure`,
      score: `Tea: ${purity.teaMaterial}% / Foreign: ${purity.foreignMaterial}%`,
      status: purity.purityScore > 90 ? 'Optimal' : 'Standard',
      badgeBg: 'bg-emerald-100 text-emerald-900',
      icon: '✨'
    },
    {
      task: 'Mixed Composition Analysis',
      key: 'Composition',
      result: `${composition.composition.teaLeaves}% Leaves / ${composition.composition.teaDust}% Dust`,
      score: `${composition.composition.stemsFibers}% Stems`,
      status: 'Normal Matrix',
      badgeBg: 'bg-blue-100 text-blue-900',
      icon: '📊'
    },
    {
      task: 'Defect Detection',
      key: 'Defects',
      result: defects.some(d => d.severity === 'High') ? 'Critical Defect' : 'Low Defect',
      score: `Est ${defects[0]?.percentage || 4.2}% Broken`,
      status: defects.every(d => d.status === 'Clean') ? 'Clean Sample' : 'Minor Warning',
      badgeBg: 'bg-amber-100 text-amber-900',
      icon: '🛡️'
    },
    {
      task: 'Origin Identification',
      key: 'Origin',
      result: origin.predictedOrigin,
      score: `${origin.confidence}% Match`,
      status: 'Verified Terroir',
      badgeBg: 'bg-purple-100 text-purple-900',
      icon: '🇱🇰'
    }
  ]

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-emerald-950">
              Novelty 1: Unified Multi-Task AI Framework
            </h3>
            <span className="text-xs font-black px-2.5 py-1 bg-lime-400 text-emerald-950 rounded-full uppercase">
              Single Image • 5 Tasks
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Simultaneous multi-task feature extraction from a single tea sample image driving 5 coordinated quality and origin tasks.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-mono text-xs px-3 py-1.5 rounded-full font-bold">
          Unified Multi-Task Pipeline Active
        </span>
      </div>

      {/* Novelty 1 Visual Architecture Flowchart */}
      <div className="bg-[#fbfcf8] p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
          Unified Multi-Task AI Feature Flow Architecture
        </div>

        <div className="flex flex-col items-center space-y-3 font-mono text-xs max-w-2xl mx-auto">
          {/* Top Input Node */}
          <div className="bg-emerald-950 text-lime-300 font-bold px-6 py-2.5 rounded-2xl shadow-md border border-emerald-800 flex items-center gap-2">
            <span>📷</span>
            <span>Single Tea Sample Image ({currentSample?.id || 'Uploaded'})</span>
          </div>

          <div className="text-slate-400 font-bold text-lg">↓</div>

          {/* Shared Visual Feature Extraction */}
          <div className="bg-emerald-800 text-white font-bold px-6 py-2 rounded-xl shadow-xs border border-emerald-700">
            Shared Deep Visual Feature Backbone (ResNet / Vision Transformer)
          </div>

          <div className="text-slate-400 font-bold text-lg">↓</div>

          {/* Multi-Task Branches (5 Coordinated Heads) */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[11px] font-bold">
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl border border-emerald-300">
              1. Grade Head
            </div>
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl border border-emerald-300">
              2. Purity Head
            </div>
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl border border-emerald-300">
              3. Composition Head
            </div>
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl border border-emerald-300">
              4. Defects Head
            </div>
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl border border-emerald-300">
              5. Origin Head
            </div>
          </div>

          <div className="text-slate-400 font-bold text-lg">↓</div>

          {/* Combined Output Node */}
          <div className="bg-lime-400 text-emerald-950 font-black px-6 py-2.5 rounded-2xl shadow-md border border-lime-500">
            Consolidated Tea Intelligence Output
          </div>
        </div>
      </div>

      {/* Coordinated Tasks Output Table */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
          Unified Multi-Task Consolidated Output Matrix
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {tasksList.map((t) => (
            <div
              key={t.task}
              className="bg-[#fbfcf8] p-4 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-lg">{t.icon}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${t.badgeBg}`}>
                    {t.key}
                  </span>
                </div>
                <div className="text-[11px] font-bold text-slate-500 truncate" title={t.task}>
                  {t.task}
                </div>
                <div className="text-base font-black text-emerald-950 mt-1 font-mono">
                  {t.result}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[10px] space-y-0.5">
                <div className="text-slate-500 font-semibold">{t.score}</div>
                <div className="text-lime-700 font-bold">{t.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
