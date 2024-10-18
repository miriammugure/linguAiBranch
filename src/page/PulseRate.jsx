import Chart from "react-apexcharts"; 

function PulseRate() {
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

  const dates = pulseRateData.map((entry) => entry.date);
  const pulseRates = pulseRateData.map((entry) => entry.pulse);

  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: dates, // Dates as x-axis
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
        text: 'Pulse Rate (BPM)',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      min: 60, // Setting a minimum value for better scaling
      max: 100, // Optional: Set a maximum if desired
    },
    stroke: {
      curve: 'smooth', // Smooth the line
    },
    tooltip: {
      x: {
        format: 'yyyy-MM-dd', 
      },
    },
    title: {
      text: 'Patient Pulse Rate ',
      align: 'start',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    colors: ['#34D399'], 
  };

  const chartSeries = [
    {
      name: 'Pulse Rate',
      data: pulseRates,
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

export default PulseRate;
