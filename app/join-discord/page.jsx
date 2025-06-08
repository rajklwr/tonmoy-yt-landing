"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function JoinDiscordPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = 'Launch. Scale. Earn from Faceless YouTube Channels.';

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
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-black to-[#0a0a0a] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center text-white animate-fade-in">
        <div className="flex justify-center mb-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
            alt="Discord Logo"
            width={90}
            height={90}
            className="drop-shadow-lg animate-pulse"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
          Join the YouTube Automation Circle
        </h1>

        <p className="text-xl text-gray-400 mb-4 h-[32px]">{typedText}</p>

        <p className="text-base text-gray-400 mb-10">
          Our Discord is where the secrets are shared. Strategies, tools,
          collabs, and real talk. No fluff.
        </p>

        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:scale-105"
        >
          🚀 Join Our Discord Now
        </a>

        <p className="mt-8 text-sm text-gray-500 italic">
          1000+ creators. Daily drops. Pure action. Be there.
        </p>
      </div>
    </div>
  );
}
