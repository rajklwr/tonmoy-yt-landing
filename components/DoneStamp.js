import React from "react";

const DoneStamp = () => {
  return (
    <div className="relative pt-16 px-4 sm:pt-0 sm:px-0">
      <div className="sm:absolute sm:bottom-40 sm:right-20 transform -rotate-12 border-4 border-red-600 px-6 py-2 text-red-600 font-bold text-8xl lg:text-9xl uppercase tracking-wider bg-white sm:animate-bounce-right">
        Done
      </div>
      <style jsx>{`
        @keyframes bounce-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .animate-bounce-right {
          animation: bounce-right 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default DoneStamp;
