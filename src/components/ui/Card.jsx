import React from 'react';

const Card = ({ children, className = "", onClick, noPadding = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white border-3 border-black rounded-[24px] shadow-doodle-sm overflow-hidden ${noPadding ? '' : 'p-4'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
