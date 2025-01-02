"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            At YT Growth Secrets Private Limited (&quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;), we are committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines how we collect, use, store, and share
            information about you when you use our website and services. By
            accessing our website or engaging with our services, you agree to
            the terms of this Privacy Policy.
          </p>
          {/* Other sections remain the same */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            10. Updates to This Privacy Policy
          </h2>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal and regulatory reasons. The
            &quot;Last Updated&quot; date at the top of this page indicates when
            the policy was last revised. Continued use of our website or
            services constitutes your acceptance of any updates.
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            11. Contact Us
          </h2>
          <div className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            <p>
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our handling of your personal information,
              please contact us:
            </p>
            <p>YT Growth Secrets Private Limited</p>
            <p>Registered Office: Mahavir Enclave Part 2, New Delhi, India</p>
            <p>Email: support@ytgrowthsecrets.com</p>
            <p>Phone: +91 6000205657</p>
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

export default Privacy;
