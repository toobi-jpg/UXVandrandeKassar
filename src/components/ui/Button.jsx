import React from 'react';
import Icon from './Icon';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary, secondary, icon, ghost
  className = "", 
  icon,
  iconSize = "text-xl",
  type = "button"
}) => {
  
  const baseStyles = "font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 rounded-xl py-3 px-4 shadow-md border-3 border-black",
    secondary: "bg-white text-black border-3 border-black rounded-xl py-3 px-4 hover:bg-gray-50 shadow-doodle-sm",
    icon: "bg-white border-3 border-black text-black rounded-full hover:bg-gray-50 shadow-doodle-sm flex items-center justify-center",
    ghost: "bg-transparent text-black hover:bg-black/5 rounded-lg px-2 py-1",
    danger: "bg-white border-3 border-black text-black hover:bg-red-50 hover:text-red-500 hover:border-red-500 rounded-xl",
    fab: "bg-[#86efac]/30 text-black border-3 border-black hover:bg-[#86efac]/50 shadow-doodle-sm rounded-full"
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button 
      type={type}
      className={combinedClassName}
      onClick={onClick}
    >
      {icon && <Icon name={icon} className={children ? "" : ""} size={iconSize} />}
      {children}
    </button>
  );
};

export default Button;
