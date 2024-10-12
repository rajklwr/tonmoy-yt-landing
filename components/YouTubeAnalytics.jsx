// components/YouTubeAnalytics.jsx
import React from 'react';

const YouTubeAnalytics = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-orange-500 to-blue-900 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg1.png")' }}
    >
      <div className="relative w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 text-white">
        {/* Image section */}
        <div className="flex justify-center items-center mb-4 sm:mb-6 md:mb-8">
          <img
            src="/images/laptop.png"
            alt="YouTube Analytics on mobile and laptop"
            className="object-contain w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] scale-[1] sm:scale-[1.1] md:scale-[1.3]"
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-2 sm:mt-4 md:mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug">
            DONE-FOR-YOU <br />
            Faceless YouTube Channels
          </h1>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAnalytics;
