export interface PatientData {
  // Demographics
  age: number;
  gender: 'male' | 'female';
  ethnicity: string;
  
  // Clinical Measurements
  systolicBP: number;
  diastolicBP: number;
  bmi: number;
  heartRate: number;
  
  // Lab Results
  totalCholesterol: number;
  bloodGlucose: number;
  hba1c: number;
  
  // Medical History
  hasHypertension: boolean;
  hasDiabetes: boolean;
  hadPreviousStroke: boolean;
  
  // Lifestyle Factors
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'moderate' | 'heavy';
  physicalActivity: 'low' | 'moderate' | 'high';
}

export interface RiskAssessment {
  riskScore: number;
  confidenceInterval: {
    lower: number;
    upper: number;
  };
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  keyFactors: string[];
}