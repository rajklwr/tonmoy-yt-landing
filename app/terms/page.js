"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            Welcome to YT Growth Secrets Private Limited (&quot;we&quot;, &quot;our&quot;, 
            or &quot;us&quot;). By accessing or using our website, services, or products, you agree to be 
            bound by these Terms of Service (&quot;Terms&quot;). Please read them carefully before 
            using our services.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            By accessing or using our website or services, you agree to comply with 
            and be bound by these Terms and any applicable laws and regulations. 
            If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            2. Changes to the Terms
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            We reserve the right to update or modify these Terms at any time without 
            prior notice. The &quot;Last Updated&quot; date at the top of this page indicates 
            the latest revision. Your continued use of our website or services after 
            any changes constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            3. User Responsibilities
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            You agree to use our services only for lawful purposes and in compliance 
            with these Terms. You are responsible for maintaining the confidentiality 
            of your account information and for all activities under your account.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            4. Intellectual Property
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            All content on our website, including text, graphics, logos, and software, 
            is the property of YT Growth Secrets Private Limited and is protected 
            by copyright, trademark, and other laws. Unauthorized use of any content 
            is strictly prohibited.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            5. Limitation of Liability
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            We are not liable for any direct, indirect, incidental, or consequential 
            damages arising from your use of our website or services. This includes, 
            but is not limited to, loss of data or profits.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            6. Termination
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            We may terminate or suspend your access to our services at any time for 
            any reason, including violation of these Terms. Upon termination, your 
            right to use our services will cease immediately.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            7. Governing Law
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            These Terms are governed by the laws of India. Any disputes arising from 
            or relating to these Terms will be resolved in the courts of New Delhi, India.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            8. Contact Us
          </h2>
          <div className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            <p>
              If you have any questions or concerns about these Terms, please contact us:
            </p>
            <p>YT Growth Secrets Private Limited</p>
            <p>Registered Office: Mahavir Enclave Part 2, New Delhi, India</p>
            <p>Email: support@ytgrowthsecrets.com</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            Copyright &copy; {currentYear && currentYear} YT Growth Secrets Private 
            Limited. All rights reserved.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
