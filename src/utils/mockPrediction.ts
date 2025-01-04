import { PatientData, RiskAssessment } from '../types';

// This is a mock prediction function that would be replaced by actual ML model predictions
export function predictStrokeRisk(data: PatientData): RiskAssessment {
  // Simple mock logic for demonstration
  let baseRisk = 0;
  
  // Age factor
  baseRisk += data.age * 0.1;
  
  // Blood pressure factor
  if (data.systolicBP > 140 || data.diastolicBP > 90) {
    baseRisk += 10;
  }
  
  // Medical history factors
  if (data.hasHypertension) baseRisk += 15;
  if (data.hasDiabetes) baseRisk += 10;
  if (data.hadPreviousStroke) baseRisk += 20;
  
  // Lifestyle factors
  if (data.smokingStatus === 'current') baseRisk += 15;
  if (data.physicalActivity === 'low') baseRisk += 5;
  
  // Normalize risk score to 0-100 range
  const riskScore = Math.min(Math.max(baseRisk, 0), 100);
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  if (riskScore < 20) riskLevel = 'low';
  else if (riskScore < 40) riskLevel = 'moderate';
  else if (riskScore < 60) riskLevel = 'high';
  else riskLevel = 'very-high';
  
  // Generate key factors
  const keyFactors: string[] = [];
  if (data.age > 65) keyFactors.push('Advanced age');
  if (data.systolicBP > 140) keyFactors.push('High blood pressure');
  if (data.hasHypertension) keyFactors.push('History of hypertension');
  if (data.hasDiabetes) keyFactors.push('Diabetes');
  if (data.smokingStatus === 'current') keyFactors.push('Current smoker');
  
  return {
    riskScore,
    confidenceInterval: {
      lower: riskScore - 5,
      upper: riskScore + 5
    },
    riskLevel,
    keyFactors
  };
}