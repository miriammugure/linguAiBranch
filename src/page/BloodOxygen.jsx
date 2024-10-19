import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

function BloodOxygen({ bloodOxygenData = [] }) {
  if (!bloodOxygenData.length) return <div>No blood oxygen data available</div>;

  const times = bloodOxygenData.map((entry) => entry.time);
  const oxygenLevels = bloodOxygenData.map((entry) => entry.oxygen);

  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: times, // Times as x-axis
      title: {
        text: 'Time',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      labels: {
        format: 'HH:mm:ss', // Time format (hours:minutes:seconds)
      },
    },
    yaxis: {
      title: {
        text: 'Blood Oxygen Level (%)',
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
    },
    colors: ['#34D399'], // Green color for oxygen levels
  };

  const chartSeries = [
    {
      name: 'Oxygen Level',
      data: oxygenLevels,
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
}

BloodOxygen.propTypes = {
  bloodOxygenData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      oxygen: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BloodOxygen;
