import { useState, useEffect } from 'react'

export default function PreprocessingSection({ currentSample, isAnalyzing }) {
  const [pipelineStep, setPipelineStep] = useState('Ready')

  useEffect(() => {
    if (isAnalyzing) {
      const steps = ['Loading', 'Resizing', 'Normalizing', 'Enhancing', 'Ready']
      let currentIdx = 0

      const interval = setInterval(() => {
        currentIdx++
        if (currentIdx < steps.length) {
          setPipelineStep(steps[currentIdx])
        } else {
          clearInterval(interval)
        }
      }, 500)

      return () => clearInterval(interval)
    } else {
      setPipelineStep('Ready')
    }
  }, [isAnalyzing])

  const stepsList = [
    { name: 'Loading', label: 'Image Ingestion', desc: 'Decoding raw file stream' },
    { name: 'Resizing', label: 'Resize', desc: '512 × 512 px matrix' },
    { name: 'Normalizing', label: 'Normalization', desc: 'RGB scaling [0, 1]' },
    { name: 'Enhancing', label: 'Image Enhancement', desc: 'Contrast & CLAHE filter' },
    { name: 'Ready', label: 'AI Ready', desc: 'Feature extraction ready' }
  ]

  const getStepIndex = (step) => stepsList.findIndex(s => s.name === step)
  const activeIdx = getStepIndex(pipelineStep)

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
      {/* Header & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-emerald-950">
              3. Image Preprocessing Pipeline
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-lime-100 text-lime-900 rounded-full">
              Task 3
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Standardizes raw camera input into normalized 512×512 feature matrices for visual analysis.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400">Status:</span>
          <span className="bg-emerald-100 text-emerald-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Prototype Image Preprocessing
          </span>
        </div>
      </div>

      {/* Visual Pipeline Progress Bar */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-4">
        <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center justify-between">
          <span>Processing Pipeline State</span>
          <span className="text-lime-700 font-mono font-bold">
            {isAnalyzing ? `State: ${pipelineStep}...` : 'Status: AI Ready'}
          </span>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
          {stepsList.map((step, idx) => {
            const isPassed = activeIdx >= idx
            const isCurrent = activeIdx === idx && isAnalyzing

            return (
              <div
                key={step.name}
                className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                  isCurrent
                    ? 'bg-lime-400 border-lime-500 text-emerald-950 shadow-md scale-105 animate-pulse'
                    : isPassed
                    ? 'bg-emerald-950 border-emerald-900 text-white'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                <div className="text-[10px] font-bold tracking-widest uppercase mb-1">
                  Step 0{idx + 1}
                </div>
                <div className="text-xs font-black truncate">{step.label}</div>
                <div className={`text-[9px] mt-0.5 truncate ${isCurrent ? 'text-emerald-950' : isPassed ? 'text-emerald-300' : 'text-slate-400'}`}>
                  {step.desc}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Side-by-Side Image Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original Image */}
        <div className="bg-[#fbfcf8] p-5 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">1. Original Input Image</span>
            <span className="text-[11px] font-mono bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded">
              Resolution: 3024 × 4032 px
            </span>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 flex items-center justify-center">
            {currentSample?.imageUrl || currentSample?.previewUrl ? (
              <img
                src={currentSample.previewUrl || currentSample.imageUrl}
                alt="Original Tea Sample"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-slate-500 text-xs">No Sample Selected</div>
            )}
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded">
              Format: RGB • Raw Uncompressed
            </div>
          </div>
        </div>

        {/* Processed Image */}
        <div className="bg-[#fbfcf8] p-5 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-950">2. Processed & Enhanced Matrix</span>
            <span className="text-[11px] font-mono bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">
              Resolution: 512 × 512 px
            </span>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-emerald-300 flex items-center justify-center">
            {currentSample?.imageUrl || currentSample?.previewUrl ? (
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={currentSample.previewUrl || currentSample.imageUrl}
                  alt="Processed Tea Sample"
                  className="w-full h-full object-cover contrast-125 saturate-110 filter"
                />
                <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-emerald-950/90 text-lime-400 font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-700">
                  CLAHE Contrast Boosted
                </div>
              </div>
            ) : (
              <div className="text-slate-500 text-xs">No Sample Selected</div>
            )}
            <div className="absolute bottom-2 right-2 bg-emerald-950/90 text-white text-[10px] px-2 py-1 rounded">
              Status: AI Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
