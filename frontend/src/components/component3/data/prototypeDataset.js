// Prototype Dataset for AI-Powered Tea Grade, Quality & Origin Intelligence System
// Supported countries: Sri Lanka, India

export const DATASET_STATS = {
  totalSamples: 3750,
  sriLankaSamples: 2100,
  indiaSamples: 1650,
  categories: ['Reference Dataset', 'Factory Production Batch', 'Auction Sample', 'Field Harvest']
}

export const COUNTRY_PROFILES = {
  sriLanka: {
    code: 'LK',
    name: 'Sri Lanka',
    flag: '🇱🇰',
    regions: ['Nuwara Eliya', 'Dimbula', 'Uva', 'Ruhuna', 'Kandy'],
    primaryGrades: ['OP', 'BOP', 'BOPF', 'FBOP'],
    description: 'Distinct medium-to-fine broken leaf with golden liquor characteristics, floral top notes, and low fiber content.'
  },
  india: {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    regions: ['Assam', 'Darjeeling', 'Nilgiri'],
    primaryGrades: ['BOP', 'BOPF', 'Pekoe', 'Dust'],
    description: 'Bold maltiness, dense granular leaf density (CTC), and pronounced dark copper infusion attributes.'
  }
}

export const PROTOTYPE_SAMPLES = [
  {
    id: 'TS-LK-9021',
    name: 'Nuwara_Eliya_BOP_Sample_01.jpg',
    country: 'Sri Lanka',
    countryCode: 'LK',
    flag: '🇱🇰',
    region: 'Nuwara Eliya',
    grade: 'BOP',
    category: 'Reference Dataset',
    imageUrl: '/Nuwara_Eliya_BOP_Sample_01.jpg',
    description: 'High-grown Ceylon BOP with crisp broken leaf structure and high leaf purity.',
    defaultMetrics: {
      predictedGrade: 'BOP',
      confidence: 92.4,
      gradeTop3: [
        { grade: 'BOP', percentage: 92.4 },
        { grade: 'BOPF', percentage: 5.1 },
        { grade: 'OP', percentage: 2.5 }
      ],
      purityScore: 94.6,
      teaMaterial: 94.6,
      foreignMaterial: 5.4,
      composition: {
        teaLeaves: 72,
        teaDust: 18,
        stemsFibers: 6,
        foreignMaterial: 4
      },
      defects: [
        { type: 'Broken leaves', severity: 'Low', percentage: 4.2, status: 'Clean' },
        { type: 'Excessive stems', severity: 'Low', percentage: 2.1, status: 'Clean' },
        { type: 'Foreign particles', severity: 'None', percentage: 0.5, status: 'Clean' },
        { type: 'Discoloration', severity: 'None', percentage: 1.2, status: 'Clean' },
        { type: 'Burnt/over-processed', severity: 'None', percentage: 0.8, status: 'Clean' },
        { type: 'Mold-like anomalies', severity: 'None', percentage: 0.0, status: 'Clean' }
      ],
      origin: 'Sri Lanka',
      originConfidence: 91.0,
      originBreakdown: [
        { country: 'Sri Lanka', flag: '🇱🇰', percentage: 91.0 },
        { country: 'India', flag: '🇮🇳', percentage: 9.0 }
      ],
      originSimilarity: {
        sriLanka: 91.4,
        india: 64.8,
        highest: 'Sri Lanka',
        highestScore: 91.4
      },
      benchmarks: {
        current: { grade: 92, purity: 95, composition: 88, defectScore: 94, similarity: 91, overall: 88 },
        sriLanka: { grade: 90, purity: 94, composition: 86, defectScore: 92, similarity: 100, overall: 87 },
        india: { grade: 82, purity: 89, composition: 82, defectScore: 86, similarity: 65, overall: 81 }
      },
      overallQualityScore: 87.8,
      qualityCategory: 'Excellent'
    }
  },
  {
    id: 'TS-IN-9022',
    name: 'Assam_BOP_Sample_02.png',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    region: 'Assam',
    grade: 'BOP',
    category: 'Reference Dataset',
    imageUrl: '/Assam_BOP_Sample_02.png',
    description: 'Medium-grown Assam BOP with bold broken leaf structure and strong infusion attributes.',
    defaultMetrics: {
      predictedGrade: 'BOP',
      confidence: 91.8,
      gradeTop3: [
        { grade: 'BOP', percentage: 91.8 },
        { grade: 'BOPF', percentage: 5.4 },
        { grade: 'Pekoe', percentage: 2.8 }
      ],
      purityScore: 92.6,
      teaMaterial: 92.6,
      foreignMaterial: 7.4,
      composition: {
        teaLeaves: 70,
        teaDust: 18,
        stemsFibers: 8,
        foreignMaterial: 4
      },
      defects: [
        { type: 'Broken leaves', severity: 'Low', percentage: 5.1, status: 'Clean' },
        { type: 'Excessive stems', severity: 'Low', percentage: 3.4, status: 'Clean' },
        { type: 'Foreign particles', severity: 'None', percentage: 0.8, status: 'Clean' },
        { type: 'Discoloration', severity: 'None', percentage: 1.5, status: 'Clean' },
        { type: 'Burnt/over-processed', severity: 'None', percentage: 1.0, status: 'Clean' },
        { type: 'Mold-like anomalies', severity: 'None', percentage: 0.0, status: 'Clean' }
      ],
      origin: 'India',
      originConfidence: 89.5,
      originBreakdown: [
        { country: 'India', flag: '🇮🇳', percentage: 89.5 },
        { country: 'Sri Lanka', flag: '🇱🇰', percentage: 10.5 }
      ],
      originSimilarity: {
        sriLanka: 65.2,
        india: 89.8,
        highest: 'India',
        highestScore: 89.8
      },
      benchmarks: {
        current: { grade: 91, purity: 93, composition: 85, defectScore: 91, similarity: 90, overall: 85 },
        sriLanka: { grade: 90, purity: 94, composition: 86, defectScore: 92, similarity: 65, overall: 87 },
        india: { grade: 91, purity: 92, composition: 84, defectScore: 85, similarity: 100, overall: 85 }
      },
      overallQualityScore: 85.2,
      qualityCategory: 'Good'
    }
  },
  {
    id: 'TS-IN-8832',
    name: 'Assam_Valley_Dust_Batch_04.jpg',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    region: 'Assam',
    grade: 'Dust',
    category: 'Auction Sample',
    imageUrl: '/Assam_Valley_Dust_Batch_04.jpg',
    description: 'Dense Assam CTC dust tea sample with heavy liquor body and rich color.',
    defaultMetrics: {
      predictedGrade: 'Dust',
      confidence: 95.1,
      gradeTop3: [
        { grade: 'Dust', percentage: 95.1 },
        { grade: 'BOPF', percentage: 3.8 },
        { grade: 'Pekoe', percentage: 1.1 }
      ],
      purityScore: 91.2,
      teaMaterial: 91.2,
      foreignMaterial: 8.8,
      composition: {
        teaLeaves: 25,
        teaDust: 65,
        stemsFibers: 6,
        foreignMaterial: 4
      },
      defects: [
        { type: 'Broken leaves', severity: 'High', percentage: 18.5, status: 'Warning' },
        { type: 'Excessive stems', severity: 'Low', percentage: 3.2, status: 'Clean' },
        { type: 'Foreign particles', severity: 'Low', percentage: 1.8, status: 'Clean' },
        { type: 'Discoloration', severity: 'Medium', percentage: 4.5, status: 'Warning' },
        { type: 'Burnt/over-processed', severity: 'Low', percentage: 2.1, status: 'Clean' },
        { type: 'Mold-like anomalies', severity: 'None', percentage: 0.0, status: 'Clean' }
      ],
      origin: 'India',
      originConfidence: 93.5,
      originBreakdown: [
        { country: 'India', flag: '🇮🇳', percentage: 93.5 },
        { country: 'Sri Lanka', flag: '🇱🇰', percentage: 6.5 }
      ],
      originSimilarity: {
        sriLanka: 61.2,
        india: 94.5,
        highest: 'India',
        highestScore: 94.5
      },
      benchmarks: {
        current: { grade: 88, purity: 91, composition: 79, defectScore: 82, similarity: 94, overall: 82 },
        sriLanka: { grade: 90, purity: 94, composition: 86, defectScore: 92, similarity: 61, overall: 87 },
        india: { grade: 91, purity: 92, composition: 84, defectScore: 85, similarity: 100, overall: 85 }
      },
      overallQualityScore: 82.4,
      qualityCategory: 'Good'
    }
  },
  {
    id: 'TS-LK-9140',
    name: 'Dimbula_FBOP_Special_Estate.png',
    country: 'Sri Lanka',
    countryCode: 'LK',
    flag: '🇱🇰',
    region: 'Dimbula',
    grade: 'FBOP',
    category: 'Reference Dataset',
    imageUrl: '/Dimbula_FBOP_Special_Estate.png',
    description: 'Flowery Broken Orange Pekoe featuring visible silver tips and aromatic leaf balance.',
    defaultMetrics: {
      predictedGrade: 'FBOP',
      confidence: 94.8,
      gradeTop3: [
        { grade: 'FBOP', percentage: 94.8 },
        { grade: 'BOP', percentage: 3.6 },
        { grade: 'OP', percentage: 1.6 }
      ],
      purityScore: 97.4,
      teaMaterial: 97.4,
      foreignMaterial: 2.6,
      composition: {
        teaLeaves: 82,
        teaDust: 10,
        stemsFibers: 5,
        foreignMaterial: 3
      },
      defects: [
        { type: 'Broken leaves', severity: 'Low', percentage: 3.1, status: 'Clean' },
        { type: 'Excessive stems', severity: 'None', percentage: 1.2, status: 'Clean' },
        { type: 'Foreign particles', severity: 'None', percentage: 0.3, status: 'Clean' },
        { type: 'Discoloration', severity: 'None', percentage: 0.5, status: 'Clean' },
        { type: 'Burnt/over-processed', severity: 'None', percentage: 0.2, status: 'Clean' },
        { type: 'Mold-like anomalies', severity: 'None', percentage: 0.0, status: 'Clean' }
      ],
      origin: 'Sri Lanka',
      originConfidence: 95.8,
      originBreakdown: [
        { country: 'Sri Lanka', flag: '🇱🇰', percentage: 95.8 },
        { country: 'India', flag: '🇮🇳', percentage: 4.2 }
      ],
      originSimilarity: {
        sriLanka: 96.2,
        india: 58.4,
        highest: 'Sri Lanka',
        highestScore: 96.2
      },
      benchmarks: {
        current: { grade: 96, purity: 97, composition: 92, defectScore: 98, similarity: 96, overall: 94 },
        sriLanka: { grade: 90, purity: 94, composition: 86, defectScore: 92, similarity: 100, overall: 87 },
        india: { grade: 82, purity: 89, composition: 82, defectScore: 86, similarity: 58, overall: 81 }
      },
      overallQualityScore: 94.2,
      qualityCategory: 'Excellent'
    }
  }
]
