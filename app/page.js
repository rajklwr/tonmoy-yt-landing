"use client";

import React, { useRef } from 'react';
import YouTubeAnalytics from '@/components/YouTubeAnalytics';
import YouTubeChannels from '@/components/YouTubeChannels';
import HowItWorks from '@/components/HowItWorks';
import WhatWeHaveDone from '@/components/WhatWeHaveDone';
import FAQ from '@/components/FAQ';
import BookYourCall from '@/components/BookYourCall';
import Footer from '@/components/Footer';
import { faqData } from '@/data/faq-data';

export default function HomePage() {
  const bookCallRef = useRef(null); 

  const scrollToBookYourCall = () => {
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
      <FAQ 
      faqData={faqData}
      />
      <div ref={bookCallRef}>
        <BookYourCall />
      </div>
      <Footer/>
    </div>
  );
}
