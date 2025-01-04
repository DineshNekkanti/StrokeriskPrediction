import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import PatientForm from './components/PatientForm';
import RiskDisplay from './components/RiskDisplay';
import { PatientData, RiskAssessment } from './types';
import { predictStrokeRisk } from './utils/mockPrediction';

function App() {
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);

  const handleSubmit = (data: PatientData) => {
    const result = predictStrokeRisk(data);
    setAssessment(result);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Stroke Risk Prediction System</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
              <PatientForm onSubmit={handleSubmit} />
            </div>
          </div>

          <div>
            {assessment && <RiskDisplay assessment={assessment} />}
          </div>
        </div>
      </main>

      <footer className="bg-white mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            This is a demonstration system. For actual medical advice, please consult healthcare professionals.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;