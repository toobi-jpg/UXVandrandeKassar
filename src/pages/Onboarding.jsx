

const OnboardingProcess = () => {
  return (
    <div className="w-full h-full bg-[#EFFFE4] shadow-2xl overflow-hidden relative flex flex-col justify-between transition-colors duration-300">
        <div className="pt-12 px-8">
            <div className="flex gap-2 mb-8">
                <div className="h-1 flex-1 bg-black/20 rounded-full"></div>
                <div className="h-1 flex-1 bg-black rounded-full"></div>
                <div className="h-1 flex-1 bg-black/20 rounded-full"></div>
            </div>
            <h1 className="text-4xl font-extrabold text-primary leading-[1.1] tracking-tight font-fredoka translate-y-4">
                Skapa din kasse
            </h1>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 relative">
<img src={`${import.meta.env.BASE_URL}2.webp`} alt="Onboarding Intro" />
        </div>

        <div className="px-8 pb-10">
            <div className="mb-10 space-y-4 font-fredoka">
                <p className="text-lg text-gray-800 leading-relaxed font-bold tracking-tight">
                    Skapa enkelt en egen kasse och följ den via kartan, du får en notis när det är din tur.
                </p>

            </div>
            
            <div className="flex items-center justify-between gap-4 font-fredoka">

            </div>
        </div>
    </div>
  );
};

export default OnboardingProcess;
