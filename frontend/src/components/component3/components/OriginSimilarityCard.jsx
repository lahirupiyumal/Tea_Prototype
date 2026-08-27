import { useState } from 'react'

export default function OriginSimilarityCard({ similarityData }) {
  const [showCalculationDetails, setShowCalculationDetails] = useState(false)

  if (!similarityData) return null

  const { sriLanka, india, highest, highestScore } = similarityData

  const countryRanking = [
    { rank: 1, country: 'Sri Lanka', flag: '🇱🇰', score: sriLanka, region: 'Nuwara Eliya / High-Grown Ceylon' },
    { rank: 2, country: 'India', flag: '🇮🇳', score: india, region: 'Assam & Darjeeling Terroir' }
  ].sort((a, b) => b.score - a.score)

  countryRanking.forEach((item, idx) => {
    item.rank = idx + 1
  })

  // Circular gauge SVG parameters
  const radius = 64
  const strokeWidth = 10
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (highestScore / 100) * circumference

  const conceptualFeatures = [
    'Leaf Appearance',
    'Color & Chromatic Scale',
    'Leaf Morphology & Curvature',
    'Particle Granular Structure',
    'Mixed Matrix Composition',
    'Defect Pattern Characteristics',
    'Deep Convolutional Visual Features'
  ]

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-emerald-950">
              Novelty 3: Origin Similarity Score for Provenance Verification
            </h3>
            <span className="text-xs font-black px-2.5 py-1 bg-lime-400 text-emerald-950 rounded-full uppercase">
              Provenance Support
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Quantitative visual similarity score matching submitted sample against geographically verified tea profiles.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-mono text-xs px-3 py-1 rounded-full font-bold self-start sm:self-auto">
          Provenance Support System
        </span>
      </div>

      {/* Main Grid: Large Circular Score & Country Ranking */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left: Large Circular Score Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white p-8 rounded-3xl border border-emerald-800 shadow-xl text-center flex flex-col items-center justify-center space-y-4">
          <span className="text-[11px] font-bold text-lime-400 uppercase tracking-widest">
            Highest Similarity Score
          </span>

          <div className="text-2xl font-black text-white flex items-center justify-center gap-2">
            <span>Highest Similarity:</span>
            <span className="text-lime-300">{highest} — {highestScore}%</span>
          </div>

          {/* SVG Circular Gauge */}
          <div className="relative w-48 h-48 flex items-center justify-center my-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 170 170">
              <circle
                cx="85"
                cy="85"
                r={radius}
                className="text-emerald-900/80 stroke-current"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <circle
                cx="85"
                cy="85"
                r={radius}
                className="text-lime-400 stroke-current transition-all duration-1000 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-black text-white tracking-tight">{highestScore}%</span>
              <span className="block text-xs font-bold text-lime-300 mt-1">{highest}</span>
            </div>
          </div>

          <div className="bg-lime-400 text-emerald-950 px-4 py-1.5 rounded-full text-xs font-black shadow-md">
            {highestScore}% — High Visual Similarity
          </div>

          <div className="text-xs font-bold text-emerald-200 bg-emerald-900/80 px-4 py-1.5 rounded-full border border-emerald-700">
            Potential Provenance Match: <span className="text-lime-300 font-extrabold">{highest}</span>
          </div>
        </div>

        {/* Right: Country Ranking & Similarity Bars (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Origin Country Similarity Ranking
          </h4>

          <div className="space-y-3">
            {countryRanking.map((item) => {
              const isMatch = item.country === highest
              return (
                <div
                  key={item.country}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isMatch
                      ? 'bg-lime-50/60 border-lime-400 shadow-md ring-2 ring-lime-400/40'
                      : 'bg-[#fbfcf8] border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-xs font-black text-slate-400 font-mono">#{item.rank}</span>
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <div className="text-xs font-bold text-emerald-950">{item.country}</div>
                      <div className="text-[10px] text-slate-500">{item.region}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-lg font-black font-mono ${isMatch ? 'text-lime-700' : 'text-slate-800'}`}>
                      {item.score}%
                    </span>
                    <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden mt-1 border border-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isMatch ? 'bg-gradient-to-r from-emerald-700 to-lime-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mandatory Provenance Explanations */}
          <div className="space-y-2 pt-2">
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-medium">
              "Origin Similarity Score estimates the visual similarity between the submitted tea sample and geographically labelled reference tea profiles."
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
              <span>⚠️</span>
              <span>Prototype provenance support — not independent geographical proof.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section: How is Origin Similarity calculated? */}
      <div className="border-t border-slate-100 pt-4">
        <button
          onClick={() => setShowCalculationDetails(!showCalculationDetails)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 text-emerald-950 rounded-2xl font-bold text-xs transition border border-slate-200"
        >
          <span className="flex items-center gap-2">
            <span className="text-lime-600">⚙️</span> How is Origin Similarity calculated?
          </span>
          <span className="text-slate-400 font-bold">{showCalculationDetails ? '▲ Hide' : '▼ Expand Conceptual Flow'}</span>
        </button>

        {showCalculationDetails && (
          <div className="mt-4 p-6 bg-[#fbfcf8] rounded-2xl border border-slate-200 space-y-6">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
              Origin Similarity Calculation Pipeline
            </div>

            {/* Conceptual Flow Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-center">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold">
                Tea Image
              </div>
              <span className="text-slate-400 font-bold">→</span>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold">
                Visual Feature Extraction
              </div>
              <span className="text-slate-400 font-bold">→</span>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold">
                Reference Origin Profiles
              </div>
              <span className="text-slate-400 font-bold">→</span>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold">
                Feature Similarity Comparison
              </div>
              <span className="text-slate-400 font-bold">→</span>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold">
                Weighted Similarity Score
              </div>
              <span className="text-slate-400 font-bold">→</span>
              <div className="bg-emerald-950 text-lime-300 p-2.5 rounded-xl font-bold shadow-md">
                Origin Similarity Score
              </div>
            </div>

            {/* Conceptual Features Evaluated */}
            <div>
              <div className="text-xs font-bold text-emerald-950 mb-2">
                Conceptual Features Evaluated in Vector Distance Calculation:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {conceptualFeatures.map((feat) => (
                  <span
                    key={feat}
                    className="bg-white text-emerald-900 px-3 py-1 rounded-full border border-emerald-200 font-medium"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
