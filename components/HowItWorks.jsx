// components/HowItWorks.jsx
import React from 'react';
import { UserIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 py-8 flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg3.png")' }} 
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-6 lg:py-12 text-white space-y-8 lg:space-y-0 lg:space-x-8">

        {/* Left Section: How It Works Text (40%) */}
        <div className="flex-[0.4] lg:mr-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">HOW IT WORKS?</h1>
          <div className="flex items-center justify-start -mt-[10px]">
            {/* First part of the underline */}
            <div
              className="h-1"
              style={{
                background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
                width: '150px',
              }}
            ></div>
            {/* Dot in the center */}
            <div className="text-white mx-2">•</div>
            {/* Second part of the underline */}
            <div
              className="h-1"
              style={{
                background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
                width: '150px',
              }}
            ></div>
          </div>
          <p className="mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            Our professional team takes care of everything. They create the videos, including writing scripts, recording voiceovers, editing, and designing thumbnails. They also handle uploading the videos to YouTube, ensuring everything is optimized with proper SEO and research.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            As the channel owner, you take on the role of a producer, while the team manages the entire content creation and channel growth process.
          </p>
        </div>

        {/* Right Section: Features (60%) */}
        <div className="flex-[0.6] p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg relative border-2 border-gray-400 w-full lg:w-[130%] transform lg:translate-x-[10%] lg:border-r-transparent"
          style={{ background: 'rgba(26, 26, 26, 0.1)' }} // 10% transparency
        >
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">

            {/* Feature 1 */}
            <div className="flex flex-col space-y-2">
              <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <h2 className="text-xl sm:text-2xl font-bold">Proven track record</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Let an experienced team with a track record of success build your YouTube channel for you!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-2">
              <CurrencyDollarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <h2 className="text-xl sm:text-2xl font-bold">Seamless integration</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Write here a key feature of the app or software that is being advertised here.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-2">
              <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <h2 className="text-xl sm:text-2xl font-bold">Guaranteed Results</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                We provide guaranteed results, backed by a written guarantee!
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
