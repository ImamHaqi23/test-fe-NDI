import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Menu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useAuth();

  const handleLogout = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { name: 'Home', action: () => navigate('/home') },
    { name: 'Analytics', action: () => navigate('/analytics') },
    { name: 'User ', action: () => {} },
    { name: 'Setting', action: () => {} },
  ];

  return (
    <nav
      className={`w-full ${
        isDarkMode ? 'bg-gray-800' : 'bg-blue-600'
      } text-white flex justify-between items-center px-6 py-3 shadow-md relative`}
    >
      <h1 className="text-xl font-bold">Nusantara Data Indonesia</h1>

      <div className="flex-grow hidden lg:flex justify-center">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="py-2 px-4 rounded-lg transition-all transform hover:bg-blue-700 hover:scale-105 hover:shadow-md font-semibold cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4 ">
        <button onClick={toggleDarkMode} className="text-white cursor-pointer">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={handleLogout}
          className="hidden lg:block bg-red-500 px-4 py-2 font-semibold rounded-lg transition-all hover:bg-red-600 hover:scale-105 hover:shadow-md cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Hamburger Icon untuk Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full ${
          isDarkMode ? 'bg-gray-800' : 'bg-blue-600'
        } text-white py-6 px-6 transition-transform transform z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={closeMenu}
            className="text-white text-2xl font-bold hover:text-gray-200 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
              closeMenu();
            }}
            className="block w-full text-left py-3 px-4 rounded-lg transition-all transform hover:bg-blue-700 hover:scale-105 hover:shadow-md cursor-pointer"
          >
            {item.name}
          </button>
        ))}

        <button
          onClick={() => {
            handleLogout();
            closeMenu();
          }}
          className="mt-6 w-full bg-red-500 px-4 py-2 rounded-lg transition-all hover:bg-red-600 hover:scale-105 hover:shadow-md cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Menu;
