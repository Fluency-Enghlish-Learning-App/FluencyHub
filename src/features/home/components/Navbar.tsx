import React from "react";
import { BookOpen } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-[20px] border-b border-[#e0e0d8] z-[1000] py-5">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <Link
          to="/"
          className="font-serif text-[1.8rem] font-bold text-primary cursor-pointer flex items-center gap-2 no-underline"
        >
          <BookOpen />
          <span>Fluency</span>
        </Link>
        <ul className="flex gap-10 list-none ml-auto">
          <li>
            <Link
              to="/"
              className={`text-text-primary no-underline text-[1.1rem] font-medium relative cursor-pointer transition-colors duration-300 hover:text-primary group ${
                isActive("/") ? "text-primary" : ""
              }`}
            >
              Home
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive("/") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`text-text-primary no-underline text-[1.1rem] font-medium relative cursor-pointer transition-colors duration-300 hover:text-primary group ${
                isActive("/courses") ? "text-primary" : ""
              }`}
            >
              Courses
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive("/courses") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
