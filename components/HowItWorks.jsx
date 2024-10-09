import React from 'react';
import { UserIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 py-8 flex items-center justify-center overflow-hidden bg-cover bg-center "
     style={{ backgroundImage: 'url("/images/bg3.png")' }} 
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center py-6 lg:py-12 text-white space-x-0 lg:space-x-8">

        {/* Left Section: How It Works Text (40%) */}
        <div className="flex-[0.4] lg:mr-8 text-left">
          <h1 className="text-5xl font-bold mb-4">HOW IT WORKS?</h1>
          <div className="flex items-center mb-4">
            <div className="border-t-2 border-white flex-1" />
            <div className="mx-2">•</div>
            <div className="border-t-2 border-white flex-1" />
          </div>
          <p className="mb-4 text-lg leading-relaxed">
            Our professional team takes care of everything. They create the videos, including writing scripts, recording voiceovers, editing, and designing thumbnails. They also handle uploading the videos to YouTube, ensuring everything is optimized with proper SEO and research.
          </p>
          <p className="text-lg leading-relaxed">
            As the channel owner, you take on the role of a producer, while the team manages the entire content creation and channel growth process.
          </p>
        </div>

        {/* Right Section: Features (60%) */}
        <div className="flex-[0.6] p-8 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] rounded-3xl shadow-lg relative border-t-2 border-b-2 border-l-2 border-r-transparent border-gray-400 w-full lg:w-[130%] transform translate-x-[10%]">
          <div className="space-y-8">

            {/* Feature 1 */}
            <div className="flex flex-col space-y-2">
              <UserIcon className="w-10 h-10 text-white" />
              <h2 className="text-2xl font-bold">Proven track record</h2>
              <p className="text-sm leading-relaxed">
                Let an experienced team with a track record of success build your YouTube channel for you!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-2">
              <CurrencyDollarIcon className="w-10 h-10 text-white" />
              <h2 className="text-2xl font-bold">Seamless integration</h2>
              <p className="text-sm leading-relaxed">
                Write here a key feature of the app or software that is being advertised here.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-2">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
              <h2 className="text-2xl font-bold">Guaranteed Results</h2>
              <p className="text-sm leading-relaxed">
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
