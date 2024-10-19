import  { useState } from 'react';

const TreatmentSchedule = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = () => {
    const { date, time, location } = formData;
    if (!date || !time || !location) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Treatment scheduled on ${date} at ${time} in ${location}.');
    // You can add logic to submit the data to your server
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-center text-xl font-semibold mb-4">Treatment Schedule</h2>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm mb-2">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-sm mb-2">Select Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm mb-2">Select Location:</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Select Location</option>
            <option value="Hospital A">Home</option>
            <option value="Hospital B">Hospital </option>
            <option value="Clinic C">Virtual</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm mb-2">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder='enter username'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="meetLink" className="block text-sm mb-2">Meet link (Only if virtual):</label>
          <input
            type="text"
            id="meetLink"
            name="meetLink"
            value={formData.username}
            onChange={handleChange}
            placeholder='copy meeting link here'
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          onClick={submitForm}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
        >
          Schedule Treatment
        </button>
      </div>
    </div>
  );
};

export default TreatmentSchedule;