import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StarRating = ({ rating }) => {
  const maxStars = 5

  return (
    <div className='text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300'>
      <div className='flex items-center'>
        {[...Array(maxStars)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={`text-xl mr-1 ${i < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-500'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default StarRating
