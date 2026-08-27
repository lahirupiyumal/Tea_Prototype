import { useState } from 'react'

export default function DefectDetection({ defectsData, currentSample }) {
  const [showOverlays, setShowOverlays] = useState(true)

  if (!defectsData) return null

  // Hotspot overlay positions for prototype visualization
  const overlayHotspots = [
    { top: '35%', left: '42%', width: '18%', height: '16%', label: 'Broken leaves (4.2%)', color: 'border-amber-400 bg-amber-500/20' },
    { top: '60%', left: '55%', width: '14%', height: '14%', label: 'Stem Inclusion (2.1%)', color: 'border-yellow-400 bg-yellow-500/20' },
    { top: '25%', left: '65%', width: '10%', height: '10%', label: 'Minor Discoloration', color: 'border-blue-400 bg-blue-500/20' }
  ]

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-emerald-950">
              7. Tea Defect Detection & Overlay
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
              Task 7
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated visual scanning for broken leaf fragments, excessive fiber stems, foreign contaminants, discoloration, and mold-like visual anomalies.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
          Prototype AI Detection
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Defect Detection Table (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
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
                  className={`p-4 rounded-2xl border transition flex items-center justify-between ${
                    isWarning
                      ? 'bg-amber-50/70 border-amber-200'
                      : 'bg-[#fbfcf8] border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
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
                      className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase mb-1 ${
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

        {/* Right: Visual Defect Hotspot Overlay Image (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-300">Visual Defect Bounding Boxes</span>
            <button
              onClick={() => setShowOverlays(!showOverlays)}
              className="text-[11px] bg-emerald-800 hover:bg-emerald-700 text-lime-300 px-3 py-1 rounded-full font-bold transition"
            >
              {showOverlays ? 'Hide Hotspots' : 'Show Hotspots'}
            </button>
          </div>

          <div className="relative h-72 rounded-xl overflow-hidden bg-black border border-slate-800">
            <img
              src={currentSample?.previewUrl || currentSample?.imageUrl}
              alt="Defect Analysis Target"
              className="w-full h-full object-cover opacity-90"
            />

            {/* Hotspot Overlays */}
            {showOverlays &&
              overlayHotspots.map((hs, idx) => (
                <div
                  key={idx}
                  style={{ top: hs.top, left: hs.left, width: hs.width, height: hs.height }}
                  className={`absolute border-2 rounded-lg ${hs.color} shadow-lg transition-all animate-pulse`}
                >
                  <span className="absolute -top-5 left-0 bg-black/90 text-white font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/20 whitespace-nowrap">
                    {hs.label}
                  </span>
                </div>
              ))}

            <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-slate-300 text-[10px] px-2 py-1 rounded">
              Spatial Detection Overlay: {showOverlays ? 'Active' : 'Disabled'}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            Note: Prototype AI Detection highlighted bounding regions represent simulated computer vision bounding coordinates.
          </p>
        </div>
      </div>
    </section>
  )
}
