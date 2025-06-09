"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            width={20}
            height={20}
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

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="https://www.dropbox.com/scl/fi/73r7zkbk6872zl9v03eyy/Tonmoy-The-Zero-Dollar-YouTube-Blueprint-Sponsored-by-GroGrip.pdf?rlkey=o0y4zft94b3o8l8yyki0ztb00&st=n25atq6o&dl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-xl hover:scale-105"
          >
            📥 Download The E-Book Now
          </a>
        </div>

        {/* Connection & Feedback Section */}
        <div className="text-left text-gray-300 mb-4 text-sm sm:text-base space-y-4 px-2 sm:px-0 max-w-xl mx-auto">
          <p className="text-center text-base sm:text-lg text-white font-semibold">
            ✉️ Let&apos;s Stay Connected — Your Feedback Means Everything!
          </p>

          <p>
            If you truly found value in this eBook…
            <br />
            If it helped you understand the YouTube system better…
            <br />
            And if you believe this could be the beginning of something big for
            you —
          </p>

          <p className="text-white font-semibold">💬 Here&apos;s all I ask:</p>

          <p>
            Go to my latest{" "}
            <strong className="text-white">Reel on Instagram</strong>, leave a
            comment sharing your honest thoughts or review about this eBook.
          </p>

          <p className="text-white">
            📩 I&apos;ll also send you my paid eBook — absolutely free.
          </p>

          <p className="text-green-400 font-semibold">
            ✅ That&apos;s it. No upsell. No strings.
          </p>

          <p>
            I&apos;m here to build a real community of creators who take action.
            <br />
            So, if this helped you in any way — I&apos;d love to hear from you.
            <br />
            And I&apos;d love to give you more.{" "}
            <strong className="text-white">
              The journey&apos;s just getting started. 💪
            </strong>
          </p>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 italic mb-1">
          🎯 I&apos;m documenting a full 30-day faceless channel — scripts,
          thumbnails, videos, and real results.
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          🚀 Follow me for free monthly drops, YouTube systems, and case studies
          that actually work.
        </p>

        <div className="mt-8 text-center text-xs text-gray-500 px-4 max-w-2xl mx-auto">
          <p className="mb-2">
            <strong>DISCLAIMER</strong>
            <br />
            NOT FACEBOOK™: This site is not a part of the Facebook™ website or
            Facebook Inc. Additionally, this site is NOT endorsed by Facebook™
            in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
          </p>
          <p>
            Copyright © 2025 YT Growthsecrets Pvt Ltd – All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
