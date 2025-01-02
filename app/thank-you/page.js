"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import DoneStamp from "@/components/DoneStamp";
import BookingConfirmation from "@/components/BookingConfirmation";

const ThankYou = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div
        className=" min-h-screen bg-gradient-to-r from-orange-500 to-black flex flex-col pt-16 sm:pt-32 items-center  p-2 sm:p-8 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/bg1.png")', // Ensure this is the correct path to your background
          backgroundAttachment: "fixed", // Makes the background image stay fixed
        }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
          Thank You For <br /> Booking A Call !{" "}
        </h1>
        <div className=" relative mt-8 ">
          <div className=" lg:w-1/2 sm:w-1/2 p-4 sm:p-6 lg:p-8 bg-opacity-20 text-white bg-gradient-to-b  from-white/30 to-black/40   rounded-2xl shadow-2xl border-2 border-white ">
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
      <Footer />
    </>
  );
};

export default ThankYou;
