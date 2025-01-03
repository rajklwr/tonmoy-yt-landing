"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import DoneStamp from "@/components/DoneStamp";
import BookingConfirmation from "@/components/BookingConfirmation";
import ReminderSection from "@/components/ReminderSection";

const ThankYou = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div
        className=" pb-16 px-4 bg-gradient-to-b from-black to-gray-900 flex flex-col pt-8 sm:pt-16 items-center  p-2 sm:p-8 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/bg1.png")', // Ensure this is the correct path to your background
          backgroundAttachment: "fixed", // Makes the background image stay fixed
        }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
          Thank You For <br /> Booking A Call !{" "}
        </h1>
        <div className=" relative mt-8 ">
          <div className=" w-full lg:w-1/3 text-xl sm:w-1/2 p-4 sm:p-6 lg:p-8 bg-opacity-20 text-white bg-gradient-to-b  from-white/30 to-black/40   rounded-2xl shadow-2xl border-2 border-white ">
            <p>
              Your booking has been received! ✅ However, to finalize your
              appointment, please check your email 📧 (or Whatsapp) for a
              confirmation message 💪
            </p>{" "}
            <br />
            <br />
            <br />
            <br />
            <p>
              Once you confirm your availability by replying to that email or
              message, your call will be officially scheduled.
            </p>{" "}
          </div>
          <DoneStamp />
        </div>
      </div>
      <BookingConfirmation/>
      <div className="bg-gradient-to-b from-black to-gray-900" >
      <ReminderSection />
      <Footer bg={'bg-gradient-to-b from-black to-gray-900'} />
      </div>
    </>
  );
};

export default ThankYou;
