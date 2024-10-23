import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Stating from './StarRating'
const OrchidDetail = () => {
  const { id } = useParams()
  const [orchid, setOrchid] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOrchid = async () => {
      try {
        const res = await axios.get(`https://670c69db7e5a228ec1d0433e.mockapi.io/api/v1/orchird/${id}`)
        setOrchid(res.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch orchid details')
        setLoading(false)
      }
    }
    fetchOrchid()
  }, [id])

  if (loading) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>Loading...</h6>
  }

  if (error) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>{error}</h6>
  }

  if (!orchid) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>Orchid not found!</h6>
  }

  return (
    <div className='container mx-auto mt-4 px-4'>
      <div className='max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
        <img
          src={orchid.image}
          alt={orchid.orchidName}
          className='w-full h-80 object-cover hover:opacity-90 transition-opacity duration-300'
        />
        <div className='p-6'>
          <h5 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
            {orchid.orchidName}
          </h5>
          <div className='space-y-2'>
            <p className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'>
              <span className='font-bold'>Category:</span> {orchid.category}
            </p>
            <p className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'>
              <span className='font-bold'>Origin:</span> {orchid.origin}
            </p>
            <p className='mt-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300'>
              <span className='font-bold'>Description:</span> {orchid.description}
            </p>
            <div>
              <p className='text-gray-600 font-bold dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'>
                <span className='font-bold'>Rating:</span>
                <Stating rating={orchid.rating} />
              </p>
            </div>
            {orchid.link && (
              <div className='mt-6'>
                <p className='font-bold mb-2 text-gray-800 dark:text-gray-200'>Video:</p>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe
                    src={`${orchid.link}`}
                    title={`${orchid.orchidName} video`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    width='620'
                    height='315'
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          <Link
            to='/'
            className='mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrchidDetail
