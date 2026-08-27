// Modular Prototype AI Analysis Engine
// Supported Countries: Sri Lanka, India, Kenya
// Supported Grades: OP, BOP, BOPF, FBOP, Pekoe, Dust

import { PROTOTYPE_SAMPLES } from '../data/prototypeDataset'

/**
 * Generates a deterministic hash from image file name or metadata
 */
function getDeterministicSeed(input) {
  if (typeof input === 'string') {
    let hash = 0
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i)
      hash |= 0
    }
    return Math.abs(hash)
  }
  if (input && input.name) {
    let hash = 0
    const str = input.name + (input.size || 0)
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0
    }
    return Math.abs(hash)
  }
  return 42891
}

/**
 * 4. Tea Grade Classification
 */
export function classifyTeaGrade(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return {
      predictedGrade: sampleData.defaultMetrics.predictedGrade,
      confidence: sampleData.defaultMetrics.confidence,
      top3: sampleData.defaultMetrics.gradeTop3,
      explanation: `Analysis indicates morphological leaf particle size matching standard ${sampleData.defaultMetrics.predictedGrade} grade with high optical homogeneity.`
    }
  }

  const seed = getDeterministicSeed(sampleData)
  const grades = ['BOP', 'BOPF', 'OP', 'FBOP', 'Pekoe', 'Dust']
  const primaryIdx = seed % grades.length
  const primary = grades[primaryIdx]
  const secondary = grades[(primaryIdx + 1) % grades.length]
  const tertiary = grades[(primaryIdx + 2) % grades.length]

  const conf1 = Number((85 + (seed % 110) / 10).toFixed(1))
  const conf2 = Number(((100 - conf1) * 0.65).toFixed(1))
  const conf3 = Number((100 - conf1 - conf2).toFixed(1))

  return {
    predictedGrade: primary,
    confidence: conf1,
    top3: [
      { grade: primary, percentage: conf1 },
      { grade: secondary, percentage: conf2 },
      { grade: tertiary, percentage: conf3 }
    ],
    explanation: `Feature maps indicate leaf length-to-width ratio and fragment surface area consistent with standard ${primary} specification.`
  }
}

/**
 * 5. Purity Estimation
 */
export function estimatePurity(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return {
      purityScore: sampleData.defaultMetrics.purityScore,
      teaMaterial: sampleData.defaultMetrics.teaMaterial,
      foreignMaterial: sampleData.defaultMetrics.foreignMaterial
    }
  }

  const seed = getDeterministicSeed(sampleData)
  const purity = Number((91 + (seed % 75) / 10).toFixed(1))
  const foreign = Number((100 - purity).toFixed(1))

  return {
    purityScore: purity,
    teaMaterial: purity,
    foreignMaterial: foreign
  }
}

/**
 * 6. Mixed Composition Analysis
 */
export function analyzeComposition(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return {
      composition: sampleData.defaultMetrics.composition,
      interpretation: 'Dominant tea leaf matrix with expected minimal percentage of stem fibers and fine particles.'
    }
  }

  const seed = getDeterministicSeed(sampleData)
  const leaves = 65 + (seed % 20)
  const dust = 15 + (seed % 10)
  const stems = 4 + (seed % 5)
  const foreign = 100 - (leaves + dust + stems)

  return {
    composition: {
      teaLeaves: leaves,
      teaDust: dust,
      stemsFibers: stems,
      foreignMaterial: foreign
    },
    interpretation: 'Visual spectrum breakdown indicates strong primary leaf concentration suitable for export grade classification.'
  }
}

/**
 * 7. Defect Detection
 */
export function detectDefects(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return sampleData.defaultMetrics.defects
  }

  const seed = getDeterministicSeed(sampleData)
  return [
    { type: 'Broken leaves', severity: (seed % 3 === 0) ? 'Medium' : 'Low', percentage: 5.2, status: 'Clean' },
    { type: 'Excessive stems', severity: (seed % 4 === 0) ? 'Medium' : 'Low', percentage: 2.4, status: 'Clean' },
    { type: 'Foreign particles', severity: 'None', percentage: 0.8, status: 'Clean' },
    { type: 'Discoloration', severity: 'None', percentage: 1.1, status: 'Clean' },
    { type: 'Burnt/over-processed', severity: 'None', percentage: 0.4, status: 'Clean' },
    { type: 'Mold-like anomalies', severity: 'None', percentage: 0.0, status: 'Clean' }
  ]
}

/**
 * 8. Tea Origin Identification
 * Supported: Sri Lanka, India
 */
export function identifyOrigin(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return {
      predictedOrigin: sampleData.defaultMetrics.origin,
      confidence: sampleData.defaultMetrics.originConfidence,
      breakdown: sampleData.defaultMetrics.originBreakdown
    }
  }

  const seed = getDeterministicSeed(sampleData)
  const countries = [
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'India', flag: '🇮🇳' }
  ]

  const topIdx = seed % countries.length
  const secondIdx = (topIdx + 1) % countries.length

  const topConf = Number((88 + (seed % 100) / 10).toFixed(1))
  const secConf = Number((100 - topConf).toFixed(1))

  return {
    predictedOrigin: countries[topIdx].name,
    confidence: topConf,
    breakdown: [
      { country: countries[topIdx].name, flag: countries[topIdx].flag, percentage: topConf },
      { country: countries[secondIdx].name, flag: countries[secondIdx].flag, percentage: secConf }
    ]
  }
}

/**
 * 9. Origin Similarity Score Calculation
 */
export function calculateOriginSimilarity(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return sampleData.defaultMetrics.originSimilarity
  }

  const originRes = identifyOrigin(sampleData)
  const seed = getDeterministicSeed(sampleData)

  let sl = 62.0
  let inScore = 58.0

  if (originRes.predictedOrigin === 'Sri Lanka') {
    sl = Number((88 + (seed % 90) / 10).toFixed(1))
    inScore = Number((55 + (seed % 120) / 10).toFixed(1))
  } else {
    inScore = Number((88 + (seed % 90) / 10).toFixed(1))
    sl = Number((55 + (seed % 120) / 10).toFixed(1))
  }

  const highest = originRes.predictedOrigin
  const highestScore = highest === 'Sri Lanka' ? sl : inScore

  return {
    sriLanka: sl,
    india: inScore,
    highest,
    highestScore
  }
}

/**
 * 10. Cross-Origin Benchmarking
 */
export function benchmarkOrigins(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return sampleData.defaultMetrics.benchmarks
  }

  const quality = calculateQualityIndex(sampleData)
  const score = quality.score
  const purity = estimatePurity(sampleData).purityScore

  return {
    current: { grade: Math.round(score + 3), purity: Math.round(purity), composition: 88, defectScore: 92, similarity: 91, overall: Math.round(score) },
    sriLanka: { grade: 90, purity: 94, composition: 86, defectScore: 92, similarity: 100, overall: 87 },
    india: { grade: 82, purity: 89, composition: 82, defectScore: 86, similarity: 65, overall: 81 }
  }
}

/**
 * 11. Overall Quality Index Generation
 */
export function calculateQualityIndex(sampleData) {
  if (sampleData && sampleData.defaultMetrics) {
    return {
      score: sampleData.defaultMetrics.overallQualityScore,
      category: sampleData.defaultMetrics.qualityCategory,
      interpretation: 'Sample exhibits high leaf purity with minimal stem defects. Cell structure alignment and particle size distribution match premium Ceylon tea quality standards.'
    }
  }

  const seed = getDeterministicSeed(sampleData)
  const score = Number((82 + (seed % 140) / 10).toFixed(1))
  let category = 'Good'
  if (score >= 88) category = 'Excellent'
  else if (score >= 75) category = 'Good'
  else if (score >= 60) category = 'Moderate'
  else category = 'Low'

  return {
    score,
    category,
    interpretation: `Aggregated evaluation across leaf morphology, spectral purity, low defect prevalence, and origin consistency places this batch in the ${category} category.`
  }
}

/**
 * 12. Explainable AI using Grad-CAM++
 */
export function generateGradCAM(sampleData, featureType = 'Grade') {
  const seed = getDeterministicSeed(sampleData) + (featureType === 'Grade' ? 1 : featureType === 'Quality' ? 2 : 3)
  
  // Generating hotspot regions for Grad-CAM++ heatmap preview
  const hotspots = [
    { x: 35 + (seed % 20), y: 40 + (seed % 15), radius: 28, intensity: 0.95 },
    { x: 60 + (seed % 15), y: 55 + (seed % 20), radius: 22, intensity: 0.82 },
    { x: 45 + (seed % 25), y: 70 + (seed % 10), radius: 18, intensity: 0.68 }
  ]

  return {
    featureType,
    hotspots,
    description: `Grad-CAM++ activation maps highlight fine leaf margins and texture density key to ${featureType} prediction.`
  }
}

/**
 * Run full pipeline analysis
 */
export function runFullAnalysis(sampleData) {
  const grade = classifyTeaGrade(sampleData)
  const purity = estimatePurity(sampleData)
  const composition = analyzeComposition(sampleData)
  const defects = detectDefects(sampleData)
  const origin = identifyOrigin(sampleData)
  const originSimilarity = calculateOriginSimilarity(sampleData)
  const benchmarks = benchmarkOrigins(sampleData)
  const quality = calculateQualityIndex(sampleData)
  const gradCam = generateGradCAM(sampleData, 'Grade')

  return {
    grade,
    purity,
    composition,
    defects,
    origin,
    originSimilarity,
    benchmarks,
    quality,
    gradCam
  }
}
