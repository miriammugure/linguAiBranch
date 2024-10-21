import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Handlers/ApiConfig';

const DiabetesPredictionForm = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    smoking_history: '',
    bmi: '',
    HbA1c_level: '',
    blood_glucose_level: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/predict-diabetes/`, formData);
      alert(response.data.message); // Display the prediction message in a popup alert
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Diabetes Prediction Form</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Hypertension:</label>
          <select 
            name="hypertension" 
            value={formData.hypertension} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2">
            <option value="">Select Hypertension Status</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Heart Disease:</label>
          <select 
            name="heart_disease" 
            value={formData.heart_disease} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2">
            <option value="">Select Heart Disease Status</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Smoking History:</label>
          <select 
            name="smoking_history" 
            value={formData.smoking_history} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2">
            <option value="">Select Smoking History</option>
            <option value="never">Never</option>
            <option value="current">Current</option>
            <option value="not current">Not Current</option>
            <option value="No Info">No Info</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">BMI:</label>
          <input 
            type="number" 
            name="bmi" 
            value={formData.bmi} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">HbA1c Level:</label>
          <input 
            type="number" 
            name="HbA1c_level" 
            value={formData.HbA1c_level} 
            onChange={handleChange} 
            required 
            step="0.1" 
            className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Blood Glucose Level:</label>
          <input 
            type="number" 
            name="blood_glucose_level" 
            value={formData.blood_glucose_level} 
            onChange={handleChange} 
            required 
            step="0.1" 
            className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DiabetesPredictionForm;
