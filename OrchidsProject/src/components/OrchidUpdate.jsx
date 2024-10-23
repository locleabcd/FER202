import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaSpinner } from 'react-icons/fa'
import Switch from '@mui/material/Switch'

function OrchidUpdate({ isDarkMode }) {
  const { id } = useParams() // Get the orchid ID from the URL params
  const navigate = useNavigate() // For navigation
  const baseUrl = 'https://670c69db7e5a228ec1d0433e.mockapi.io/api/v1/orchird'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [orchid, setOrchid] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const getOrchid = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`${baseUrl}/${id}`)
      setOrchid(res.data)
      // Pre-populate form fields with the fetched data
      Object.keys(res.data).forEach((key) => {
        setValue(key, res.data[key])
      })
    } catch (error) {
      console.log('Error fetching orchid:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getOrchid()
  }, [id])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await axios.put(`${baseUrl}/${id}`, data)
      toast.success('Orchid updated successfully!')
      navigate('/dashboard')
    } catch (err) {
      console.log('Error updating orchid:', err)
      toast.error('Failed to update orchid.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className='fixed inset-0 px-4 py-2 flex items-center justify-center z-50'>
        <FaSpinner className='animate-spin text-green-500 text-6xl' />
      </div>
    )
  }

  if (!orchid) return null

  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-3xl font-bold mb-6'>Update Orchid</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='mb-4'>
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Is Natural
          </label>
          <Switch {...register('isNatural')} className='mr-2' inputProps={{ 'aria-label': 'Is Natural' }} />
        </div>

        <div className='mb-4'>
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Is Attractive
          </label>
          <Switch {...register('isAttractive')} className='mr-2' inputProps={{ 'aria-label': 'Is Attractive' }} />
        </div>

        <div className='mb-4'>
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
          <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
            {isSubmitting ? 'Submitting...' : 'Update Orchid'}
          </button>
          <button onClick={() => navigate(-1)} type='button' className='px-4 py-2 bg-red-500 text-white rounded'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrchidUpdate
