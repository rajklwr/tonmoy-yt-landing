'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function JoinDiscordPage() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Faceless Videos. Smart Systems. Passive Income.';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-black to-[#0a0a0a] flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-xl text-center text-white animate-fade-in">
        <div className="flex justify-center mb-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
            alt="Discord Logo"
            width={70}
            height={70}
            className="animate-pulse drop-shadow-lg"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
          Join the YouTube Automation Circle
        </h1>

        <p className="text-base sm:text-lg text-gray-400 mb-4 min-h-[24px] sm:min-h-[32px]">
          {typedText}
        </p>

        <p className="text-sm sm:text-base text-gray-400 mb-8 px-2 sm:px-0">
          Connect with faceless YouTube creators, learn automation systems, and unlock the blueprint to passive income.
        </p>

        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-xl hover:scale-105"
        >
          🚀 Join Our Discord Now
        </a>

        <p className="mt-6 text-xs sm:text-sm text-gray-500 italic">
          1000+ creators. Real systems. Daily drops. Let’s scale together.
        </p>
      </div>
    </div>
  );
}
