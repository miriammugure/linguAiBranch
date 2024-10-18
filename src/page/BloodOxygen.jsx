import Chart from "react-apexcharts";

function BloodOxygen() {
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

  const dates = bloodOxygenData.map((entry) => entry.date);
  const oxygenLevels = bloodOxygenData.map((entry) => entry.oxygen);

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
        text: 'Blood Oxygen Level (%)',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      min: 90, 
      max: 100,
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
      text: 'Patient Blood Oxygen Levels',
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
      name: 'Blood Oxygen Level',
      data: oxygenLevels,
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

export default BloodOxygen;
