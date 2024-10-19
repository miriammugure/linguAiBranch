import PropTypes from 'prop-types';


import Chart from "react-apexcharts";

function PulseRate({ pulseRateData = [] }) {
  if (!pulseRateData.length) return <div>No pulse rate data available</div>;

  const times= pulseRateData.map((entry) => entry.time);
  const pulseRates = pulseRateData.map((entry) => entry.pulse);

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
        text: 'Pulse Rate (BPM)',
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      min: 60,
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
      text: 'Patient Pulse Rate',
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

  return <Chart options={chartOptions} series={chartSeries} type="line" height={350} />;
}
PulseRate.propTypes = {
    pulseRateData: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        pulse: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
export default PulseRate;

