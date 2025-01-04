import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { RiskAssessment } from '../types';

interface RiskDisplayProps {
  assessment: RiskAssessment;
}

export default function RiskDisplay({ assessment }: RiskDisplayProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-green-600';
      case 'moderate':
        return 'text-yellow-600';
      case 'high':
        return 'text-orange-600';
      case 'very-high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low':
        return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'moderate':
        return <AlertCircle className="w-8 h-8 text-yellow-600" />;
      case 'high':
      case 'very-high':
        return <AlertTriangle className="w-8 h-8 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Risk Assessment Results</h2>
        {getRiskIcon(assessment.riskLevel)}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-medium">Risk Score</span>
            <span className={`text-2xl font-bold ${getRiskColor(assessment.riskLevel)}`}>
              {assessment.riskScore.toFixed(1)}%
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Confidence Interval: {assessment.confidenceInterval.lower.toFixed(1)}% - {assessment.confidenceInterval.upper.toFixed(1)}%
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Risk Level</h3>
          <div className={`text-xl font-bold ${getRiskColor(assessment.riskLevel)} capitalize`}>
            {assessment.riskLevel.replace('-', ' ')}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Key Risk Factors</h3>
          <ul className="list-disc list-inside space-y-1">
            {assessment.keyFactors.map((factor, index) => (
              <li key={index} className="text-gray-700">{factor}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}