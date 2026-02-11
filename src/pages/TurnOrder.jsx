
import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import { TURN_ORDER_USERS } from '../data/mockData';

const TurnOrder = () => {
  return (
    <div className="w-full h-full bg-[#FDF0E0] flex flex-col font-jakarta relative overflow-hidden">

         <header className="px-6 pt-12 pb-4 flex items-center justify-between z-20">
                <Button variant="icon" className="w-10 h-10">
                    <Icon name="arrow_back" />
                </Button>
            <h1 className="text-2xl font-bold text-black font-fredoka">Turordning</h1>
            <Button variant="ghost" className="w-10 h-10 p-0 hover:bg-transparent">
                <Icon name="info_outline" />
            </Button>
        </header>

        <main className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32 space-y-8">
            

            <Card className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 border-3 border-black rounded-xl overflow-hidden flex items-center justify-center">
                    <Icon name="shopping_bag" size="text-4xl" className="text-gray-400" />
                </div>
                <div>
                    <h2 className="font-bold text-lg leading-tight">Sommarbarn Mix</h2>
                    <p className="text-xs text-gray-800 font-bold mt-1">Stl 98-104 • 8 Plagg</p>
                    <Badge variant="outline" className="mt-2 bg-green-100 text-green-800 shadow-doodle-sm border-black">
                        Aktiv
                    </Badge>
                </div>
            </Card>


            <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4">Kölista</h3>
                <div className="space-y-6 relative">

                    <div className="absolute left-[26px] top-4 bottom-4 w-0.5 bg-gray-200 z-0"></div>

                    {TURN_ORDER_USERS.map((user, index) => (
                        <div key={user.id} className="flex items-start gap-4 relative z-10 group">

                            <div className={`w-14 h-14 rounded-full border-3 shadow-doodle-sm border-black flex items-center justify-center shrink-0 overflow-hidden relative ${user.active ? 'bg-[#bef264]' : 'bg-gray-100'}`}>
                                {user.status === 'Håller kassen' && (
                                    <div className="absolute inset-0 bg-[#eab308] opacity-20"></div>
                                )}
                                
                                {user.active ? (
                                    <div className="font-black font-handwritten text-xl rotate-[-5deg]">Du</div>
                                ) : (
                                    user.avatar ? 
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" /> :
                                    <span className="font-bold text-gray-800">{index + 1}</span>
                                )}


                                {user.active && (
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20">1</div>
                                )}
                            </div>


                            <div className="flex-1 pt-1 flex justify-between items-start">
                                <div>
                                    <h4 className={`font-bold text-base ${user.active ? 'text-black' : 'text-gray-900'}`}>{user.name}</h4>
                                    <p className={`text-xs font-bold ${user.active ? 'bg-green-100 text-green-800 inline-block px-2 py-0.5 border border-black shadow-doodle-sm rounded-md mt-1' : 'text-gray-800 mt-0.5'}`}>
                                        {user.role}
                                    </p>
                                    {user.status === 'paused' && (
                                        <span className="inline-block bg-gray-200 text-gray-600 text-[9px] border border-black shadow-doodle-sm font-bold px-2 py-0.5 rounded align-middle">PAUSAD</span>
                                    )}
                                </div>
                                    
                                {user.status === 'Håller kassen' && (
                                    <div className="flex items-center gap-2 translate-y-3">
                                        <Badge variant="warning" className="text-[9px] py-1 leading-tight text-center rounded-lg shadow-doodle-sm">
                                            HÅLLER<br/>KASSEN
                                        </Badge>
                                        <button className="w-8 h-full aspect-square bg-white border-2 shadow-doodle-sm border-black rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <span className="material-symbols-outlined text-black text-[16px]">mail</span>
                                        </button>
                                    </div>
                                )}

                                {user.active ? <span className="text-4xl font-handwritten text-gray-400 absolute right-0 top-2">01</span> : 
                                    index === 2 ? <span className="text-4xl font-handwritten text-gray-400 absolute right-0 top-2">02</span> :
                                    index === 3 ? <span className="text-4xl font-handwritten text-gray-400 absolute right-0 top-2">03</span> :
                                    index === 4 ? <span className="text-4xl font-handwritten text-gray-400 absolute right-0 top-2">04</span> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </main>
        
        <Navbar active="create" />
    </div>
  );
};

export default TurnOrder;

