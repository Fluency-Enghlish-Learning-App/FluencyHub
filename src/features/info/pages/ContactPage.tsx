import { useEffect } from "react";
import Navbar from "@/features/home/components/Navbar";
import Footer from "@/features/home/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Contact Us
        </h1>
        <p className="text-text-secondary leading-relaxed mb-12">
          Have questions or feedback? We'd love to hear from you. Fill out the
          form below or send us an email.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-text-secondary mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white font-sans"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-text-secondary mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white font-sans"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-text-secondary mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white font-sans"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-text-secondary mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white font-sans resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-3 px-8 rounded-[8px] font-semibold shadow-md hover:bg-primary-hover transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
