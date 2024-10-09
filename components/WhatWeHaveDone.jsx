import React from 'react';

const WhatWeHaveDone = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 py-12 flex flex-col items-center bg-cover bg-center"
    style={{ backgroundImage: 'url("/images/bg4.png")' }} 
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          WHAT WE HAVE DONE TILL NOW?
        </h1>
        <div className="flex justify-center items-center">
          <div className="border-t-2 border-white w-12 mr-2"></div>
          <div className="text-white">•</div>
          <div className="border-t-2 border-white w-12 ml-2"></div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Button 1: Results */}
          <img
            src="/images/result-button-lg.png" // Adjust to the correct path
            alt="Results"
            className="object-contain h-full"
          />

        {/* Button 2: Life */}
          <img
            src="/images/life-button-lg.png" // Adjust to the correct path
            alt="Life"
            className="object-contain h-full"
          />

        {/* Button 3: Testimonials */}
          <img
            src="/images/testimonial-button-lg.png" // Adjust to the correct path
            alt="Testimonials"
            className="object-contain h-full"
          />
      </div>
    </div>
  );
};

export default WhatWeHaveDone;
