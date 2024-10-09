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
        <h2 className="text-2xl font-bold text-white">{question}</h2>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-white" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-white" />
        )}
      </div>

      {/* Answer Section (Collapsible) */}
      {isOpen && (
        <p className="mt-4 text-lg text-white leading-relaxed">
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
      className="min-h-screen bg-gradient-to-b from-black to-blue-900 py-12 flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg5.png")' }}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="flex justify-center items-center">
          <div className="border-t-2 border-white w-12 mr-2"></div>
          <div className="text-white">•</div>
          <div className="border-t-2 border-white w-12 ml-2"></div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-3xl">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
