import React from 'react';

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-black text-white",
    outline: "bg-white border border-black text-black",
    warning: "bg-[#fcd34d] border-3 border-black text-black",
    distance: "bg-white border border-black text-black",
    price: "bg-white/90 border border-black text-black"
  };

  const baseStyles = "text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center justify-center";

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
