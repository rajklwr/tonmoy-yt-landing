import React from "react";

const UnderlineHeader = ({ title }) => {
  return (
    <div className="w-full max-w-6xl mb-8 text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <div className="flex items-center justify-start -mt-[10px]">
        {/* First part of the underline */}
        <div
          className="h-1"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
            width: "150px", // Small width for mobile
          }}
        ></div>
        {/* Dot in the center */}
        <div className="text-white mx-2">•</div>
        {/* Second part of the underline */}
        <div
          className="h-1"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
            width: "150px", // Small width for mobile
          }}
        ></div>
      </div>

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
  );
};

export default UnderlineHeader;
