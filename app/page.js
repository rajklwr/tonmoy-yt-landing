"use client";

import React, { useRef } from 'react';
import YouTubeAnalytics from '@/components/YouTubeAnalytics';
import YouTubeChannels from '@/components/YouTubeChannels';
import HowItWorks from '@/components/HowItWorks';
import WhatWeHaveDone from '@/components/WhatWeHaveDone';
import FAQ from '@/components/FAQ';
import BookYourCall from '@/components/BookYourCall';

export default function HomePage() {
  const bookCallRef = useRef(null); // Create a reference for the BookYourCall component

  const scrollToBookYourCall = () => {
    // Smooth scroll to BookYourCall section
    if (bookCallRef.current) {
      bookCallRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <YouTubeAnalytics />
      <YouTubeChannels scrollToBookYourCall={scrollToBookYourCall} />
      <HowItWorks />
      <WhatWeHaveDone />
      <FAQ />
      <div ref={bookCallRef}>
        <BookYourCall />
      </div>
    </div>
  );
}
