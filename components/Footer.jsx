import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-black text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base mb-4">
          DISCLAIMER
        </p>
        <p className="text-xs sm:text-sm mb-4">
          NOT FACEBOOK<sup>™</sup>: This site is not a part of the Facebook<sup>™</sup> website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook<sup>™</sup> in any way. FACEBOOK<sup>™</sup> is a trademark of FACEBOOK<sup>™</sup>, Inc. Copyright {new Date().getFullYear()} - Growthsecrets Pvt Ltd - All rights Reserved
        </p>
        <div className="flex justify-center space-x-4 text-xs sm:text-sm">
          <a href="/terms" className="hover:underline">Terms</a>
          {/* <a href="/disclaimer" className="hover:underline">Disclaimer</a> */}
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
