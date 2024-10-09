import React from 'react';
import YouTubeAnalytics from '@/components/YouTubeAnalytics';
import YouTubeChannels from '@/components/YouTubeChannels';
import HowItWorks from '@/components/HowItWorks';
import WhatWeHaveDone from '@/components/WhatWeHaveDone';
import FAQ from '@/components/FAQ';
import BookYourCall from '@/components/BookYourCall';

export default function HomePage() {
  return (
    <div>
      <YouTubeAnalytics />
      <YouTubeChannels/>
      <HowItWorks/>
      <WhatWeHaveDone/>
      <FAQ/>
      <BookYourCall/>
    </div>
  );
}
