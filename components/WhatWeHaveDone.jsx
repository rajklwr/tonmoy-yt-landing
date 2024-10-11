"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const WhatWeHaveDone = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div
      className=" bg-gradient-to-b from-black to-blue-900 py-12 flex flex-col items-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: 'url("/images/bg4.png")' }}
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-left">
          WHAT WE HAVE <br /> DONE TILL NOW?
        </h1>
        <div className="flex items-center justify-start -mt-[10px]">
          <div
            className="h-1"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
              width: '150px',
            }}
          ></div>
          <div className="text-white mx-2">•</div>
          <div
            className="h-1"
            style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
              width: '150px',
            }}
          ></div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Results Button */}
        <div className="relative group" onClick={() => navigateTo('/results')}>
          <img
            src="/images/result-button-lg.png"
            alt="Results"
            className="object-contain w-[250px] sm:w-[300px] lg:w-[350px] cursor-pointer"
          />
          {/* Bottom Right Label */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs sm:text-sm px-3 py-1 rounded-md shadow-lg transition duration-300 transform group-hover:scale-105">
            Click to See
          </div>
        </div>

        {/* Life Button */}
        <div className="relative group" onClick={() => navigateTo('/life')}>
          <img
            src="/images/life-button-lg.png"
            alt="Life"
            className="object-contain w-[250px] sm:w-[300px] lg:w-[350px] cursor-pointer"
          />
          {/* Bottom Right Label */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs sm:text-sm px-3 py-1 rounded-md shadow-lg transition duration-300 transform group-hover:scale-105">
            Click to See
          </div>
        </div>

        {/* Testimonials Button */}
        <div className="relative group" onClick={() => navigateTo('/testimonials')}>
          <img
            src="/images/testimonial-button-lg.png"
            alt="Testimonials"
            className="object-contain w-[250px] sm:w-[300px] lg:w-[350px] cursor-pointer"
          />
          {/* Bottom Right Label */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs sm:text-sm px-3 py-1 rounded-md shadow-lg transition duration-300 transform group-hover:scale-105">
            Click to See
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeHaveDone;
