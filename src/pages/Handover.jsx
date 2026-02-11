

import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import SectionHeader from '../components/ui/SectionHeader';
import { HANDOVER_ITEMS, NEXT_PERSON } from '../data/mockData';

const Handover = () => {
  return (
    <div className="w-full h-full bg-[#EFFFE4] flex flex-col font-jakarta relative overflow-hidden">

         <header className="px-6 pt-12 pb-4 flex items-center justify-between z-20">
                <Button variant="icon" className="w-10 h-10">
                    <Icon name="arrow_back" />
                </Button>
            <h1 className="text-2xl font-bold text-black font-fredoka">Lämna vidare</h1>
            <div className="w-10"></div>
        </header>

        <main className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32 space-y-6">
            

            <Card className="bg-white">
                <SectionHeader 
                    title="Plagg jag har tagit" 
                    icon="checkroom"
                    className="mb-0" 
                />
                <p className="text-xs text-gray-800 mb-4 font-bold">Markera de plagg du behåller</p>
                
                <div className="grid grid-cols-2 gap-3">

                    {HANDOVER_ITEMS.map((item) => (
                        <div key={item.id}>
                            <div className={`aspect-square border-3 border-black rounded-xl overflow-hidden mb-2 relative group cursor-pointer hover:shadow-md transition-shadow ${item.isProfile ? 'bg-[#fae8e0] p-2 flex items-center justify-center' : 'bg-white'}`}>
                                {item.isProfile ? (
                                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
                                            <h4 className="font-serif italic text-lg text-white drop-shadow-md">Linas Profil</h4>
                                            <p className="text-[8px] uppercase tracking-widest mt-1 text-white drop-shadow-md">{item.name}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                )}

                                 <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-3 border-black bg-white flex items-center justify-center">
                                    {item.selected && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                </div>
                            </div>
                            <p className="font-bold text-xs">{item.name}</p>
                            <p className="text-[10px] font-bold text-gray-800">{item.details}</p>
                        </div>
                    ))}

                    <div className="aspect-square bg-[#ffe4e6] border-3 border-black border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#fed7d7] transition-colors">
                        <Icon name="add_a_photo" size="text-3xl" className="mb-1" />
                        <span className="font-bold text-xs">Lägg till</span>
                    </div>

                </div>
            </Card>


             <section>
                <SectionHeader 
                    title="Nästa person i kön" 
                    icon="person" 
                />

                <Card className="bg-[#e0f2fe] flex items-center gap-4 relative">
                    <span className="absolute -top-3 -right-2 bg-[#fcd34d] border-3 border-black text-xs font-black px-2 py-1 transform rotate-6 rounded-lg shadow-sm">{NEXT_PERSON.status}</span>
                    
                    <Avatar src={NEXT_PERSON.avatar} alt={NEXT_PERSON.name} size="w-16 h-16" />
                    
                    <div className="flex-1">
                        <h3 className="font-black text-lg">{NEXT_PERSON.name}</h3>
                        <p className="text-xs font-bold text-gray-600 mb-2">Bor {NEXT_PERSON.distance} bort</p>
                        
                        <div className="flex gap-2">
                            <Button variant="secondary" className="px-3 py-1 text-xs h-auto" icon="chat_bubble">
                                Chat
                            </Button>
                             <Button variant="secondary" className="px-3 py-1 text-xs h-auto" icon="map">
                                Karta
                            </Button>
                        </div>
                    </div>
                </Card>
             </section>
             

        </main>
        
        <Navbar active="create" />
    </div>
  );
};

export default Handover;

