import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">Orchid Shop</Link>
        <div className="flex items-center">
          <Link to="/" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link to="/natural" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Natural Orchids</Link>
          <Link to="/about" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
          <Link to="/contact" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
          <button 
            onClick={toggleTheme} 
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;