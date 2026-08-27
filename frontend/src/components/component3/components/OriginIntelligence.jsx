export default function OriginIntelligence({ originData, similarityData }) {
  if (!originData || !similarityData) return null

  const { predictedOrigin, confidence, breakdown } = originData
  const { sriLanka, india, kenya, highest, highestScore } = similarityData

  const simCards = [
    { country: 'Sri Lanka', flag: '🇱🇰', score: sriLanka, region: 'High/Medium/Low-grown Ceylon' },
    { country: 'India', flag: '🇮🇳', score: india, region: 'Assam & Darjeeling Terroir' },
    { country: 'Kenya', flag: '🇰🇪', score: kenya, region: 'Rift Valley High-Altitude CTC' }
  ]

  // SVG parameters for highest similarity score circular display
  const radius = 60
  const strokeWidth = 10
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (highestScore / 100) * circumference

  return (
    <div className="space-y-6">
      
      {/* Task 8: Tea Origin Identification */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-emerald-950">
                8. Tea Origin Identification
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
                Task 8
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Geographical origin classification strictly comparing Sri Lanka (🇱🇰), India (🇮🇳), and Kenya (🇰🇪) leaf attributes.
            </p>
          </div>
          <span className="bg-emerald-950 text-lime-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
            Supported: 🇱🇰 LK • 🇮🇳 IN • 🇰🇪 KE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Origin Prediction Badge */}
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-6 rounded-2xl border border-emerald-800 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] text-emerald-300 font-bold uppercase tracking-wider block">
                Predicted Origin
              </span>
              <div className="text-3xl font-black text-white my-2 flex items-center gap-3">
                <span>{predictedOrigin === 'Sri Lanka' ? '🇱🇰' : predictedOrigin === 'India' ? '🇮🇳' : '🇰🇪'}</span>
                <span className="text-lime-300">{predictedOrigin}</span>
              </div>
              <div className="inline-block bg-emerald-800/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 border border-emerald-700">
                Confidence: <b className="text-lime-400">{confidence}%</b>
              </div>
            </div>

            <div className="text-[11px] text-emerald-200/80 border-t border-emerald-800 pt-3">
              Spectrogram feature match confirms signature geographical marker alignment with {predictedOrigin} regional profile database.
            </div>
          </div>

          {/* Breakdown Cards across Sri Lanka, India, Kenya */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {breakdown.map((item) => {
              const isTop = item.country === predictedOrigin
              return (
                <div
                  key={item.country}
                  className={`p-5 rounded-2xl border transition flex flex-col justify-between space-y-3 ${
                    isTop
                      ? 'bg-lime-50/40 border-lime-400 shadow-md ring-2 ring-lime-400/50'
                      : 'bg-[#fbfcf8] border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.flag}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isTop ? 'bg-lime-400 text-emerald-950' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isTop ? 'Matched Top Origin' : 'Comparison'}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-emerald-950">{item.country}</div>
                    <div className="text-2xl font-black text-emerald-900 mt-1 font-mono">
                      {item.percentage}%
                    </div>
                  </div>

                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isTop ? 'bg-emerald-800' : 'bg-slate-400'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Task 9: Origin Similarity Score */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-emerald-950">
                9. Origin Similarity Score & Provenance Indication
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
                Task 9
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Quantitative similarity score matching uploaded sample against reference profiles from Sri Lanka, India, and Kenya.
            </p>
          </div>
        </div>

        {/* Highlight Score & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Large Circular Score Highlight (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-6 rounded-2xl border border-emerald-800 text-center flex flex-col items-center justify-center space-y-4 shadow-lg">
            <span className="text-[11px] font-bold text-lime-400 uppercase tracking-widest">
              Highest Similarity Match
            </span>

            {/* Circular Gauge */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="text-emerald-900 stroke-current"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
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
                <span className="text-3xl font-black text-white tracking-tight">{highestScore}%</span>
                <span className="block text-[11px] font-bold text-lime-300 mt-0.5">{highest}</span>
              </div>
            </div>

            <div className="bg-emerald-800/60 text-emerald-200 text-xs px-4 py-1.5 rounded-full border border-emerald-700 font-semibold">
              Visual Similarity-Based Provenance Indication
            </div>
          </div>

          {/* Three-Country Similarity Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Reference Profile Similarity Comparison
            </h4>

            {simCards.map((card) => {
              const isHighest = card.country === highest
              return (
                <div
                  key={card.country}
                  className={`p-4 rounded-2xl border transition flex items-center justify-between ${
                    isHighest
                      ? 'bg-lime-50/50 border-lime-400 shadow-sm'
                      : 'bg-[#fbfcf8] border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.flag}</span>
                    <div>
                      <div className="text-xs font-bold text-emerald-950">{card.country}</div>
                      <div className="text-[10px] text-slate-500">{card.region}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-lg font-black font-mono ${isHighest ? 'text-lime-700' : 'text-slate-800'}`}>
                      {card.score}%
                    </span>
                    <div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden mt-1 border border-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isHighest ? 'bg-lime-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${card.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Required Disclaimer Note */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-2">
          <span className="text-lime-700 font-bold">ℹ️ Note:</span>
          <span>
            Origin Similarity Score represents similarity to geographically labelled reference tea profiles and is intended as a provenance verification support mechanism.
          </span>
        </div>
      </section>

    </div>
  )
}
