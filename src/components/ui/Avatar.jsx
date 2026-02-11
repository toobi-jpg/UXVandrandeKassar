import React from 'react';

const Avatar = ({ src, alt, size = "w-12 h-12", className = "", border = true }) => {
  return (
    <div className={`${size} rounded-full overflow-hidden ${border ? 'border-3 border-black' : ''} ${className} shrink-0 bg-gray-200`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
