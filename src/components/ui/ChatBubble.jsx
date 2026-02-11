import React from 'react';

const ChatBubble = ({ message, time, isSender, avatar }) => {
  const bubbleStyle = isSender
    ? "bg-gray-200 text-black rounded-[20px_20px_4px_20px]"
    : "bg-white rounded-[20px_20px_20px_4px]";

  return (
    <div className={`flex flex-col gap-1 max-w-[85%] ${isSender ? 'items-end ml-auto' : 'items-start'}`}>
      <div className={`flex items-end gap-2 ${isSender ? 'flex-row-reverse' : ''}`}>
        {!isSender && avatar && (
           <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-black object-cover mb-1" />
        )}
        <div className={`${bubbleStyle} p-3 shadow-doodle-sm border-3 border-black`}>
          <p className="text-base font-bold leading-snug">{message}</p>
        </div>
      </div>
      <span className={`text-xs text-gray-500 ${isSender ? 'mr-1' : 'ml-11'}`}>{time}</span>
    </div>
  );
};

export default ChatBubble;
