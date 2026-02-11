import React from 'react';
import Icon from './Icon';

const SectionHeader = ({ title, icon, action, className = "" }) => {
  return (
    <div className={`flex justify-between items-center mb-2 ${className}`}>
      <div className="flex items-center gap-2">
        {icon && <Icon name={icon} size="text-sm" className={action ? "" : "pointer-events-none"} />}
        <h2 className="text-lg font-bold font-fredoka tracking-wider">{title}</h2>
      </div>
      {action}
    </div>
  );
};

export default SectionHeader;
