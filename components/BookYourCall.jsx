'use client';

import React, { useRef } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const BookYourCall = () => {
  const calendlyRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 py-12 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(\'/images/bg6.png\')' }}
    >
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 p-4">
        
        {/* Left Section (Calendly) */}
        <div className="flex-1 lg:flex-[0.65] w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">BOOK YOUR CALL NOW</h1>

          {/* Calendly widget with ref */}
          <div
            ref={calendlyRef}
            tabIndex="-1"  // Make it focusable
            className="calendly-inline-widget"
            data-url="https://calendly.com/ytautomationtonmoy/1-1-on-strategy-call-with-tonmoy?"
            style={{ minWidth: '350px', height: '1100px',  overflowY: 'hidden', borderRadius: '8px' }}
          ></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:flex-[0.35] w-full text-white sm:space-y-32 sm:mt-[500px] "
        >
          {/* Message Content */}
          <div
          //  className="hidden lg:block bg-white bg-opacity-20 p-4 rounded-md mt-[150px] "
          className="flex-1 hidden lg:block p-4 sm:p-6 lg:p-8 bg-opacity-20 bg-gradient-to-b  from-white/30 to-black/40 mt-[150px]  rounded-2xl shadow-2xl border-2 border-white flex-grow relative"
          style={{ transform: 'translateY(20px)', opacity: 0, transition: 'all 0.8s ease-in-out', animation: 'moveInUp 1s forwards' }}
           >
            <p>From this calendar, you can choose your convenient time to schedule a Zoom call.</p> <br/>
            <p>Feel free to let us know, and we&apos;ll make sure to accommodate your schedule. 💪</p> <br/>
            <p>Once you book the call, send me a message on any of my social platforms and I&apos;ll confirm the call from my end.</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
      {/* Instagram Section */}
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">INSTAGRAM</h2>
        <p className="text-lg">@tonmoyghosh__</p>
      </div>

      {/* Email Section */}
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">Email</h2>
        <p className="text-lg">ytgrowthsecrets21@gmail.com</p>
      </div>

      {/* Social Section */}
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">Social</h2>
        <div className="flex space-x-6">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61559145152033" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 text-white hover:text-blue-600" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/tonmoyghosh__" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 text-white hover:text-pink-500" />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/+916000205657" target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp className="w-8 h-8 text-white hover:text-green-500" />
          </a>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourCall;
