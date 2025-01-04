"use client";
import React from "react";
import Footer from "@/components/Footer";
import BookYourCall from "@/components/BookYourCall";
import WhatWeHaveDone from "@/components/WhatWeHaveDone";
import FAQ from "@/components/FAQ";
import Budget from "@/components/Budget";
import Packages from "@/components/Packages";
import { PackagesfaqData } from "@/data/faq-data";

const Pricing = () => {
  return (
    <div>
      <Budget />
      <Packages />
      <FAQ faqData={PackagesfaqData} />
      <WhatWeHaveDone />
      <BookYourCall />
      <Footer />
    </div>
  );
};

export default Pricing;
