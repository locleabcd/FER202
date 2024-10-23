import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Stating from './StarRating'

const Home = () => {
  const [orchids, setOrchids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const res = await axios.get('https://670c69db7e5a228ec1d0433e.mockapi.io/api/v1/orchird')
        setOrchids(res.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch orchids')
        setLoading(false)
      }
    }

    fetchOrchids()
  }, [])

  if (loading) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>Loading...</h6>
  }

  if (error) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>{error}</h6>
  }

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {orchids.map((orchid) => (
          <div
            key={orchid.id}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300'
          >
            <img src={orchid.image} alt={orchid.orchidName} className='w-full h-40 object-cover' />
            <div className='p-4 flex-grow flex flex-col'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold mb-2'>{orchid.orchidName}</h3>
                {orchid.isNatural && <span className='text-yellow-500 text-xl'>👑</span>}
              </div>
              <p className='text-gray-600 dark:text-gray-300 flex-grow'>{orchid.category}</p>
              <Stating rating={orchid.rating} />
              <Link
                to={`/detail/${orchid.id}`}
                className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block text-center'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
