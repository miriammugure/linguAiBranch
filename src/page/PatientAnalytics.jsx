import BloodOxygen from "./BloodOxygen";
import BloodPressure from "./BloodPressure";
import PulseRate from "./PulseRate";
import Temperature from "./Temperature";

function PatientAnalytics() {
  const pulseRateData = [
    { date: '2024-10-01', pulse: 72 },
    { date: '2024-10-02', pulse: 76 },
    { date: '2024-10-03', pulse: 78 },
    { date: '2024-10-04', pulse: 70 },
    { date: '2024-10-05', pulse: 75 },
    { date: '2024-10-06', pulse: 80 },
    { date: '2024-10-07', pulse: 74 },
    { date: '2024-10-08', pulse: 73 },
    { date: '2024-10-09', pulse: 71 },
    { date: '2024-10-10', pulse: 77 },
    { date: '2024-10-11', pulse: 79 },
    { date: '2024-10-12', pulse: 82 },
    { date: '2024-10-13', pulse: 75 },
    { date: '2024-10-14', pulse: 76 },
  ];
  const bloodPressureData = [
    { date: '2024-10-01', systolic: 120, diastolic: 80 },
    { date: '2024-10-02', systolic: 118, diastolic: 82 },
    { date: '2024-10-03', systolic: 122, diastolic: 78 },
    { date: '2024-10-04', systolic: 115, diastolic: 75 },
    { date: '2024-10-05', systolic: 125, diastolic: 85 },
    { date: '2024-10-06', systolic: 130, diastolic: 88 },
    { date: '2024-10-07', systolic: 117, diastolic: 79 },
    { date: '2024-10-08', systolic: 123, diastolic: 81 },
    { date: '2024-10-09', systolic: 119, diastolic: 76 },
    { date: '2024-10-10', systolic: 121, diastolic: 80 },
    { date: '2024-10-11', systolic: 126, diastolic: 82 },
    { date: '2024-10-12', systolic: 129, diastolic: 84 },
    { date: '2024-10-13', systolic: 124, diastolic: 79 },
    { date: '2024-10-14', systolic: 122, diastolic: 78 },
  ];
  const temperatureData = [
    { date: '2024-10-01', temperature: 36.7 },
    { date: '2024-10-02', temperature: 36.8 },
    { date: '2024-10-03', temperature: 37.1 },
    { date: '2024-10-04', temperature: 36.9 },
    { date: '2024-10-05', temperature: 37.0 },
    { date: '2024-10-06', temperature: 36.6 },
    { date: '2024-10-07', temperature: 36.8 },
    { date: '2024-10-08', temperature: 37.2 },
    { date: '2024-10-09', temperature: 36.9 },
    { date: '2024-10-10', temperature: 37.1 },
    { date: '2024-10-11', temperature: 36.7 },
    { date: '2024-10-12', temperature: 36.8 },
    { date: '2024-10-13', temperature: 37.0 },
    { date: '2024-10-14', temperature: 37.1 },
  ];
  const bloodOxygenData = [
    { date: '2024-10-01', oxygen: 98 },
    { date: '2024-10-02', oxygen: 97 },
    { date: '2024-10-03', oxygen: 99 },
    { date: '2024-10-04', oxygen: 98 },
    { date: '2024-10-05', oxygen: 97 },
    { date: '2024-10-06', oxygen: 96 },
    { date: '2024-10-07', oxygen: 98 },
    { date: '2024-10-08', oxygen: 99 },
    { date: '2024-10-09', oxygen: 97 },
    { date: '2024-10-10', oxygen: 98 },
    { date: '2024-10-11', oxygen: 99 },
    { date: '2024-10-12', oxygen: 97 },
    { date: '2024-10-13', oxygen: 96 },
    { date: '2024-10-14', oxygen: 98 },
  ];
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

export default PatientAnalytics;