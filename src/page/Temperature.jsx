import Chart from "react-apexcharts";

function Temperature() {
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

  const dates = temperatureData.map((entry) => entry.date);
  const temperatures = temperatureData.map((entry) => entry.temperature);

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
        text: 'Temperature (°C)',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      min: 35.5, // Adjust min and max based on temperature range
      max: 38.0,
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
      text: 'Patient Temperature ',
      align: 'start',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    colors: ['#F59E0B'], 
  };

  const chartSeries = [
    {
      name: 'Temperature',
      data: temperatures,
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

export default Temperature;
