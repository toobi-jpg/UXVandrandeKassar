
import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';

const CreateBag = () => {
  return (
    <div className="w-full h-full bg-[#FADCD9] flex flex-col shadow-2xl overflow-hidden relative font-poppins text-text-primary-light">

       <div className="h-full flex flex-col">
            <header className="px-6 pt-12 pb-4 sticky top-0 z-20 flex items-center gap-4">
                <Button variant="icon" className="w-10 h-10">
                    <Icon name="arrow_back" />
                </Button>
                <h1 className="text-2xl font-extrabold text-black">Skapa ny kasse 🛍️</h1>
            </header>

            <main className="flex-1 overflow-y-auto hide-scrollbar pb-32 px-6 space-y-8">
                <section>
                    <label htmlFor="bag-name" className="block text-xl font-extrabold text-black mb-3">
                        Kassens namn
                    </label>
                    <div className="relative">
                        <input type="text" id="bag-name" placeholder="T.ex. Sommarkläder 2024" className="w-full bg-white border-3 border-black rounded-xl p-4 text-lg font-bold placeholder-gray-400 shadow-doodle-sm focus:ring-0 focus:border-black focus:shadow-doodle-hover transition-all outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 material-icons text-gray-400">edit</span>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                        Lägg till plagg
                    </h2>
                    

                    <div className="border-3 border-dashed border-black bg-white/50 rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-white/80 transition-colors mb-6 group relative overflow-hidden">
                        <div className="bg-theme-green h-16 w-16 rounded-full border-3 border-black flex items-center justify-center shadow-doodle-sm group-hover:scale-110 transition-transform z-10">
                            <Icon name="add_a_photo" size="text-3xl" />
                        </div>
                        <span className="mt-3 font-bold text-sm bg-white px-3 py-1 rounded-full border-3 border-black shadow-sm z-10">Ta en bild</span>
                        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                    </div>


                    <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-square bg-white border-3 border-black rounded-xl overflow-hidden shadow-doodle-sm relative group transform hover:-rotate-2 transition-transform">
                            <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&auto=format&fit=crop" alt="Uppladdat plagg 1" className="w-full h-full object-cover" />
                            <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 border border-black h-5 w-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="close" size="text-[12px]" />
                            </button>
                        </div>
                        <div className="aspect-square bg-white border-3 border-black rounded-xl overflow-hidden shadow-doodle-sm relative group transform hover:rotate-2 transition-transform">
                             <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop" alt="Uppladdat plagg 2" className="w-full h-full object-cover" />
                            <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 border border-black h-5 w-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="close" size="text-[12px]" />
                            </button>
                        </div>
                        <div className="aspect-square bg-gray-100 border-3 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-400">
                            <span className="text-xs font-bold text-center px-2">2 av 10<br />bilder</span>
                        </div>
                    </div>
                </section>

                <div className="pt-4">
                    <Button className="w-full text-lg py-4 rounded-full shadow-doodle hover:translate-y-0.5 hover:shadow-doodle-sm" icon="arrow_forward">
                        Starta kassen
                    </Button>
                    <p className="text-center text-xs font-bold text-gray-600 mt-4">Genom att starta godkänner du våra villkor.</p>
                </div>
            </main>
       </div>
       <Navbar active="create" />
    </div>
  );
};

export default CreateBag;

