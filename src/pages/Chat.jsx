
import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Avatar from '../components/ui/Avatar';
import ChatBubble from '../components/ui/ChatBubble';
import { CHAT_MESSAGES, NEXT_PERSON } from '../data/mockData';

const Chat = () => {
  return (

    <div className="w-full h-full bg-[#FADCD9] font-fredoka text-gray-900 flex flex-col overflow-hidden relative font-jakarta">

        <header className="flex items-center justify-between px-4 pt-12 pb-4 border-b-3 border-gray-100 z-20 sticky top-0">
                <Button variant="icon" className="w-10 h-10">
                    <Icon name="arrow_back" />
                </Button>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Avatar src={NEXT_PERSON.avatar} size="w-10 h-10" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-3 border-white rounded-full"></div>
                </div>
                <h1 className="text-xl font-bold font-fredoka">Chatt med Anders</h1>
            </div>
             <Button variant="ghost" className="rounded-full hover:bg-gray-100 p-2">
                <Icon name="more_vert" size="text-2xl" />
            </Button>
        </header>


        <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#FADCD9] relative hide-scrollbar pb-40">

            <div className="flex justify-center mb-4">
                <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full text-gray-800">Idag</span>
            </div>

            {CHAT_MESSAGES.map((msg) => (
                <ChatBubble 
                    key={msg.id}
                    message={msg.message}
                    time={msg.time}
                    isSender={msg.isSender}
                    avatar={msg.avatar}
                />
            ))}

        </main>


         <div className="absolute bottom-[20px] left-0 right-0 z-20 px-4 pb-24 pointer-events-none">
            <div className="pointer-events-auto space-y-4">

                <div className="flex justify-center">
                     <button className="bg-white border-2 border-black/50 text-black px-4 py-2 rounded-full font-bold text-sm shadow-sm hover:scale-105 transition-transform flex items-center gap-2 font-fredoka w-full justify-center translate-y-2">

                        Kassen är redo för upphämtning!
                        <span className="material-icons-round text-green-600">check</span>
                    </button>
                </div>
                

                <div className="flex items-center gap-2 bg-white border-3 border-black shadow-doodle rounded-[30px] py-1 px-2">
                    <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                        <Icon name="add_circle_outline" />
                    </button>
                     <textarea className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2.5 max-h-24 text-gray-900 placeholder-gray-400 font-medium outline-none" placeholder="Skriv ett meddelande..." rows="1"></textarea>
                    
                    <Button variant="fab" className="w-10 h-10 bg-[#4ADE80] hover:bg-green-400 border-3 border-black p-0 shadow-sm transform active:scale-95">
                         <Icon name="send" size="text-lg" className="transform rotate-[-15deg]" />
                    </Button>
                </div>
            </div>
         </div>
         
         <Navbar active="profile" />
    </div>
  );
};

export default Chat;

