// components/YouTubeAnalytics.jsx
import React from 'react';

const YouTubeAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 to-blue-900 flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: 'url("/images/bg1.png")' }}
    >
      <div className="relative w-full max-w-6xl p-6 text-white">
        {/* Image section */}
        <div className="flex justify-center items-center mb-8">
          <img
            src="/images/laptop.png"
            alt="YouTube Analytics on mobile and laptop"
            className="object-contain w-full scale-[1.2] max-h-[100vh] md:max-h-[60vh]"
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h1 className="text-5xl font-bold leading-snug">
            DONE-FOR-YOU <br /> 
            Faceless YouTube Channels
          </h1>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAnalytics;
