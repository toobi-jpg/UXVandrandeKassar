
import { motion } from 'framer-motion';
import MobileFrame from './components/MobileFrame';
import OnboardingIntro from './pages/OnboardingIntro';
import OnboardingProcess from './pages/Onboarding';
import OnboardingGive from './pages/OnboardingGive';
import Home from './pages/Home';
import MapExplore from './pages/MapExplore';
import CreateBag from './pages/CreateBag';
import Handover from './pages/Handover';
import TurnOrder from './pages/TurnOrder';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="h-[100svh] w-screen bg-gray-200 font-fredoka overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
      

      <section className="min-h-[100svh] w-full flex items-center justify-center snap-center bg-gray-200 flex-shrink-0 py-12 lg:py-0">
        <motion.div 
          initial={{ maxWidth: "800px" }}
          whileInView={{ maxWidth: "1400px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-24 items-center justify-items-center w-full mx-auto p-4 scale-90 min-[2000px]:scale-100 lg:-translate-y-6"
        >
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[-6deg] lg:translate-y-12">
            <MobileFrame>
              <OnboardingIntro />
            </MobileFrame>
          </div>

          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 z-10 lg:transform lg:-translate-y-4">
            <MobileFrame>
              <OnboardingProcess />
            </MobileFrame>
          </div>

          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[6deg] lg:translate-y-12">
            <MobileFrame>
              <OnboardingGive />
            </MobileFrame>
          </div>
        </motion.div>
      </section>


      <section className="min-h-[100svh] w-full flex items-center justify-center snap-center bg-gray-200 flex-shrink-0 py-12 lg:py-0">
        <motion.div 
          initial={{ maxWidth: "800px" }}
          whileInView={{ maxWidth: "1400px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-24 items-center justify-items-center w-full mx-auto p-4 scale-90 min-[2000px]:scale-100 lg:-translate-y-6"
        >
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[-6deg] lg:translate-y-12">
            <MobileFrame>
              <Home />
            </MobileFrame>
          </div>

          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 z-10 lg:transform lg:-translate-y-4">
            <MobileFrame>
              <MapExplore />
            </MobileFrame>
          </div>

           <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[6deg] lg:translate-y-12">
            <MobileFrame>
              <CreateBag />
            </MobileFrame>
          </div>
        </motion.div>
      </section>


      <section className="min-h-[100svh] w-full flex items-center justify-center snap-center bg-gray-200 flex-shrink-0 py-12 lg:py-0">
        <motion.div 
          initial={{ maxWidth: "800px", }}
          whileInView={{ maxWidth: "1400px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-24 items-center justify-items-center w-full mx-auto p-4 scale-90 min-[2000px]:scale-100 lg:-translate-y-6"
        >
           <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[-6deg] lg:translate-y-12">
            <MobileFrame>
              <Handover />
            </MobileFrame>
          </div>

           <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 z-10 lg:transform lg:-translate-y-4">
            <MobileFrame>
              <TurnOrder />
            </MobileFrame>
          </div>

          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 lg:transform lg:rotate-[6deg] lg:translate-y-12">
            <MobileFrame>
              <Chat />
            </MobileFrame>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default App;
