import React from 'react';
import { Link } from 'react-router-dom';
import { orchids } from '../data/ListOfOrchids';

const NaturalOrchids = () => {
  const naturalOrchids = orchids.filter(orchid => orchid.isSpecial);

  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {naturalOrchids.map((orchid) => (
          <div key={orchid.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <img 
              src={orchid.image} 
              alt={orchid.name} 
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h5 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">{orchid.name}</h5>
              <p className="text-gray-600 dark:text-gray-400 flex-grow hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">{orchid.description}</p>
              <Link 
                to={`/detail/${orchid.id}`} 
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NaturalOrchids;