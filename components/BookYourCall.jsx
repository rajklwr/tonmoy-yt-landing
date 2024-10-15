'use client';

import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const BookYourCall = () => {
  const calendlyRef = useRef(null);

  // // Focus the calendly widget once it's mounted to bring attention
  // useEffect(() => {
  //   if (calendlyRef.current) {
  //     calendlyRef.current.focus();
  //   }
  // }, []);

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 py-12 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(\'/images/bg6.png\')' }}
    >
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-end space-y-12 lg:space-y-0 lg:space-x-16 p-8">
        
        {/* Left Section (Calendly) */}
        <div className="flex-1 lg:flex-[0.6] w-full">
          <h1 className="text-5xl font-bold text-white mb-8">BOOK YOUR CALL NOW</h1>

          {/* Calendly widget with ref */}
          <div
            ref={calendlyRef}
            tabIndex="-1"  // Make it focusable
            className="calendly-inline-widget"
            data-url="https://calendly.com/ytautomationtonmoy/1-1-on-strategy-call-with-tonmoy?"
            style={{ minWidth: '350px', height: '1000px', overflowY: 'auto' }}
          ></div>
          {/* <p className=" invisible sm:visible text-white mt-4">Please scroll down to see more of the booking widget.</p> */}
        </div>

        {/* Right Section (Contact Info) */}
        <div className="flex-1 lg:flex-[0.4] w-full text-white space-y-8">
          <div>
            <h2 className="text-lg font-bold">INSTAGRAM</h2>
            <p className="text-lg">@tonmoyghosh__</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Email</h2>
            <p className="text-lg">ytgrowthsecrets21@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Social</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aryan.drx" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-8 h-8 text-white hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/tonmoyghosh__" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 text-white hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourCall;
