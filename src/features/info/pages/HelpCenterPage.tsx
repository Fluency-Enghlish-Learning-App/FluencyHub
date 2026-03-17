import React, { useEffect } from "react";
import Navbar from "@/features/home/components/Navbar";
import Footer from "@/features/home/components/Footer";

const HelpCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-[1000px] mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Help Center
        </h1>
        <p className="text-text-secondary leading-relaxed mb-6">
          Welcome to the Fluency Help Center. We're here to assist you with your
          language learning journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-text-primary">
              Getting Started
            </h3>
            <p className="text-text-secondary">
              Learn how to set up your account and start your first course.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-text-primary">
              Account & Billing
            </h3>
            <p className="text-text-secondary">
              Manage your subscription, payment methods, and account settings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-text-primary">
              Course Content
            </h3>
            <p className="text-text-secondary">
              Questions about course materials, downloads, and progress
              tracking.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-text-primary">
              Technical Support
            </h3>
            <p className="text-text-secondary">
              Troubleshooting common issues and platform requirements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenterPage;
