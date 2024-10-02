import React from 'react';
import { orchids } from '../data/ListOfOrchids';
import OrchidsList from './OrchidsList';
import OrchidModal from './OrchidModal';

const OrchidsContainer = () => {
  const [selectedOrchid, setSelectedOrchid] = React.useState(null);

  const handleShowDetails = (orchid) => {
    setSelectedOrchid(orchid);
  };

  const handleCloseModal = () => {
    setSelectedOrchid(null);
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300'>
      <OrchidsList orchids={orchids} onShowDetails={handleShowDetails} /> 
      {selectedOrchid && <OrchidModal orchid={selectedOrchid} onClose={handleCloseModal} />}
    </div>
  );
};

export default OrchidsContainer;