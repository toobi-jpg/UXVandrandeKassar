

import React from 'react';
import { NAV_LINKS } from '../constants/navigation';
import Icon from './ui/Icon';

const Navbar = ({ active = 'home' }) => {

  return (
    <nav className="absolute bottom-0 w-full bg-white pb-1.5 pt-3.5 px-1 z-30 rounded-t-[35px] shadow-[0_-8px_6px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center px-4">
        {NAV_LINKS.map((item) => (
          <div key={item.id} className="flex-1 flex justify-center mb-2">
            <a href={item.path} className="group flex flex-col items-center gap-1">
              <div className={`
                flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200
                ${active === item.id 
                  ? 'bg-[#F3FFD6] shadow-doodle' 
                  : 'bg-transparent border-3 border-transparent'}
              `}>
                <Icon 
                  name={item.icon} 
                  size="text-3xl" 
                  className={`transition-transform group-hover:scale-110 ${active === item.id ? 'text-black' : 'text-black/80'}`} 
                />
              </div>

            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
