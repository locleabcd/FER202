import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import OrchidDetail from './components/OrchidDetail'
import About from './components/About'
import NaturalOrchids from './components/NaturalOrchids'
import Contact from './components/Contact'
import useTheme from './hooks/ThemeToggle'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Protected from './components/Protected'
import OrchidUpdate from './components/OrchidUpdate'
function App() {
  const [isDarkMode, toggleTheme] = useTheme()

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}
    >
      <div className='text-gray-900 dark:text-gray-100 transition-colors duration-300'>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className='container mx-auto px-4 py-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<OrchidDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/natural' element={<NaturalOrchids />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/dashboard'
              element={
                <Protected>
                  <Dashboard isDarkMode={isDarkMode} />
                </Protected>
              }
            />
            <Route path='/orchid/:id/edit' element={<OrchidUpdate isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
