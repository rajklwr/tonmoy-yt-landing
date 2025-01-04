"use client";
import React from "react";
import Footer from "@/components/Footer";
import BookYourCall from "@/components/BookYourCall";
import WhatWeHaveDone from "@/components/WhatWeHaveDone";
import FAQ from "@/components/FAQ";
import Budget from "@/components/Budget";
import Packages from "@/components/Packages";

const Pricing = () => {
  return (
    <div>
      <Budget />
      <Packages />
      <FAQ />
      <WhatWeHaveDone />
      <BookYourCall />
      <Footer />
    </div>
  );
};

export default Pricing;
