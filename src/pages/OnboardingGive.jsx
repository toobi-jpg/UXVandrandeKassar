

import React from 'react';
import Button from '../components/ui/Button';

const OnboardingGive = () => {
  return (
    <div className="w-full h-full bg-[#FDF0E0] shadow-2xl overflow-hidden relative flex flex-col justify-between transition-colors duration-300">
        <div className="pt-12 px-8">
            <div className="flex gap-2 mb-8">
                <div className="h-1 flex-1 bg-black/20 rounded-full"></div>
                <div className="h-1 flex-1 bg-black/20 rounded-full"></div>
                <div className="h-1 flex-1 bg-black rounded-full"></div>
            </div>
             <h1 className="text-4xl font-extrabold text-primary leading-[1.1] tracking-tight font-fredoka translate-y-4">
                Ge & Få
            </h1>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 relative">
            <img src="/1.webp" alt="Onboarding Intro" />
        </div>

        <div className="px-8 pb-10">
            <div className="absolute bottom-48 w-full text-center left-0">
                <p className="text-lg text-gray-800 leading-relaxed font-medium tracking-tight">
                    Gå med i din lokala rörelse!
                </p>
            </div>
            
            <div className="flex flex-col w-full items-center justify-between gap-4 font-fredoka">
                 <Button className="w-full py-4 px-8 text-lg rounded-full hover:opacity-90">
                    Utforska Kassar
                </Button>
                 <Button variant="secondary" className="w-full bg-transparent py-4 px-8 text-lg rounded-full hover:opacity-90">
                    Logga in
                </Button>
            </div>
        </div>
    </div>
  );
};

export default OnboardingGive;
