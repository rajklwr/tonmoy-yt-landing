import React from 'react';

const WhatWeHaveDone = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black to-blue-900 py-12 flex flex-col items-center bg-cover bg-center px-8"
      style={{ backgroundImage: 'url("/images/bg4.png")' }}
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl mb-8">
        {/* Left-aligned text */}
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight text-left">
          WHAT WE HAVE <br /> DONE TILL NOW?
        </h1>
        {/* Custom Underline */}
        <div className="flex items-center justify-start -mt-[10px]">
          {/* First part of the underline */}
          <div
            className="h-1"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
              width: '200px',
            }}
          ></div>
          {/* Dot in the center */}
          <div className="text-white mx-2">•</div>
          {/* Second part of the underline */}
          <div
            className="h-1"
            style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
              width: '200px',
            }}
          ></div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex mt-4 flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Button 1: Results */}
        <img
          src="/images/result-button-lg.png"
          alt="Results"
          className="object-contain h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />

        {/* Button 2: Life */}
        <img
          src="/images/life-button-lg.png"
          alt="Life"
          className="object-contain h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />

        {/* Button 3: Testimonials */}
        <img
          src="/images/testimonial-button-lg.png"
          alt="Testimonials"
          className="object-contain h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhatWeHaveDone;
