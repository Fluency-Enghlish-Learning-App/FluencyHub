import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-text-primary text-background-primary pt-16 px-8 pb-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="max-w-[400px]">
          <div className="font-serif text-[1.8rem] font-bold text-primary mb-4 flex items-center gap-2">
            <BookOpen /> Fluency
          </div>
          <p className="text-text-light leading-[1.8] mb-6">
            Empowering your language learning journey with cutting-edge
            technology and proven methods.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-[1.2rem] font-semibold mb-6 text-background-secondary">
            Quick Links
          </h4>
          <ul className="list-none flex flex-col gap-3">
            <li>
              <Link
                to="/courses"
                className="text-text-light no-underline transition-colors duration-300 hover:text-primary"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="text-text-light no-underline transition-colors duration-300 hover:text-primary"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-text-light no-underline transition-colors duration-300 hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-text-light no-underline transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-text-light no-underline transition-colors duration-300 hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-white/10 text-text-light">
        <p>&copy; 2024 Fluency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
