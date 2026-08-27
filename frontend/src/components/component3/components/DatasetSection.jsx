import { useState } from 'react'
import { DATASET_STATS, PROTOTYPE_SAMPLES, COUNTRY_PROFILES } from '../data/prototypeDataset'

export default function DatasetSection({
  samples = [],
  currentSample,
  onSelectSample,
  onUploadImage,
  onUploadSampleImage,
  onStartAnalysis,
  isAnalyzing,
  fileError,
  heicNotice
}) {
  const [countryFilter, setCountryFilter] = useState('All')
  const [isDragging, setIsDragging] = useState(false)

  const filteredSamples = countryFilter === 'All'
    ? samples
    : samples.filter(s => s.country === countryFilter)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onUploadImage(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      onUploadImage(file)
    }
  }

  return (
    <section className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-emerald-950 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-emerald-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-lime-400 text-emerald-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Prototype Dataset
            </span>
            <span className="text-emerald-300 text-xs font-semibold">Multi-Country Intelligence</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            1. Tea Sample Image Dataset & Multi-Country Filter
          </h2>
          <p className="text-emerald-200/80 text-sm mt-1 max-w-2xl">
            Upload custom tea sample images or select benchmark reference samples from Sri Lanka and India for multi-country quality analysis.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-emerald-300 font-medium">Supported Formats</div>
            <div className="text-sm font-bold text-lime-300">JPG • JPEG • PNG • HEIC</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Upload Area & Dataset Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Task 1: Upload & Sample Information (2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <span className="text-lime-600">✦</span> Tea Sample Image Upload
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
              Task 1
            </span>
          </div>

          {/* Upload Drop Zone / Preview */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-200 text-center ${
              isDragging
                ? 'border-lime-500 bg-lime-50/20 shadow-md scale-[1.01]'
                : 'border-emerald-200 hover:border-lime-500 bg-emerald-50/30'
            }`}
          >
            {currentSample?.previewUrl || currentSample?.imageUrl ? (
              <div className="space-y-4">
                <div className="relative inline-block mx-auto max-h-64 rounded-xl overflow-hidden shadow-md border border-emerald-200">
                  <img
                    src={currentSample.previewUrl || currentSample.imageUrl}
                    alt="Uploaded Tea Sample"
                    className="max-h-64 w-auto object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-950/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
                    {currentSample.flag || '📷'} {currentSample.country || 'Custom Upload'}
                  </div>
                </div>

                {heicNotice && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left">
                    <b>Notice:</b> {heicNotice}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <label className="cursor-pointer px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-bold rounded-full transition">
                    Replace Image
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/heic,.heic"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={() => onSelectSample(null)}
                    className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-full transition"
                  >
                    Remove Image
                  </button>
                  <button
                    onClick={onStartAnalysis}
                    disabled={isAnalyzing}
                    className="px-6 py-2.5 bg-emerald-950 hover:bg-emerald-800 text-white text-xs font-bold rounded-full shadow-md transition flex items-center gap-2 disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Analyzing Pipeline...
                      </>
                    ) : (
                      <>
                        <span>⚡</span> Start AI Analysis
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-6 space-y-3">
                <div className="w-12 h-12 bg-lime-100 text-lime-800 rounded-2xl flex items-center justify-center mx-auto text-xl shadow-inner">
                  📷
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-950">
                    Drag and drop your tea sample image here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports JPG, JPEG, PNG, and HEIC image files
                  </p>
                </div>
                <div>
                  <label className="cursor-pointer inline-block px-5 py-2.5 bg-emerald-950 hover:bg-emerald-800 text-white text-xs font-bold rounded-full shadow-md transition">
                    Browse File from Computer
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/heic,.heic"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {fileError && (
                  <p className="text-xs text-rose-600 font-semibold">{fileError}</p>
                )}
              </div>
            )}
          </div>

          {/* Quick Presets Section (Always Visible) */}
          <div className="pt-4 border-t border-slate-100 max-w-lg mx-auto text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
              Or quickly select a Sri Lankan / Indian test sample:
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {samples.slice(0, 4).map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectSample(sample)
                  }}
                  className="flex flex-col items-center gap-1.5 group/btn cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl overflow-hidden border shadow-2xs transition-all duration-200 ${
                    currentSample?.id === sample.id 
                      ? 'border-lime-500 ring-2 ring-lime-400/20 scale-105' 
                      : 'border-slate-200 group-hover/btn:border-lime-500'
                  }`}>
                    <img
                      src={sample.imageUrl}
                      alt={sample.name}
                      className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className={`text-[10px] font-bold transition-colors duration-200 ${
                    currentSample?.id === sample.id 
                      ? 'text-lime-700' 
                      : 'text-emerald-950 group-hover/btn:text-lime-700'
                  }`}>
                    {sample.flag} {sample.grade}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sample Information Display */}
          {currentSample && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Sample Information
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[10px]">Sample ID</span>
                  <span className="font-bold text-emerald-950">{currentSample.id}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs col-span-2 md:col-span-1 truncate">
                  <span className="text-slate-400 block text-[10px]">Image Name</span>
                  <span className="font-bold text-emerald-950 truncate block" title={currentSample.name}>
                    {currentSample.name}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[10px]">Origin</span>
                  <span className="font-bold text-emerald-950">
                    {currentSample.flag} {currentSample.country}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[10px]">Tea Grade</span>
                  <span className="font-bold text-lime-700">{currentSample.grade}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs col-span-2 md:col-span-1">
                  <span className="text-slate-400 block text-[10px]">Dataset Category</span>
                  <span className="font-bold text-emerald-950">{currentSample.category}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Task 1 Sidebar: Dataset Statistics */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 md:p-8 border border-emerald-800 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-lime-400 tracking-wider uppercase">
                Prototype Dataset
              </span>
              <span className="text-xs bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded-full">
                Task 1
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Dataset Statistics</h3>
            <p className="text-xs text-emerald-200/70 mb-6">
              Aggregated reference dataset volume across supported producer regions.
            </p>

            {/* Stats Cards */}
            <div className="space-y-3">
              <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-emerald-300">Total Samples</div>
                  <div className="text-2xl font-black text-white">{DATASET_STATS.totalSamples.toLocaleString()}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-300 flex items-center justify-center font-bold">
                  📊
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/80">
                  <div className="text-lg mb-1">🇱🇰</div>
                  <div className="font-bold text-lime-300">{DATASET_STATS.sriLankaSamples.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-300">Sri Lanka</div>
                </div>
                <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/80">
                  <div className="text-lg mb-1">🇮🇳</div>
                  <div className="font-bold text-lime-300">{DATASET_STATS.indiaSamples.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-300">India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-800/80 text-[11px] text-emerald-300/80 flex items-center gap-2">
            <span>ℹ️</span>
            <span>Dataset statistics represent synthetic prototype benchmarking data.</span>
          </div>
        </div>
      </div>

      {/* Task 2: Multi-Country Dataset Collection & Filter */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-emerald-950">
                2. Multi-Country Reference Tea Dataset
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                Task 2
              </span>
            </div>
             <p className="text-xs text-slate-500 mt-1">
              Select benchmark samples from supported origins (Sri Lanka 🇱🇰, India 🇮🇳) to run intelligence evaluations.
            </p>
          </div>

          {/* Country Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-full self-start md:self-auto">
            {['All', 'Sri Lanka', 'India'].map((country) => (
              <button
                key={country}
                onClick={() => setCountryFilter(country)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                  countryFilter === country
                    ? 'bg-emerald-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-emerald-950 hover:bg-slate-200/60'
                }`}
              >
                {country === 'Sri Lanka' ? '🇱🇰 Sri Lanka' : country === 'India' ? '🇮🇳 India' : 'All Origins'}
              </button>
            ))}
          </div>
        </div>

        {/* Sample Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSamples.map((sample) => {
            const isSelected = currentSample?.id === sample.id
            return (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 p-4 ${
                  isSelected
                    ? 'ring-2 ring-lime-500 bg-lime-50/20 border-lime-400 shadow-md'
                    : 'bg-[#fbfcf8] border-slate-200 hover:border-lime-300 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <input
                  id={`file-input-${sample.id}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file && onUploadSampleImage) {
                      onUploadSampleImage(sample.id, file)
                    }
                  }}
                />
                <div className="relative h-36 rounded-xl overflow-hidden mb-3 bg-slate-100">
                  <img
                    src={sample.imageUrl}
                    alt={sample.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-emerald-950/85 backdrop-blur-md text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                    {sample.flag} {sample.country}
                  </div>
                  
                  {/* Upload button overlay */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      document.getElementById(`file-input-${sample.id}`)?.click()
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-emerald-950/90 hover:bg-emerald-800 text-white rounded-full transition shadow-md border border-emerald-700/60 z-20"
                    title="Upload new image for this sample"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>

                  <div className="absolute bottom-2 right-2 bg-lime-400 text-emerald-950 font-extrabold text-[10px] px-2 py-0.5 rounded">
                    {sample.grade}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-slate-400">{sample.id}</span>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100/60 px-2 py-0.5 rounded-full">
                      {sample.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-emerald-950 truncate" title={sample.name}>
                    {sample.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {sample.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectSample(sample)
                  }}
                  className={`mt-4 w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                    isSelected
                      ? 'bg-lime-400 text-emerald-950'
                      : 'bg-slate-100 hover:bg-emerald-950 hover:text-white text-slate-700'
                  }`}
                >
                  {isSelected ? '✓ Currently Selected' : 'Select Sample →'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
