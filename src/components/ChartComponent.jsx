import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);
import { useAuth } from '../context/AuthContext';

const ChartComponent = () => {
  const { isDarkMode } = useAuth();

  const pieData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: ['#3b82f6', '#10b981', '#f97316'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#ffffff' : '#000000',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    datasets: [
      {
        label: 'Pengguna',
        data: [100, 120, 150, 130, 180],
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Admin',
        data: [50, 70, 60, 80, 90],
        backgroundColor: '#10b981',
      },
      {
        label: 'Viewer',
        data: [30, 40, 35, 45, 50],
        backgroundColor: '#f59e0b',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#ffffff' : '#000000',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        grid: {
          color: isDarkMode ? '#444444' : '#e0e0e0',
        },
      },
      x: {
        ticks: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        grid: {
          color: isDarkMode ? '#444444' : '#e0e0e0',
        },
      },
    },
  };

  return (
    <>
      <div
        className={`${
          isDarkMode ? 'bg-gray-800 ' : 'bg-white'
        } rounded shadow p-4`}
      >
        <div className="h-[350px]">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div
        className={`${
          isDarkMode ? 'bg-gray-800 ' : 'bg-white'
        } rounded shadow p-4`}
      >
        <div className="h-[350px]">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
