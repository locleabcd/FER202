import React from 'react';
import OrchidCard from './OrchidCard';

const OrchidsList = ({ orchids, onShowDetails }) => {
  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {orchids.map((orchid) => (
        <div key={orchid.id} className="w-full hover:transform hover:scale-105 transition-transform duration-300">
          <OrchidCard orchid={orchid} onShowDetails={onShowDetails} />
        </div>
      ))}
    </div>
  );
};

export default OrchidsList;