import React from 'react';

const YouTubeChannels = ({ scrollToBookYourCall }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-orange-500 to-black flex items-center justify-center p-8 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg2.png")' }} // Ensure this is the correct path to your background
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12 text-white">
        
        {/* Left Section: Text Content with rounded container */}
        <div className="flex-1 p-8 bg-gradient-to-b from-white/30 to-yellow-500/40 rounded-2xl shadow-2xl lg:mr-8 lg:max-w-[55%] relative border-2 border-white">
          <h1 className="text-5xl font-bold mb-6">
            What is Done-For-You Channels?
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            YouTube is one of the most popular platforms in the world, offering a huge opportunity to make money.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            With our Done-For-You (DFY) service, we build a YouTube channel for you, where you become the investor. You don&apos;t have to be on camera or create the content yourself. We handle everything while you earn from one of the most profitable digital business models—faceless YouTube channels!
          </p>
        </div>

        {/* Right Section: Image with Button */}
        <div className="flex-1 mt-8 lg:mt-0 relative">
          <img
            src="/images/our-product.png" // Ensure the correct path to your image
            alt="What is Done-For-You Channels"
            className="object-contain w-[500px] h-auto mx-auto" // Force specific width and auto height for larger image
          />

          {/* Call to Action Button Positioned Bottom Left */}
          <div className="ml-2 mt-2">
            <button
            onClick={scrollToBookYourCall}
             className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannels;
