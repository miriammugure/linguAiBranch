import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

function Temperature({ temperatureData = [] }) {
  if (!temperatureData.length) return <div>No temperature data available</div>;

  const times = temperatureData.map((entry) => entry.time);
  const temperatures = temperatureData.map((entry) => entry.temperature);

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
        text: 'Temperature (°C)',
      },
      min: 35.5,
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
      text: 'Patient Temperature',
      align: 'start',
    },
    colors: ['#F59E0B'], // Yellow color for temperature
  };

  const chartSeries = [
    {
      name: 'Temperature',
      data: temperatures,
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
}

Temperature.propTypes = {
  temperatureData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Temperature;
