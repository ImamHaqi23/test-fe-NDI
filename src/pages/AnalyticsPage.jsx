import React from 'react';
import Menu from '../components/Menu';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { isDarkMode } = useAuth();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <Menu />
      <div
        className={`p-6 max-w-7xl mx-auto ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Analytic</h2>
      </div>
    </div>
  );
};

export default HomePage;
