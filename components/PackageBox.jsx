// components/PackageBox.js
import React from 'react';

const PackageBox = ({ logo, altText, title, price, description }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-opacity-20 bg-gradient-to-b from-white/30 to-black/40 rounded-2xl shadow-2xl border-2 border-white flex-grow relative transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt={altText} className="w-24 h-24 mx-auto mb-4" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-xl sm:text-2xl text-white mb-4">
        8-10 minutes = <span className="font-bold">{price}</span> / video
      </p>
      <p className="text-lg sm:text-xl text-white">{description}</p>
    </div>
  );
};

export default PackageBox;
