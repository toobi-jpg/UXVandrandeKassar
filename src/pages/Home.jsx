
import Navbar from '../components/Navbar';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { MOCK_USER, CURRENT_BAG, NEARBY_BAGS, RECENT_FINDS } from '../data/mockData';

const Home = () => {
  return (
    <div className="w-full h-full bg-[#EFFFE4] flex flex-col font-jakarta relative overflow-hidden">

        <header className="px-6 pt-12 pb-4 flex justify-between items-center z-20">
             <div>
                <h1 className="text-3xl font-extrabold text-black leading-tight font-fredoka">
                    Hej, <br />
                    {MOCK_USER.name}! 👋
                </h1>
            </div>
            <div className="flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full border-3 shadow-doodle-sm border-black flex items-center justify-center">
                    <Icon name="notifications_none" />
                </button>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32 space-y-6">

            <section>
                <SectionHeader 
                    title="Min kasse" 
                    icon="shopping_bag" 
                />
                
                <Card className="bg-[#fae8e0]">
                    <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-4">
                        <h3 className="text-lg font-black font-fredoka">{CURRENT_BAG.name} #{CURRENT_BAG.id}</h3>
                        <Badge variant="default">{CURRENT_BAG.status}</Badge>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-3 shadow-doodle-sm border-black flex items-center justify-center relative bg-white">
                                <Icon name="timer" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">STATUS</p>
                                <p className="text-xl font-bold font-fredoka leading-none">Din tur om</p>
                                <p className="text-xl font-bold font-fredoka text-red-500 leading-none">
                                    {CURRENT_BAG.timeLeft}
                                </p>
                            </div>
                        </div>
                        

                        <div className="mt-4 h-3 bg-[#f1fce2] rounded-full border-3 border-black overflow-hidden flex">
                             <div className="w-3/4 bg-[#bef264] h-full border-r-2 border-black"></div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2 text-xs font-bold">
                            <span>Du är näst på tur</span>
                            <span>{CURRENT_BAG.progress}/{CURRENT_BAG.total}</span>
                        </div>
                    </div>
                </Card>
            </section>


            <section>
                <SectionHeader 
                    title="Hitta kassar nära dig" 
                    icon="location_on" 
                />
                
                <div className="grid grid-cols-2 gap-3">
                    {NEARBY_BAGS.map((bag) => (
                        <Card 
                            key={bag.id} 
                            className={`${bag.bg} flex flex-col items-center justify-center text-center aspect-square hover:translate-y-1 transition-transform cursor-pointer`}
                        >
                            <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center mb-2">
                                <Icon name={bag.icon} />
                            </div>
                            <h3 className="font-black text-sm">{bag.name}</h3>
                            <Badge variant="distance" className="mt-1">{bag.distance}</Badge>
                        </Card>
                    ))}
                </div>
            </section>


             <section>
                 <SectionHeader 
                    title="Senaste fynden" 
                    icon="star"
                    action={<a href="#" className="text-xs font-bold underline">Se alla</a>}
                 />
                 
                 <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                     {RECENT_FINDS.map((item) => (
                         <div key={item.id} className="w-32 h-32 bg-white border-3 border-black rounded-xl flex-shrink-0 overflow-hidden relative group">
                            <img src={item.image} alt={`Recent find ${item.id}`} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2">
                                <Badge variant="price">{item.price}</Badge>
                            </div>
                         </div>
                     ))}
                 </div>
             </section>
        </main>
        
        <Navbar active="home" />
    </div>
  );
};

export default Home;
