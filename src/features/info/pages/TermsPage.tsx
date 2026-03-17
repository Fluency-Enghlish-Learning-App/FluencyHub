import React, { useEffect } from "react";
import Navbar from "@/features/home/components/Navbar";
import Footer from "@/features/home/components/Footer";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>Last updated: January 2024</p>
          <p>
            Please read these Terms of Service ("Terms") carefully before using
            the Fluency platform.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            2. Use License
          </h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Fluency's website for
            personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            3. Disclaimer
          </h2>
          <p>
            The materials on Fluency's website are provided on an 'as is' basis.
            Fluency makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
