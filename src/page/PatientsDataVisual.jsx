import { useEffect, useState } from "react";
import { GET_SENSOR_DATA } from "../Handlers/Api"; // Assuming you have this function to fetch the sensor data
import BloodOxygen from "./BloodOxygen";
import BloodPressure from "./BloodPressure";
import PulseRate from "./PulseRate";
import Temperature from "./Temperature";

function PatientsDataVisual() {
  const [sensorData, setSensorData] = useState([]); // State to store sensor data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GET_SENSOR_DATA(); // Fetch data from backend
        setSensorData(data); // Store the fetched data
        setLoading(false); // Set loading to false when data is loaded
      } catch (err) {
        setError("Failed to fetch sensor data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to map the fetched data to the required format for charts
  const mapSensorDataToCharts = () => {
    // Convert the sensorData into a format that each chart expects
    const pulseRateData = sensorData.map((entry) => ({
      time: entry.timestamp.split("T")[1].split(".")[0], // Use time part only (HH:mm:ss)
      pulse: entry.heart_rate,
    }));

    const bloodPressureData = sensorData.map((entry) => ({
      time: entry.timestamp.split("T")[1].split(".")[0], // Use time part only (HH:mm:ss)
      systolic: entry.systolic_bp,
      diastolic: entry.diastolic_bp,
    }));

    const temperatureData = sensorData.map((entry) => ({
      time: entry.timestamp.split("T")[1].split(".")[0], // Use time part only (HH:mm:ss)
      temperature: entry.temperature,
    }));

    const bloodOxygenData = sensorData.map((entry) => ({
      time: entry.timestamp.split("T")[1].split(".")[0], // Use time part only (HH:mm:ss)
      oxygen: entry.spo2,
    }));

    return {
      pulseRateData,
      bloodPressureData,
      temperatureData,
      bloodOxygenData,
    };
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (error) {
    return <div>{error}</div>; // Show an error message if fetching data fails
  }

  const { pulseRateData, bloodPressureData, temperatureData, bloodOxygenData } = mapSensorDataToCharts(); // Map the data

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="p-12 w-full md:grid lg:grid-cols-2 gap-10">
        <PulseRate pulseRateData={pulseRateData} />
        <BloodPressure bloodPressureData={bloodPressureData} />
        <Temperature temperatureData={temperatureData} />
        <BloodOxygen bloodOxygenData={bloodOxygenData} />
      </div>
    </div>
  );
}

export default PatientsDataVisual;
