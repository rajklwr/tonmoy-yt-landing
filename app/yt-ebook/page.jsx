"use client";

import { useEffect, useRef, useState } from "react";

export default function JoinFreeEbookPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Faceless YouTube. No Budget. Just Real Systems.";

  useEffect(() => {
    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeCharacter, 40); // smooth typing
      }
    };

    typeCharacter();

    return () => {
      // cleanup if component unmounts
      currentIndex = fullText.length + 1;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-black to-[#0a0a0a] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-2xl text-center text-white animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/open-book--v2.png"
            alt="E-Book Icon"
            width={64}
            height={64}
            className="animate-pulse drop-shadow-md"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
          Download My E-Book
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6">
          “The Zero Dollar YouTube Blueprint”
        </p>

        {/* Typing Animation */}
        <p className="text-base sm:text-lg text-gray-400 min-h-[24px] sm:min-h-[32px] mb-6 font-mono tracking-wide">
          {typedText}
        </p>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-400 mb-8 px-2 sm:px-0 max-w-xl mx-auto">
          📥 No Freelancers. No Budget. Just Real Systems That Work.
        </p>

        {/* List */}
        <div className="bg-[#1a1a1a] rounded-xl p-5 sm:p-6 mb-8 text-left text-gray-300 shadow-md">
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>✅ Start a faceless YouTube channel</li>
            <li>✅ Learn with limited time, no budget</li>
            <li>✅ Avoid fake guru traps and upsells</li>
            <li>✅ Proven systems behind $5K/month channels</li>
          </ul>
        </div>

        {/* CTA Button
        <div className="mb-8">
          <a
            href="https://your-ebook-download-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-xl hover:scale-105"
          >
            📥 Download The E-Book Now
          </a>
        </div> */}

        <div className="mb-10 text-center space-y-4">
          {/* Primary CTA */}
          <a
            href="https://your-payment-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            💰 Get It Now – Only $1.99
          </a>

          {/* Price Disclaimer */}
          <p className="text-sm sm:text-base text-gray-400">
            ⏳ After 30 Days —{" "}
            <span className="text-red-400 font-semibold line-through">$99</span>
          </p>

          {/* Motivation Message */}
          <p className="text-xs sm:text-sm text-gray-500 italic max-w-md mx-auto">
            Every value has its own price — I’m charging this because it’s only
            for <strong className="text-white">serious action takers</strong>.
          </p>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 italic mb-1">
          🎯 I’m documenting a full 30-day faceless channel — scripts,
          thumbnails, videos, and real results.
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          🚀 Follow me for free monthly drops, YouTube systems, and case studies
          that actually work.
        </p>
      </div>
    </div>
  );
}
