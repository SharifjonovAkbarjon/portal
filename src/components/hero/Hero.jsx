import React from 'react';
import Sport from '../sport/Sport';

const Hero = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-900'} py-10`}>
      <Sport darkMode={darkMode} />
    </div>
  );
};

export default Hero;
