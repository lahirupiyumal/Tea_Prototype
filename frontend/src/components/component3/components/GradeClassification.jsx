import { useRef } from 'react'

export default function GradeClassification({ gradeData, currentSample, onUploadImage }) {
  const fileInputRef = useRef(null)

  if (!gradeData) return null

  const { predictedGrade, confidence, top3, explanation } = gradeData

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-emerald-950">
              4. Tea Grade Classification
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
              Task 4
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Morphological leaf particle size & shape classification across OP, BOP, BOPF, FBOP, Pekoe, and Dust standards.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
          Prototype AI Prediction
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ingested Tea Sample Image Card (styled like the upload area) */}
        <div className="border-2 border-dashed border-emerald-200 bg-[#fbfcf8]/40 rounded-2xl p-5 flex flex-col justify-between min-h-[280px]">
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-2">
              Ingested Leaf Particles
            </span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file && onUploadImage) {
                  onUploadImage(file)
                }
              }}
              accept="image/*"
              className="hidden"
            />
            {currentSample?.previewUrl || currentSample?.imageUrl ? (
              <div
                className="group relative aspect-video w-full rounded-xl overflow-hidden shadow-md border border-emerald-100 mb-3 bg-slate-50 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Click to upload custom image"
              >
                <img
                  src={currentSample.previewUrl || currentSample.imageUrl}
                  alt="Analyzed leaf particles"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-emerald-950/80 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full font-medium z-10">
                  {currentSample.flag || '📷'} {currentSample.country || 'Custom'}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-sm text-emerald-950 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Upload Custom Image
                  </span>
                </div>
              </div>
            ) : (
              <div
                className="aspect-video w-full rounded-xl border border-dashed border-emerald-200 flex flex-col items-center justify-center bg-slate-50 text-slate-400 mb-3 cursor-pointer hover:bg-slate-100/80 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <span className="text-2xl">📷</span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Upload Custom Image</span>
              </div>
            )}
          </div>

          {currentSample ? (
            <div className="space-y-1 pt-2 border-t border-emerald-100 flex items-center justify-between gap-2">
              <div className="truncate flex-1">
                <div className="text-xs font-bold text-emerald-950 truncate" title={currentSample.name}>
                  {currentSample.name}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  ID: {currentSample.id} • {currentSample.category}
                </div>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="shrink-0 p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg transition-colors border border-emerald-100 shadow-sm"
                title="Upload custom image"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              className="text-center text-[10px] text-slate-400 italic cursor-pointer hover:text-emerald-700"
              onClick={() => fileInputRef.current?.click()}
            >
              Click here to upload custom sample.
            </div>
          )}
        </div>

        {/* Main Prediction Card */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white rounded-2xl p-6 flex flex-col justify-between space-y-4 border border-emerald-800 shadow-md">
          <div>
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
              Predicted Tea Grade
            </span>
            <div className="text-5xl font-black text-lime-300 tracking-tight my-2">
              {predictedGrade}
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-800/60 px-3 py-1 rounded-full text-xs text-emerald-200 border border-emerald-700">
              <span>Model Confidence:</span>
              <span className="font-bold text-lime-400">{confidence}%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-800/70">
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              Grade Taxonomy Standard
            </span>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              {predictedGrade === 'BOP' && 'Broken Orange Pekoe: Well-broken, uneven leaf particles without stem excess.'}
              {predictedGrade === 'BOPF' && 'Broken Orange Pekoe Fannings: Smaller uniform broken leaf particles ideal for quick infusion.'}
              {predictedGrade === 'OP' && 'Orange Pekoe: Whole, tightly rolled long wiry leaf structure with rich tips.'}
              {predictedGrade === 'FBOP' && 'Flowery Broken Orange Pekoe: Coarser broken leaf with visible silvery tip inclusions.'}
              {predictedGrade === 'Pekoe' && 'Pekoe: Shorter, curled leaf particles coarser than BOP.'}
              {predictedGrade === 'Dust' && 'Dust: Fine granular tea particles presenting dense liquor extraction.'}
            </p>
          </div>
        </div>

        {/* Top 3 Predictions & Confidence Bars */}
        <div className="bg-[#fbfcf8] p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-4">
              Top 3 Model Probabilities
            </h4>
            <div className="space-y-3">
              {top3.map((item, idx) => (
                <div key={item.grade} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-emerald-950 flex items-center gap-2">
                      <span className="w-5 text-slate-400 text-[10px]">#{idx + 1}</span>
                      <span className="font-mono text-sm">{item.grade}</span>
                    </span>
                    <span className="text-lime-700 font-mono">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        idx === 0
                          ? 'bg-gradient-to-r from-emerald-700 to-lime-500'
                          : idx === 1
                          ? 'bg-emerald-600/70'
                          : 'bg-emerald-400/50'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Morphological Explanation */}
      <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80 flex items-start gap-3">
        <span className="text-lg">💡</span>
        <div>
          <div className="text-xs font-bold text-emerald-950">AI Morphological Insight</div>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{explanation}</p>
        </div>
      </div>
    </section>
  )
}
