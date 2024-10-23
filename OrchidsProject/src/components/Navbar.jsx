import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user, logOut } = UserAuth()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  const lightTheme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgb(36 48 63)'
      }
    }
  })
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    <nav className='bg-gray-100 dark:bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-xl font-bold text-gray-900 dark:text-white'>
          Orchid Shop
        </Link>

        <button
          className='text-gray-900 dark:text-white focus:outline-none md:hidden flex flex-col'
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? '✖' : '☰'}
        </button>
        <div className={`md:flex md:items-center ${isDropdownOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <div className='flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 md:ml-auto'>
            <Link
              to='/'
              className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 md:hover:bg-transparent'
            >
              Home
            </Link>
            <Link
              to='/natural'
              className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 md:hover:bg-transparent'
            >
              Natural Orchids
            </Link>
            <Link
              to='/about'
              className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 md:hover:bg-transparent'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 md:hover:bg-transparent'
            >
              Contact
            </Link>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className='ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        {user?.displayName ? (
          <div>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>
                    <Link to='/dashboard'>Dashboard</Link>
                  </Typography>
                </MenuItem>

                <MenuItem>
                  <Typography textAlign='center' onClick={handleSignOut}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </ThemeProvider>
          </div>
        ) : (
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>Sign in</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
