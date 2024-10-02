import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OrchidDetail from './components/OrchidDetail';
import About from './components/About';
import NaturalOrchids from './components/NaturalOrchids';
import Contact from './components/Contact';
import useTheme from './hooks/ThemeToggle';

function App() {
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <div className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<OrchidDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/natural" element={<NaturalOrchids />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;