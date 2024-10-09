'use client';

import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const BookYourCall = () => {
  const [isClient, setIsClient] = useState(false);

  // This ensures the Calendly widget is only rendered on the client side
  useEffect(() => {
    setIsClient(true);

    // Load the Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-b from-black to-blue-900 py-12 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg6.png")' }}
    >
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-end space-y-12 lg:space-y-0 lg:space-x-16 p-8">
        
        {/* Left Section (Calendly) with 60% width on large screens */}
        <div className="flex-1 lg:flex-[0.6] w-full">
          <h1 className="text-5xl font-bold text-white mb-8">BOOK YOUR CALL NOW</h1>

          {/* Only render the Calendly widget after the client-side is initialized */}
          {isClient && (
            <div className="calendly-inline-widget" data-url="https://calendly.com/ytautomationtonmoy/1-1-on-strategy-call-with-tonmoy?" style={{ minWidth: '350px', height: '1010px' }}></div>
          )}
        </div>

        {/* Right Section (Contact Info) with 40% width on large screens */}
        <div className="flex-1 lg:flex-[0.4] w-full text-white space-y-8">
          {/* Instagram */}
          <div>
            <h2 className="text-lg font-bold">INSTAGRAM</h2>
            <p className="text-lg">@tonmoyghosh__</p>
          </div>
          {/* Email */}
          <div>
            <h2 className="text-lg font-bold">Email</h2>
            <p className="text-lg">ytgrowthsecrets21@gmail.com</p>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold">Social</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-8 h-8 text-white hover:text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
