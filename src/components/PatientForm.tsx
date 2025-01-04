import React from 'react';
import { AlertCircle } from 'lucide-react';
import { PatientData } from '../types';

interface PatientFormProps {
  onSubmit: (data: PatientData) => void;
}

export default function PatientForm({ onSubmit }: PatientFormProps) {
  const [formData, setFormData] = React.useState<PatientData>({
    age: 0,
    gender: 'male',
    ethnicity: '',
    systolicBP: 120,
    diastolicBP: 80,
    bmi: 25,
    heartRate: 70,
    totalCholesterol: 200,
    bloodGlucose: 100,
    hba1c: 5.7,
    hasHypertension: false,
    hasDiabetes: false,
    hadPreviousStroke: false,
    smokingStatus: 'never',
    alcoholConsumption: 'none',
    physicalActivity: 'moderate'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Demographics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ethnicity</label>
            <input
              type="text"
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Clinical Measurements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Systolic BP (mmHg)</label>
            <input
              type="number"
              name="systolicBP"
              value={formData.systolicBP}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Diastolic BP (mmHg)</label>
            <input
              type="number"
              name="diastolicBP"
              value={formData.diastolicBP}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Medical History</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="hasHypertension"
              checked={formData.hasHypertension}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Hypertension</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="hasDiabetes"
              checked={formData.hasDiabetes}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Diabetes</label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Lifestyle Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Smoking Status</label>
            <select
              name="smokingStatus"
              value={formData.smokingStatus}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="never">Never Smoked</option>
              <option value="former">Former Smoker</option>
              <option value="current">Current Smoker</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Physical Activity</label>
            <select
              name="physicalActivity"
              value={formData.physicalActivity}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Risk
        </button>
      </div>
    </form>
  );
}