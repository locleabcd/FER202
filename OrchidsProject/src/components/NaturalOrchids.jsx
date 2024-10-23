import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Stating from './StarRating'

const NaturalOrchids = () => {
  const [naturalOrchids, setNaturalOrchids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const getOrchid = async () => {
    try {
      const res = await axios.get('https://670c69db7e5a228ec1d0433e.mockapi.io/api/v1/orchird')
      const naturalOrchids = res.data?.data
        ? res.data.data.filter((orchid) => orchid.isNatural === true)
        : res.data.filter((orchid) => orchid.isNatural === true) || []

      setNaturalOrchids(naturalOrchids)
      setLoading(false)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Error fetching orchid')
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    getOrchid()
  }, [])
  if (loading) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>Loading...</h6>
  }

  if (error) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>{error}</h6>
  }

  if (naturalOrchids.length == 0) {
    return <h6 className='text-center mt-4 dark:text-gray-300'>Orchid not found!</h6>
  }

  return (
    <div className='container mx-auto mt-4 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {naturalOrchids.map((orchid) => (
          <div
            key={orchid.id}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300'
          >
            <img
              src={orchid.image}
              alt={orchid.orchidName}
              className='w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300'
            />
            <div className='p-4 flex flex-col flex-grow'>
              <h5 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
                {orchid.orchidName}
              </h5>
              <p className='text-gray-600 dark:text-gray-400 flex-grow hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'>
                {orchid.category}
              </p>
              <Stating rating={orchid.rating} />
              <Link
                to={`/detail/${orchid.id}`}
                className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300'
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

export default NaturalOrchids
