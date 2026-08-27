import { useState, useMemo } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import { PROTOTYPE_SAMPLES } from './data/prototypeDataset'
import { runFullAnalysis } from './utils/prototypeEngine'

import DatasetSection from './components/DatasetSection'
import GradeClassification from './components/GradeClassification'
import PurityAndComposition from './components/PurityAndComposition'
import DefectAndQuality from './components/DefectAndQuality'
import ExplainableAI from './components/ExplainableAI'

function Component3() {
  // Default benchmark sample: Sri Lanka Nuwara Eliya BOP
  const [samples, setSamples] = useState(PROTOTYPE_SAMPLES)
  const [currentSample, setCurrentSample] = useState(PROTOTYPE_SAMPLES[0])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [fileError, setFileError] = useState(null)
  const [heicNotice, setHeicNotice] = useState(null)

  const handleUploadSampleImage = (sampleId, file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target.result
      setSamples((prev) =>
        prev.map((s) => {
          if (s.id === sampleId) {
            const updated = {
              ...s,
              imageUrl: dataUrl,
              previewUrl: dataUrl,
              name: file.name,
              category: 'Custom Reference'
            }
            delete updated.defaultMetrics
            if (currentSample?.id === sampleId) {
              setCurrentSample(updated)
              triggerAnalysisSequence()
            }
            return updated
          }
          return s
        })
      )
    }
    reader.readAsDataURL(file)
  }

  // Compute deterministic AI analysis results
  const analysisResults = useMemo(() => {
    return runFullAnalysis(currentSample)
  }, [currentSample])

  // Custom upload handler
  const handleUploadImage = (file) => {
    setFileError(null)
    setHeicNotice(null)

    const isHeic = file.name.toLowerCase().endsWith('.heic') || file.type.includes('heic')

    if (isHeic) {
      setHeicNotice('HEIC image format detected. For native browser previews, JPG or PNG is recommended, but raw HEIC image data has been recorded for analysis.')
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const customSample = {
        id: `TS-CUST-${Math.floor(1000 + Math.random() * 9000)}`,
        name: file.name,
        country: 'Sri Lanka',
        countryCode: 'LK',
        flag: '🇱🇰',
        region: 'Factory Batch Sample',
        grade: 'BOP',
        category: 'Custom Upload',
        imageUrl: e.target.result,
        previewUrl: e.target.result,
        description: `Custom uploaded file (${(file.size / 1024).toFixed(1)} KB) ready for AI evaluation.`
      }

      setCurrentSample(customSample)
      triggerAnalysisSequence()
    }

    reader.onerror = () => {
      setFileError('Failed to read image file. Please upload a valid JPG, PNG, or HEIC image.')
    }

    reader.readAsDataURL(file)
  }

  const triggerAnalysisSequence = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 2500)
  }

  const handleSelectSample = (sample) => {
    setFileError(null)
    setHeicNotice(null)
    if (sample) {
      setCurrentSample(sample)
      triggerAnalysisSequence()
    } else {
      setCurrentSample(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f8f2] via-[#f4f2e9] to-white font-sans text-emerald-950 flex flex-col justify-between">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow space-y-10">
        
        {/* Research Dashboard Hero Header */}
        <header className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-lime-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Research Component 3
                </span>
                <span className="bg-emerald-800/80 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-700">
                  Tea Quality & Provenance
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                AI-Powered Tea Grade, Quality &<br />
                <span className="text-lime-300">Origin Intelligence System</span>
              </h1>

              <p className="text-sm text-emerald-200/80 max-w-3xl leading-relaxed">
                Evaluating tea grade classification, purity estimation, mixed composition analysis, defect detection, origin identification, similarity benchmarking, and visual explainability using Grad-CAM++.
              </p>
            </div>

            {/* Target Sample Card */}
            <div className="bg-emerald-900/90 p-5 rounded-2xl border border-emerald-700 text-center min-w-[210px] shrink-0 space-y-2">
              <div className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">
                Selected Sample Target
              </div>
              <div className="text-lg font-black text-lime-300 font-mono">
                {currentSample?.id || 'No Sample Selected'}
              </div>
              <div className="text-xs text-emerald-200 flex items-center justify-center gap-1 font-semibold">
                <span>{currentSample?.flag || '📷'}</span>
                <span>{currentSample?.country || 'Custom'}</span>
                <span>•</span>
                <span className="text-lime-400">{currentSample?.grade || 'N/A'}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Tasks 1-2: Dataset Collection & Multi-Country Filter */}
        <DatasetSection
          samples={samples}
          currentSample={currentSample}
          onSelectSample={handleSelectSample}
          onUploadImage={handleUploadImage}
          onUploadSampleImage={handleUploadSampleImage}
          onStartAnalysis={triggerAnalysisSequence}
          isAnalyzing={isAnalyzing}
          fileError={fileError}
          heicNotice={heicNotice}
        />

        {/* Detailed Intelligence Task Panels */}
        <GradeClassification
          gradeData={analysisResults.grade}
          currentSample={currentSample}
          onUploadImage={handleUploadImage}
        />
        <PurityAndComposition
          purityData={analysisResults.purity}
          compositionData={analysisResults.composition}
        />
        <DefectAndQuality
          defectsData={analysisResults.defects}
          qualityData={analysisResults.quality}
          currentSample={currentSample}
        />

        {/* Novelty 4: Explainable AI — Grad-CAM++ */}
        <ExplainableAI currentSample={currentSample} />


      </main>

      <Footer />
    </div>
  )
}

export default Component3
