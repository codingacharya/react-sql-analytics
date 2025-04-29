import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const SignupChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/analytics/signups')
      .then(response => {
        const data = response.data;

        setChartData({
          labels: data.map(item => item.month),
          datasets: [
            {
              label: 'User Signups',
              data: data.map(item => item.signups),
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
              tension: 0.4,
              fill: true,
              pointRadius: 5,
              pointHoverRadius: 8,
            }
          ]
        });
      })
      .catch(error => console.error('Error fetching signup data:', error));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly User Signups',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {chartData.labels ? <Line data={chartData} options={options} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default SignupChart;
