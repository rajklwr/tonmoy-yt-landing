// components/FAQ.jsx
'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-2 border-white p-4 rounded-2xl shadow-lg bg-transparent">
      {/* Question Section */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-left">
          {question}
        </h2>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-white" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-white" />
        )}
      </div>

      {/* Answer Section (Collapsible) */}
      {isOpen && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white leading-relaxed text-left">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'Who Owns The Channel?',
      answer:
        'You have complete ownership of not only the channel, but anything produced within our service. This means anything from our videos, down to your channel logo.',
    },
    {
      question: 'When Can I See Results?',
      answer:
        'We believe setting the right expectations is crucial for success. Results can vary based on many factors, but our program is designed to allow enough time to achieve the income most clients are looking for.',
    },
    {
      question: 'How Do I Know This Is Legit?',
      answer:
        'We put everything in writing to ensure we\'re on the same page and meet expectations. We prefer calls because it\'s easier to show who we are, rather than relying on a simple website.',
    },
  ];

  return (
    <div
      className=" bg-gradient-to-b from-black to-blue-900 py-8 sm:py-12 flex flex-col items-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: 'url("/images/bg5.png")' }}
    >
      {/* Title */}
      <div className="w-full max-w-6xl mb-8 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h1>
<div className="flex items-center justify-start -mt-[10px]">
  {/* First part of the underline */}
  <div
    className="h-1"
    style={{
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
      width: '150px', // Small width for mobile
    }}
  ></div>
  {/* Dot in the center */}
  <div className="text-white mx-2">•</div>
  {/* Second part of the underline */}
  <div
    className="h-1"
    style={{
      background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))',
      width: '150px', // Small width for mobile
    }}
  ></div>

  {/* Adjust the widths for larger screens using Tailwind classes */}
  <style jsx>{`
    @media (min-width: 768px) {
      div:first-child {
        width: 300px !important; /* Original width for larger screens */
      }
      div:last-child {
        width: 300px !important; /* Original width for larger screens */
      }
    }
  `}</style>
</div>

      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-5xl text-left space-y-4"> {/* Added spacing between FAQ items */}
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
