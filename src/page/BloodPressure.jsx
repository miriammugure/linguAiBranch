import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

function BloodPressure({ bloodPressureData = [] }) {
  if (!bloodPressureData.length) return <div>No blood pressure data available</div>;

  const times = bloodPressureData.map((entry) => entry.time);
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
        text: 'Blood Pressure (mmHg)',
      },
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
      text: 'Patient Blood Pressure',
      align: 'start',
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
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
}

BloodPressure.propTypes = {
  bloodPressureData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      systolic: PropTypes.number.isRequired,
      diastolic: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BloodPressure;
