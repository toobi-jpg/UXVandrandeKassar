

const MobileFrame = ({ children, className = '' }) => {
  return (
    <div className={`w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-0 border-white ${className} pointer-events-none`}>

        
        <div className="h-full w-full overflow-y-auto hide-scrollbar relative">
            {children}
        </div>
    </div>
  );
};

export default MobileFrame;
