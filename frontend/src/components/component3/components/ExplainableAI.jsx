import { useState } from 'react'
import { generateGradCAM } from '../utils/prototypeEngine'

export default function ExplainableAI({ currentSample }) {
  const [selectedFeature, setSelectedFeature] = useState('Tea Grade') // 'Tea Grade' | 'Overall Quality' | 'Tea Origin'
  const [viewMode, setViewMode] = useState('Overlay')

  const gradCamData = generateGradCAM(currentSample, selectedFeature)

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-emerald-950">
              Novelty 4: Explainable AI — Grad-CAM++
            </h3>
            <span className="text-xs font-black px-2.5 py-1 bg-lime-400 text-emerald-950 rounded-full uppercase">
              XAI Attribution
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Visual explainability maps highlighting deep neural feature attribution regions for model transparency.
          </p>
        </div>
        <span className="bg-emerald-950 text-lime-400 font-mono text-xs px-3.5 py-1.5 rounded-full font-bold self-start sm:self-auto">
          Prototype Grad-CAM++ Visualization
        </span>
      </div>

      {/* Target Selector Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-700">Explain Prediction:</span>
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
            {['Tea Grade', 'Overall Quality', 'Tea Origin'].map((target) => (
              <button
                key={target}
                onClick={() => setSelectedFeature(target)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedFeature === target
                    ? 'bg-emerald-950 text-lime-300 shadow-sm'
                    : 'text-slate-600 hover:text-emerald-950'
                }`}
              >
                [ {target} ]
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700">View Panel Mode:</span>
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
            {['Original', 'Heatmap', 'Overlay'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  viewMode === mode
                    ? 'bg-lime-400 text-emerald-950 shadow-sm'
                    : 'text-slate-600 hover:text-emerald-950'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Three Panel View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel 1: Original Tea Sample */}
        <div className={`p-4 rounded-2xl border transition ${
          viewMode === 'Original' ? 'ring-2 ring-lime-400 bg-lime-50/20 border-lime-300' : 'bg-[#fbfcf8] border-slate-200'
        }`}>
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-700">
            <span>1. Original Tea Sample</span>
            <span className="text-[10px] text-slate-400">Input Image</span>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-300">
            <img
              src={currentSample?.previewUrl || currentSample?.imageUrl}
              alt="Original Tea Sample"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Panel 2: Grad-CAM++ Heatmap */}
        <div className={`p-4 rounded-2xl border transition ${
          viewMode === 'Heatmap' ? 'ring-2 ring-lime-400 bg-lime-50/20 border-lime-300' : 'bg-[#fbfcf8] border-slate-200'
        }`}>
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-700">
            <span>2. Grad-CAM++ Heatmap</span>
            <span className="text-[10px] font-mono text-emerald-700">Target: {selectedFeature}</span>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-950">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="xaiGrad1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="xaiGrad2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#84cc16" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {gradCamData.hotspots.map((hs, idx) => (
                  <circle
                    key={idx}
                    cx={hs.x}
                    cy={hs.y}
                    r={hs.radius}
                    fill={idx === 0 ? 'url(#xaiGrad1)' : 'url(#xaiGrad2)'}
                  />
                ))}
              </svg>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/80 text-lime-400 font-mono text-[9px] px-2 py-0.5 rounded border border-lime-400/30">
              High Feature Sensitivity (Red)
            </div>
          </div>
        </div>

        {/* Panel 3: Grad-CAM++ Overlay */}
        <div className={`p-4 rounded-2xl border transition ${
          viewMode === 'Overlay' ? 'ring-2 ring-lime-400 bg-lime-50/20 border-lime-300' : 'bg-[#fbfcf8] border-slate-200'
        }`}>
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-emerald-950">
            <span>3. Grad-CAM++ Overlay</span>
            <span className="text-[10px] bg-emerald-950 text-white px-2 py-0.5 rounded">Combined</span>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-emerald-400">
            <img
              src={currentSample?.previewUrl || currentSample?.imageUrl}
              alt="Base Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="xaiOverlay1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {gradCamData.hotspots.map((hs, idx) => (
                  <circle
                    key={idx}
                    cx={hs.x}
                    cy={hs.y}
                    r={hs.radius}
                    fill="url(#xaiOverlay1)"
                  />
                ))}
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 bg-emerald-950/90 text-white font-mono text-[9px] px-2 py-0.5 rounded">
              Target: {selectedFeature}
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Display Quote */}
      <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-xs text-emerald-950 font-semibold flex items-center gap-2">
        <span className="text-lime-700 text-lg">✦</span>
        <span>Highlighted regions indicate visual areas that contribute strongly to the selected prediction.</span>
      </div>

      {/* Information Card: Why Explainable AI? */}
      <div className="bg-[#fbfcf8] p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 uppercase tracking-wider">
          <span>💡</span> Why Explainable AI?
        </div>
        <p className="text-xs text-slate-700 leading-relaxed font-serif text-sm">
          "Grad-CAM++ improves model transparency by allowing researchers to visually inspect the image regions that influence AI predictions."
        </p>

        {/* Transparency Diagram */}
        <div className="pt-2">
          <div className="text-[11px] font-bold text-slate-500 mb-2">Model Transparency Workflow:</div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-bold text-emerald-950">
              AI Prediction
            </div>
            <span className="text-slate-400 font-bold">→</span>
            <div className="bg-lime-100 text-lime-950 p-2.5 rounded-xl border border-lime-300 font-bold">
              Important Image Regions
            </div>
            <span className="text-slate-400 font-bold">→</span>
            <div className="bg-emerald-950 text-white p-2.5 rounded-xl font-bold shadow-md">
              Human Interpretation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
