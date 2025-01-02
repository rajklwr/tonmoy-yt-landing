import React from "react";

const DoneStamp = () => {
  return (
    <div className=" relative pt-16 px-4 sm:pt-0 sm:px-0">
      <div className="sm:absolute sm:bottom-20 sm:right-20 transform -rotate-12 border-4 border-red-600 px-6 py-2 text-red-600 font-bold text-8xl uppercase tracking-wider bg-white">
        Done
      </div>
    </div>
  );
};

export default DoneStamp;