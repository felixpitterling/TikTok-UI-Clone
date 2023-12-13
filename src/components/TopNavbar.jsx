import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  const redirectToHomepage = () => {
    // Replace 'vivamuenchen.de' with the actual URL you want to redirect to
    window.location.href = 'https://vivamuenchen.de';
  };

  return (
    <div className="top-navbar">
      <h2 onClick={redirectToHomepage}>
        Zurück zur Homepage  <FontAwesomeIcon icon={faHouse} className='icon'/>
      </h2>
    </div>
  );
};

export default TopNavbar;
