
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import { MAP_CATEGORIES, NEARBY_BAGS } from '../data/mockData';

const MapExplore = () => {
    const [selectedCategory, setSelectedCategory] = useState('Alla');

  return (
    <div className="w-full h-full bg-[#FDF0E0] text-gray-800 overflow-hidden relative font-body font-fredoka">

        <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-12 pb-4 pointer-events-none">
            <div className="relative pointer-events-auto">
                <div className="flex items-center gap-3 bg-[#f0fdf4] border-3 border-black shadow-doodle rounded-2xl py-2 px-3">
                    <Icon name="search" />
                    <input type="text" placeholder="Sök i Borås..." className="flex-1 bg-transparent border-none p-0 text-black placeholder-gray-500 focus:ring-0 text-base font-bold font-fredoka outline-none" />
                    <Button variant="fab" className="w-10 h-10 p-0 border-none shadow-none bg-[#86efac]/30 hover:bg-[#86efac]/50">
                        <Icon name="tune" size="text-xl" />
                    </Button>
                </div>
                
                <div className="flex gap-3 mt-4 overflow-x-auto hide-scrollbar pb-4 pl-1">
                    {MAP_CATEGORIES.map((category) => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-bold shadow-doodle font-fredoka whitespace-nowrap transform hover:-translate-y-1 transition-transform ${
                                selectedCategory === category 
                                ? 'bg-black text-white' 
                                : 'bg-white text-black border-3 border-black'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>


        <div className="absolute inset-0 z-0 bg-[#dcfce7]">
            <div className="absolute inset-0 bg-[#dcfce7]/40 mix-blend-multiply pointer-events-none z-10"></div>
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdm_I8iYpmY7iMs-v0TPpi0wlH2FM5e32c4isTSW4eKdv9jKSy8u65W-L3qCy4VTYfqCIeQTqpnz0zdtIPc4Z_GjhesWU62Al_HVp9M47wIEUdSjst2iJV18HA-EKjmM4ekyjX9_tc30HK5lKg6m4HmcUgr8YLWKASjqs3o7RsNuQpB3u9UJ8L87z5Z0hChLXlSXuGHF6QaoxGss6gph0KR3HZO5eDTDWtNCyDQRrQPiInz0WNMSuBGID9ozUU16me6F3OtfyE2whl" 
                alt="Map of Borås area showing streets and parks" 
                className="w-full h-full object-cover opacity-60 grayscale-[10%]" 
            />
            
            <div className="map-pin top-[40%] left-[25%] group z-10">
                <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-full shadow-doodle p-1 flex items-center justify-center border-3 border-black group-hover:scale-110 transition-transform">
                        <Avatar src="https://i.pravatar.cc/150?u=user126" alt="Avatar" size="w-full h-full" border={false} />
                    </div>
                    <div className="absolute -bottom-2 -right-1 bg-[#86efac] text-black text-[12px] font-black px-2 py-0.5 rounded-lg border-3 border-black shadow-doodle-sm transform rotate-12">
                        4
                    </div>
                </div>
            </div>
            
            <div className="map-pin top-[55%] left-[60%] z-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#86efac]/40 rounded-full pulse-ring scale-150"></div>
                    <div className="w-16 h-16 bg-[#86efac] rounded-full shadow-doodle p-1 flex items-center justify-center border-3 border-black relative z-10 transform -rotate-3 hover:rotate-0 transition-transform">
                         <Avatar src="https://i.pravatar.cc/150?u=user22" alt="Avatar" size="w-full h-full" border={false} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-black text-[12px] font-black px-2 py-0.5 rounded-lg border-3 border-black shadow-doodle-sm -rotate-6">
                        12
                    </div>
                </div>
            </div>

             <div className="map-pin top-[30%] left-[75%] group z-10">
                <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full shadow-doodle p-1 flex items-center justify-center border-3 border-black group-hover:bg-[#86efac] transition-colors">
                        <Icon name="shopping_bag" />
                    </div>
                </div>
            </div>

            <div className="map-pin top-[65%] left-[30%] group z-10">
                <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full shadow-doodle p-1 flex items-center justify-center border-3 border-black">
                        <Icon name="shopping_bag" />
                    </div>
                </div>
            </div>
        </div>


        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
            <button className="w-12 h-12 bg-white rounded-xl border-3 border-black shadow-doodle flex items-center justify-center text-black hover:bg-[#86efac] transition-colors">
                <Icon name="my_location" />
            </button>
            <button className="w-12 h-12 bg-white rounded-xl border-3 border-black shadow-doodle flex items-center justify-center text-black hover:bg-[#86efac] transition-colors">
                <Icon name="layers" />
            </button>
        </div>


        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#f0fdf4] rounded-t-[40px] shadow-up transition-transform duration-300 transform translate-y-0 max-h-[40vh] flex flex-col border-t-2 border-black pb-24">
             <div className="w-full flex justify-center pt-4 pb-2 cursor-pointer">
                <div className="w-16 h-1.5 bg-black/20 rounded-full"></div>
            </div>
            
            <div className="px-0 pb-6 overflow-y-auto hide-scrollbar flex-1">
                <div className="flex justify-between items-end mb-4 px-6 pt-2">
                    <div>
                        <h2 className="text-2xl font-black text-black font-fredoka tracking-tight">Utforska kassar i närheten</h2>
                        <p className="text-sm font-medium text-gray-500 mt-1">12 kassar i Borås</p>
                    </div>
                     <button className="text-black text-sm font-bold border-b-2 border-[#86efac] hover:bg-[#86efac]/20 px-1 transition-colors">Visa lista</button>
                </div>
                

                <div className="flex overflow-x-auto gap-4 px-6 pb-6 hide-scrollbar snap-x snap-mandatory">
                     <Card className="min-w-[85%] snap-center relative group p-4">
                        <div className="absolute top-4 right-4 z-10">
                             <span className="bg-[#86efac] text-black text-xs font-black px-3 py-1.5 rounded-lg border-3 border-black shadow-sm transform rotate-2 inline-block">
                                Nytt!
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 border-3 border-black">
                                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop" alt="Clothes bag" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h3 className="font-black text-black text-xl leading-tight mb-1 font-fredoka">Barnkläder 98-104</h3>
                                    <p className="text-xs font-bold text-gray-500 flex items-center gap-1">
                                        <Icon name="place" size="text-sm" />
                                        300m bort
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex -space-x-3">
                                        <Avatar src="https://i.pravatar.cc/150?u=user126" size="w-8 h-8" className="border-3 border-white ring-2 ring-black" border={false} />
                                        <Avatar src="https://i.pravatar.cc/150?u=user22" size="w-8 h-8" className="border-3 border-white ring-2 ring-black" border={false} />
                                        <div className="w-8 h-8 rounded-full border-3 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-black relative z-10">+3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <Button className="flex-1">Visa kasse</Button>
                            <Button variant="danger" className="w-12 h-11 px-0 py-0 flex items-center justify-center">
                                <Icon name="favorite_border" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        
        <Navbar active="explore" />
    </div>
  );
};

export default MapExplore;

