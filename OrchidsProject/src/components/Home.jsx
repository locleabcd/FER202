import React from 'react';
import { Link } from 'react-router-dom';
import { orchids } from '../data/ListOfOrchids';

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {orchids.map((orchid) => (
          <div
            key={orchid.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={orchid.image}
              alt={orchid.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{orchid.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{orchid.description}</p>
              <Link
                to={`/detail/${orchid.id}`}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block text-center"
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

export default Home;
