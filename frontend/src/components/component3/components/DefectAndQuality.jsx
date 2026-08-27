import { useState } from 'react'

export default function DefectAndQuality({ defectsData, qualityData, currentSample }) {
  const [showOverlays, setShowOverlays] = useState(true)

  if (!defectsData || !qualityData) return null

  const { score, category, interpretation } = qualityData

  // Color mapping based on category
  const categoryConfig = {
    Excellent: { bg: 'bg-emerald-950', badge: 'bg-lime-400 text-emerald-950', border: 'border-lime-500', glow: 'shadow-lime-500/20' },
    Good: { bg: 'bg-emerald-900', badge: 'bg-emerald-200 text-emerald-950', border: 'border-emerald-400', glow: 'shadow-emerald-500/20' },
    Moderate: { bg: 'bg-amber-900', badge: 'bg-amber-200 text-amber-950', border: 'border-amber-400', glow: 'shadow-amber-500/20' },
    Low: { bg: 'bg-rose-950', badge: 'bg-rose-200 text-rose-950', border: 'border-rose-400', glow: 'shadow-rose-500/20' }
  }

  const config = categoryConfig[category] || categoryConfig.Good

  // Hotspot overlay positions for prototype visualization
  const overlayHotspots = [
    { top: '35%', left: '42%', width: '18%', height: '16%', label: 'Broken leaves (4.2%)', color: 'border-amber-400 bg-amber-500/20' },
    { top: '60%', left: '55%', width: '14%', height: '14%', label: 'Stem Inclusion (2.1%)', color: 'border-yellow-400 bg-yellow-500/20' },
    { top: '25%', left: '65%', width: '10%', height: '10%', label: 'Minor Discoloration', color: 'border-blue-400 bg-blue-500/20' }
  ]

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-8">
      {/* Unified Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-emerald-950">
              5. Overall Quality Index & Defect Detection
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
              Tasks 7 & 11
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Aggregated multi-factor quality index scoring alongside real-time visual anomaly scanning for broken fragments, excessive fiber stems, and contaminants.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
          AI Diagnostic Suite
        </span>
      </div>

      {/* Row 1: Overall Quality Index (OQI) */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest">
          Part 1: Overall Quality Index (OQI)
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Score Card */}
          <div className={`${config.bg} text-white p-6 rounded-2xl border ${config.border} shadow-lg ${config.glow} flex flex-col justify-between space-y-4 lg:col-span-5`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                  OQI Score
                </span>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${config.badge}`}>
                  {category}
                </span>
              </div>
              <div className="my-4">
                <div className="text-5xl font-black tracking-tight text-white font-mono flex items-baseline gap-1.5">
                  <span>{score}</span>
                  <span className="text-xl font-normal text-emerald-300/80">/ 100</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 pt-3 border-t border-white/10 text-[11px] text-emerald-100/80">
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

          {/* Right: Weighted Components Breakdown */}
          <div className="lg:col-span-7 bg-[#fbfcf8] p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-4">
            <div>
              <h5 className="text-[10px] font-bold text-emerald-950 uppercase tracking-wider mb-3">
                Weighted Index Factor Contribution
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[9px]">Tea Grade (25%)</span>
                  <span className="font-bold text-emerald-950">92.4 %</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[9px]">Purity (25%)</span>
                  <span className="font-bold text-emerald-950">94.6 %</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[9px]">Composition (20%)</span>
                  <span className="font-bold text-emerald-950">88.0 %</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[9px]">Defect Control (15%)</span>
                  <span className="font-bold text-emerald-950">94.0 %</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs col-span-2 sm:col-span-2">
                  <span className="text-slate-400 block text-[9px]">Origin Match (15%)</span>
                  <span className="font-bold text-emerald-950">86.0 %</span>
                </div>
              </div>
            </div>
            {/* AI Quality Interpretation Summary */}
            <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60">
              <div className="text-[11px] font-bold text-emerald-950 flex items-center gap-1.5 mb-0.5">
                <span>🤖</span> AI Quality Interpretation Summary
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                {interpretation}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Row 2: Tea Defect Detection & Overlay */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest">
          Part 2: Tea Defect Detection & Overlay
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Table */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2">
              <span>Defect Anomaly Category</span>
              <span>Severity / Est %</span>
            </div>
            <div className="space-y-2">
              {defectsData.map((defect) => {
                const isClean = defect.status === 'Clean'
                const isWarning = defect.severity === 'Medium' || defect.severity === 'High'

                return (
                  <div
                    key={defect.type}
                    className={`p-3.5 rounded-xl border transition flex items-center justify-between ${
                      isWarning
                        ? 'bg-amber-50/70 border-amber-200'
                        : 'bg-[#fbfcf8] border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isClean
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {isClean ? '✓' : '⚠️'}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-950">{defect.type}</div>
                        <div className="text-[10px] text-slate-500">
                          Status: <span className="font-semibold">{defect.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full uppercase mb-0.5 ${
                          defect.severity === 'High'
                            ? 'bg-rose-100 text-rose-800'
                            : defect.severity === 'Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {defect.severity}
                      </span>
                      <div className="text-xs font-mono font-bold text-slate-800">
                        {defect.percentage}%
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image Hotspot Overlay */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-300">Visual Defect Bounding Boxes</span>
              <button
                onClick={() => setShowOverlays(!showOverlays)}
                className="text-[10px] bg-emerald-800 hover:bg-emerald-700 text-lime-300 px-2.5 py-0.5 rounded-full font-bold transition"
              >
                {showOverlays ? 'Hide Hotspots' : 'Show Hotspots'}
              </button>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden bg-black border border-slate-800">
              <img
                src={currentSample?.previewUrl || currentSample?.imageUrl}
                alt="Defect Analysis Target"
                className="w-full h-full object-cover opacity-90"
              />

              {showOverlays &&
                overlayHotspots.map((hs, idx) => (
                  <div
                    key={idx}
                    style={{ top: hs.top, left: hs.left, width: hs.width, height: hs.height }}
                    className={`absolute border-2 rounded-lg ${hs.color} shadow-lg transition-all animate-pulse`}
                  >
                    <span className="absolute -top-5 left-0 bg-black/90 text-white font-mono text-[8px] px-1.5 py-0.5 rounded border border-white/20 whitespace-nowrap">
                      {hs.label}
                    </span>
                  </div>
                ))}

              <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-slate-300 text-[9px] px-2 py-0.5 rounded">
                Spatial Detection Overlay: {showOverlays ? 'Active' : 'Disabled'}
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic leading-relaxed">
              Note: Prototype AI Detection highlighted bounding regions represent simulated computer vision bounding coordinates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
