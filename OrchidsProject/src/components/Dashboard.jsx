import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaSpinner } from 'react-icons/fa'
import Switch from '@mui/material/Switch'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { ImCheckboxChecked } from 'react-icons/im'
import { ImCheckboxUnchecked } from 'react-icons/im'
import Stating from './StarRating'
function Dashboard({ isDarkMode }) {
  const baseUrl = 'https://670c69db7e5a228ec1d0433e.mockapi.io/api/v1/orchird'
  const [orchids, setOrchids] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const lightTheme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgb(36 48 63 / var(--tw-bg-opacity))',
        paper: 'rgb(36 48 63 / var(--tw-bg-opacity))'
      }
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const getOrchid = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(baseUrl)
      setOrchids(res.data)
      console.log(res.data)
    } catch (error) {
      console.log('Error : ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getOrchid()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => (
        <div className='h-full flex items-center'>
          <img src={params.row.image} alt='Image' className='w-24 h-16 object-cover rounded-md' />
        </div>
      )
    },
    { field: 'orchidName', headerName: 'Name', width: 150 },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 150,
      renderCell: (params) => (
        <div className='h-full flex items-center'>
          <Stating rating={params.row.rating} />
        </div>
      )
    },
    { field: 'origin', headerName: 'Origin', width: 150 },

    {
      field: 'isNatural',
      headerName: 'Natural',
      width: 120,
      renderCell: (params) => (
        <div className='h-full flex items-center'>
          {params.row.isNatural ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
      )
    },

    { field: 'category', headerName: 'Category', width: 150 },
    {
      field: 'isAttractive',
      headerName: 'Attractive',
      width: 150,
      renderCell: (params) => (
        <div className='h-full flex items-center'>
          {params.row.isAttractive ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
      )
    },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'link', headerName: 'Link', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <div className='flex h-full justify-center items-center'>
          <Link
            to={`/orchid/${params.row.id}/edit`}
            className='p-1 hover:bg-green-500 text-green-500 hover:text-white rounded-full'
          >
            <FaEdit />
          </Link>
          <button
            className='p-1 hover:bg-red-500 text-red-600 hover:text-white rounded-full'
            onClick={() => deleteOrchid(params.row.id)}
          >
            <FaTrash />
          </button>
        </div>
      )
    }
  ]

  const onSubmit = async (data) => {
    console.log('onSubmit:', data)
    setIsLoading(true)
    setIsSubmitting(true)
    try {
      await axios.post(baseUrl, data)
      toast.success('Orchid created successfully!')
      setOpenCreate(false)
      getOrchid()
    } catch (err) {
      console.log(err)
      toast.error('Failed to create orchid.')
    } finally {
      setIsLoading(false)
      setIsSubmitting(false)
    }
  }

  const deleteOrchid = async (id) => {
    const isConfirmed = window.confirm('Are you sure to delete tag')
    if (!isConfirmed) {
      return
    }
    setIsLoading(true)
    try {
      await axios.delete(`${baseUrl}/${id}`)
      toast.success('Orchid deleted successfully')
      getOrchid()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className={`flex flex-col h-full min-h-screen `}>
        <div className='flex-grow mx-6'>
          <h1 className='text-3xl font-bold my-10'>Orchid Dashboard</h1>
          <button onClick={() => setOpenCreate(true)} className='bg-blue-500 text-white px-4 py-2 rounded-lg mb-4'>
            New Orchid
          </button>

          {openCreate && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
              <div className={`rounded-lg p-8 w-full max-w-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Add New Orchid
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Orchid Name Field */}
                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Orchid Name
                    </label>
                    <input
                      type='text'
                      {...register('orchidName', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100 bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter orchid name'
                    />
                    {errors.orchidName && <p className='text-red-500'>Name is required</p>}
                  </div>

                  {/* Origin Field */}
                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Origin
                    </label>
                    <input
                      type='text'
                      {...register('origin', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100  bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter origin'
                    />
                    {errors.origin && <p className='text-red-500'>Origin is required</p>}
                  </div>

                  {/* Link Field */}
                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Link
                    </label>
                    <input
                      type='url'
                      {...register('link', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100  bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter link'
                    />
                    {errors.link && <p className='text-red-500'>Link is required</p>}
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Is Natural
                    </label>
                    <Switch {...register('isNatural')} className='mr-2' inputProps={{ 'aria-label': 'Is Natural' }} />
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Description
                    </label>
                    <textarea
                      {...register('description', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100 bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter description'
                    />
                    {errors.description && <p className='text-red-500'>Description is required</p>}
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Category
                    </label>
                    <input
                      type='text'
                      {...register('category', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100 bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter category'
                    />
                    {errors.category && <p className='text-red-500'>Category is required</p>}
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Is Attractive
                    </label>
                    <Switch
                      {...register('isAttractive')}
                      className='mr-2'
                      inputProps={{ 'aria-label': 'Is Attractive' }}
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Rating
                    </label>
                    <input
                      type='number'
                      {...register('rating', {
                        required: true,
                        min: 0,
                        max: 5
                      })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100 bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter rating (0-5)'
                    />
                    {errors.rating && <p className='text-red-500'>Rating is required and must be between 0 and 5</p>}
                  </div>

                  <div className='mb-4'>
                    <label
                      className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      Image URL
                    </label>
                    <input
                      type='url'
                      {...register('image', { required: true })}
                      className={`w-full border ${
                        isDarkMode ? 'border-gray-600 text-gray-100 bg-slate-500' : 'border-gray-300 text-gray-900'
                      } p-2 rounded`}
                      placeholder='Enter image URL'
                    />
                    {errors.image && <p className='text-red-500 '>Image URL is required</p>}
                  </div>

                  <div className='flex justify-between items-center'>
                    <button
                      type='submit'
                      className='px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Add Orchid'}
                    </button>
                    <button
                      onClick={() => setOpenCreate(false)}
                      type='button'
                      className='px-4 py-2 bg-red-500 text-white rounded '
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Paper style={{ height: 700, width: '98%', margin: '0 0 30px' }}>
              <DataGrid
                rows={orchids}
                columns={columns}
                pageSizeOptions={[5, 10, 20, 50, 100]}
                disableExtendRowFullWidth
                rowHeight={80}
              />
            </Paper>
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
