import { useEffect } from "react";
import Navbar from "@/features/home/components/Navbar";
import Footer from "@/features/home/components/Footer";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>Last updated: January 2024</p>
          <p>
            Your privacy is important to us. It is Fluency's policy to respect
            your privacy regarding any information we may collect from you
            across our website.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            How We Use Information
          </h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>
              Communicate with you, either directly or through one of our
              partners
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
            Security
          </h2>
          <p>
            We retain collected information for as long as necessary to provide
            you with your requested service. What data we store, we'll protect
            within commercially acceptable means to prevent loss and theft, as
            well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
