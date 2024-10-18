import Chart from "react-apexcharts"; // Import from react-apexcharts

function BloodPressure() {
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

  const dates = bloodPressureData.map((entry) => entry.date);
  const systolicData = bloodPressureData.map((entry) => entry.systolic);
  const diastolicData = bloodPressureData.map((entry) => entry.diastolic);

  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: dates,
      title: {
        text: 'Date',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Blood Pressure (mmHg)',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      min: 60,
      max: 140,
    },
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      x: {
        format: 'yyyy-MM-dd',
      },
    },
    title: {
      text: 'Patient Blood Pressure ',
      align: 'start',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    colors: ['#1D4ED8', '#EF4444'], // Blue for systolic, red for diastolic
  };

  const chartSeries = [
    {
      name: 'Systolic',
      data: systolicData,
    },
    {
      name: 'Diastolic',
      data: diastolicData,
    },
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
}

export default BloodPressure;
