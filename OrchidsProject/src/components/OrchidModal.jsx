import React from 'react';

const OrchidModal = ({ orchid, onClose }) => {
  if (!orchid) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div 
        className='bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md text-gray-600 dark:text-gray-300 flex items-center justify-center hover:shadow-2xl transition-shadow duration-300'
      >
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>{orchid.name}</h2>
          <img
            src={orchid.image}
            alt={orchid.name}
            className='w-full h-40 object-cover mb-4 rounded hover:opacity-90 transition-opacity duration-300'
          />
          <p className='mb-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Category:</span> {orchid.category}</p>
          <p className='mb-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Price:</span> ${(orchid.price / 1000).toFixed(2)}k</p>
          <p className='mb-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Promotion:</span> {orchid.promotion}</p>
          <p className='mb-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Description:</span> {orchid.description}</p>
          <p className='mb-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Detailed Description:</span> {orchid.descriptionDetail}</p>
          <p className='mb-4 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'><span className='font-semibold'>Rating:</span> {orchid.rating}/5</p>
          <button 
            onClick={onClose}
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrchidModal;