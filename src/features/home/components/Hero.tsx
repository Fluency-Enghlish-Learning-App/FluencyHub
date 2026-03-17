import React from "react";
import { Check, ChevronRight, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-40 pb-24 px-8 bg-gradient-to-br from-background-secondary to-background-primary relative overflow-hidden">
      <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(circle,rgba(82,170,165,0.05)_0%,transparent_70%)] animate-float"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h1 className="font-serif text-[4.5rem] font-extrabold leading-[1.1] mb-6 text-text-primary animate-fadeInUp">
            Master English with{" "}
            <span className="text-primary relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-primary-light after:opacity-30 after:-z-10">
              Confidence
            </span>
          </h1>
          <p className="text-[1.3rem] text-text-secondary mb-10 font-normal leading-[1.8] animate-fadeInUp animation-delay-200">
            Comprehensive learning path from beginner to advanced. Practice with
            AI, track your progress, and achieve fluency faster.
          </p>

          <div className="flex gap-8 mb-12 animate-fadeInUp animation-delay-400">
            <div className="flex items-center gap-3 text-text-secondary text-base">
              <Check size={20} className="text-primary shrink-0" />
              <span>Structured Path</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-base">
              <Check size={20} className="text-primary shrink-0" />
              <span>AI Practice</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-base">
              <Check size={20} className="text-primary shrink-0" />
              <span>Smart Tracking</span>
            </div>
          </div>

          <div className="flex gap-6 animate-fadeInUp animation-delay-600">
            <button
              className="bg-primary text-white border-none py-3 px-8 rounded-[8px] font-serif text-[1rem] font-semibold cursor-pointer transition-all duration-300 shadow-md flex items-center gap-3 hover:bg-primary-hover hover:-translate-y-[2px] hover:shadow-lg"
              onClick={() => navigate("/courses")}
            >
              Start Learning Now
              <ChevronRight size={18} />
            </button>
            <button
              className="bg-transparent text-text-primary border-2 border-[#e0e0d8] py-3 px-8 rounded-[8px] font-serif text-[1rem] font-semibold cursor-pointer transition-all duration-300 hover:border-primary hover:text-primary"
              onClick={() => navigate("/courses")}
            >
              View Courses
            </button>
          </div>
        </div>

        <div className="relative animate-fadeIn animation-delay-500">
          <div className="w-full max-w-[500px] mx-auto bg-white rounded-[30px] p-6 shadow-lg transform perspective-[1000px] rotate-y-[-5deg] transition-transform duration-500 hover:rotate-y-0">
            <div className="w-full h-[600px] bg-gradient-to-br from-primary-light to-primary rounded-[20px] flex items-center justify-center text-white font-serif text-[2rem] font-bold">
              <span>Fluency App</span>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute top-[20%] right-[-20px] bg-white p-4 rounded-[8px] shadow-md flex items-center gap-4 animate-fadeInUp animation-delay-800">
            <div className="bg-primary-light p-3 rounded-[8px] text-white">
              <Users size={24} />
            </div>
            <div>
              <div className="font-bold text-[1.2rem] text-text-primary">
                10K+
              </div>
              <div className="text-[0.9rem] text-text-secondary">
                Active Students
              </div>
            </div>
          </div>

          <div className="absolute bottom-[10%] left-[-20px] bg-white p-4 rounded-[8px] shadow-md flex items-center gap-4 animate-fadeInUp animation-delay-1000">
            <div className="bg-[#FFD700] p-3 rounded-[8px] text-white">
              <Star size={24} fill="white" />
            </div>
            <div>
              <div className="font-bold text-[1.2rem] text-text-primary">
                4.9/5
              </div>
              <div className="text-[0.9rem] text-text-secondary">
                Course Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
