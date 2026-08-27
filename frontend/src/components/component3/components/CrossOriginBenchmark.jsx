import { useState } from 'react'

export default function CrossOriginBenchmark({ benchmarkData, currentSample, similarityData }) {
  const [selectedMetric, setSelectedMetric] = useState('overall')

  if (!benchmarkData) return null

  const { current, sriLanka, india, kenya } = benchmarkData
  const highestOrigin = similarityData?.highest || 'Sri Lanka'

  const metricsList = [
    { key: 'grade', label: 'Grade Characteristics' },
    { key: 'purity', label: 'Purity Score' },
    { key: 'composition', label: 'Composition Match' },
    { key: 'defectScore', label: 'Defect Control Score' },
    { key: 'similarity', label: 'Origin Similarity' },
    { key: 'overall', label: 'Overall Quality' }
  ]

  // SVG Radar Chart Data
  const radarMetrics = [
    { name: 'Grade', current: current.grade, sl: sriLanka.grade, in: india.grade, ke: kenya.grade },
    { name: 'Purity', current: current.purity, sl: sriLanka.purity, in: india.purity, ke: kenya.purity },
    { name: 'Composition', current: current.composition, sl: sriLanka.composition, in: india.composition, ke: kenya.composition },
    { name: 'Defects', current: current.defectScore, sl: sriLanka.defectScore, in: india.defectScore, ke: kenya.defectScore },
    { name: 'Similarity', current: current.similarity, sl: sriLanka.similarity, in: india.similarity, ke: kenya.similarity },
    { name: 'Overall', current: current.overall, sl: sriLanka.overall, in: india.overall, ke: kenya.overall }
  ]

  // Generate SVG Polygon Points for Radar Chart
  const centerX = 160
  const centerY = 160
  const maxRadius = 110
  const numAxes = radarMetrics.length

  const getCoordinates = (value, index) => {
    const angle = (Math.PI * 2 / numAxes) * index - Math.PI / 2
    const r = (value / 100) * maxRadius
    const x = centerX + r * Math.cos(angle)
    const y = centerY + r * Math.sin(angle)
    return { x, y }
  }

  const makePath = (key) => {
    return radarMetrics.map((m, idx) => {
      const coords = getCoordinates(m[key], idx)
      return `${coords.x},${coords.y}`
    }).join(' ')
  }

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-emerald-950">
              Novelty 2: Cross-Origin Tea Benchmarking
            </h3>
            <span className="text-xs font-black px-2.5 py-1 bg-lime-400 text-emerald-950 rounded-full uppercase">
              LK • IN • KE Comparison
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Comparative benchmarking of uploaded tea sample against reference profiles from Sri Lanka, India, and Kenya.
          </p>
        </div>
        <div className="bg-emerald-950 text-white font-mono text-xs px-3.5 py-1.5 rounded-full font-bold self-start sm:self-auto">
          Current Sample VS Sri Lanka • India • Kenya References
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: SVG Radar Chart (6 cols) */}
        <div className="lg:col-span-6 bg-[#fbfcf8] p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center space-y-4">
          <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider text-center flex items-center gap-2">
            <span>🌐</span> Multi-Country Terroir Radar Chart
          </div>

          <div className="relative w-full max-w-xs h-72 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 320 320">
              {/* Concentric grid rings */}
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((level) => {
                const ringPoints = radarMetrics.map((_, idx) => {
                  const coords = getCoordinates(level * 100, idx)
                  return `${coords.x},${coords.y}`
                }).join(' ')
                return (
                  <polygon
                    key={level}
                    points={ringPoints}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray={level === 1.0 ? 'none' : '3 3'}
                  />
                )
              })}

              {/* Axis lines and Labels */}
              {radarMetrics.map((m, idx) => {
                const outer = getCoordinates(100, idx)
                const labelPos = getCoordinates(118, idx)
                return (
                  <g key={m.name}>
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={outer.x}
                      y2={outer.y}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-[10px] font-bold fill-slate-600"
                    >
                      {m.name}
                    </text>
                  </g>
                )
              })}

              {/* Polygons */}
              <polygon
                points={makePath('sl')}
                fill="rgba(16, 185, 129, 0.15)"
                stroke="#10b981"
                strokeWidth="2"
              />
              <polygon
                points={makePath('in')}
                fill="rgba(245, 158, 11, 0.1)"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon
                points={makePath('ke')}
                fill="rgba(59, 130, 246, 0.1)"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon
                points={makePath('current')}
                fill="rgba(132, 204, 22, 0.35)"
                stroke="#84cc16"
                strokeWidth="3"
              />
            </svg>
          </div>

          {/* Radar Chart Legend */}
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-bold pt-2">
            <div className="flex items-center gap-1.5 bg-lime-100 text-lime-950 px-2.5 py-1 rounded-full border border-lime-300">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span>
              <span>Current Sample</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>🇱🇰 Sri Lanka Ref</span>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-2 py-0.5 rounded-full border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>🇮🇳 India Ref</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-50 text-blue-900 px-2 py-0.5 rounded-full border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>🇰🇪 Kenya Ref</span>
            </div>
          </div>
        </div>

        {/* Right: Detailed Metric Comparative Bars (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Dimension Comparative Metric
            </h4>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="text-xs font-bold bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700"
            >
              {metricsList.map(m => (
                <option key={m.key} value={m.key}>{m.label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            {/* Current Sample Bar */}
            <div className="bg-lime-50 p-4 rounded-2xl border border-lime-400 space-y-1.5 shadow-xs">
              <div className="flex justify-between text-xs font-bold text-emerald-950">
                <span className="flex items-center gap-1.5">
                  <span className="text-lime-700">★</span> Current Uploaded Sample
                </span>
                <span className="font-mono text-lime-700 text-sm">{current[selectedMetric]} / 100</span>
              </div>
              <div className="w-full h-3 bg-lime-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-800 to-lime-500 rounded-full transition-all duration-700"
                  style={{ width: `${current[selectedMetric]}%` }}
                />
              </div>
            </div>

            {/* Sri Lanka Reference Bar */}
            <div className="bg-[#fbfcf8] p-3.5 rounded-xl border border-slate-200 space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>🇱🇰 Sri Lanka Reference Profile</span>
                <span className="font-mono font-bold text-slate-900">{sriLanka[selectedMetric]}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-700"
                  style={{ width: `${sriLanka[selectedMetric]}%` }}
                />
              </div>
            </div>

            {/* India Reference Bar */}
            <div className="bg-[#fbfcf8] p-3.5 rounded-xl border border-slate-200 space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>🇮🇳 India Reference Profile</span>
                <span className="font-mono font-bold text-slate-900">{india[selectedMetric]}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-700"
                  style={{ width: `${india[selectedMetric]}%` }}
                />
              </div>
            </div>

            {/* Kenya Reference Bar */}
            <div className="bg-[#fbfcf8] p-3.5 rounded-xl border border-slate-200 space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>🇰🇪 Kenya Reference Profile</span>
                <span className="font-mono font-bold text-slate-900">{kenya[selectedMetric]}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${kenya[selectedMetric]}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Research Interpretation Quote */}
      <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-xs text-emerald-950 font-serif text-sm">
        <b>Research Interpretation:</b> "The current tea sample demonstrates the strongest visual and quality similarity to the Sri Lankan reference profile."
      </div>
    </section>
  )
}
