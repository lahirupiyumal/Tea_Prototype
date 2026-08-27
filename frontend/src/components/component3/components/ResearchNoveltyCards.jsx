export default function ResearchNoveltyCards({ similarityData, qualityData }) {
  const highestOrigin = similarityData?.highest || 'Sri Lanka'
  const highestScore = similarityData?.highestScore || 91.4
  const oqiScore = qualityData?.score || 87.8

  const noveltyCards = [
    {
      num: '01',
      title: 'Unified Multi-Task AI Framework',
      desc: 'Multiple tea quality and origin intelligence tasks are performed from a unified tea image analysis pipeline.',
      icon: '⚙️',
      metric: '5 Coordinated Tasks',
      tag: 'Multi-Task Vision'
    },
    {
      num: '02',
      title: 'Cross-Origin Tea Benchmarking',
      desc: 'Tea samples are comparatively evaluated against reference profiles from Sri Lanka, India and Kenya.',
      icon: '🌐',
      metric: '3 Country Terroirs',
      tag: 'LK • IN • KE'
    },
    {
      num: '03',
      title: 'Origin Similarity Score',
      desc: 'A visual similarity-based score provides provenance verification support by comparing samples with geographically labelled tea profiles.',
      icon: '🎯',
      metric: `${highestScore}% Provenance Match`,
      tag: highestOrigin
    },
    {
      num: '04',
      title: 'Explainable AI',
      desc: 'Grad-CAM++ provides visual explanations for the regions influencing tea quality and origin predictions.',
      icon: '👁️',
      metric: 'Grad-CAM++ Attribution',
      tag: 'Model Transparency'
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-lime-400 text-emerald-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Research Innovation
            </span>
            <span className="text-xs font-bold text-emerald-800">4 Core Novelty Contributions</span>
          </div>
          <h3 className="text-2xl font-black text-emerald-950 tracking-tight mt-1">
            Research Novelty & System Architecture
          </h3>
        </div>
        <div className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
          Prototype Demonstration Engine
        </div>
      </div>

      {/* 4 Novelty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {noveltyCards.map((card) => (
          <div
            key={card.num}
            className="group bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-lime-300/20 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-black text-emerald-950 font-mono tracking-tighter">
                  {card.num}
                </span>
                <span className="text-xl p-2 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100">
                  {card.icon}
                </span>
              </div>

              <h4 className="text-sm font-bold text-emerald-950 leading-snug group-hover:text-lime-700 transition">
                {card.title}
              </h4>
              
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-900 font-mono">
                {card.metric}
              </span>
              <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                {card.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
