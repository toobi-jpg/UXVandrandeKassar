import React from 'react';

const Icon = ({ name, className = "", size = "text-2xl" }) => {
  return (
    <span className={`material-icons-round ${size} ${className}`}>
      {name}
    </span>
  );
};

export default Icon;
