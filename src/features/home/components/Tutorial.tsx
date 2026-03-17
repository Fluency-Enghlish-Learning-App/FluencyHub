import React from "react";

const Tutorial = () => {
  return (
    <section className="py-24 px-8 bg-background-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[0.9rem] uppercase tracking-[2px] text-primary font-semibold mb-4 block">
            How It Works
          </span>
          <h2 className="font-serif text-[3.5rem] font-bold text-text-primary mb-6">
            Simple Process to Start Your Journey
          </h2>
          <p className="text-[1.2rem] text-text-secondary max-w-[700px] mx-auto">
            We simplify the learning process so you can focus on what matters
            most - mastering the language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="text-center p-8 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover text-white rounded-full flex items-center justify-center font-serif text-[2rem] font-bold mx-auto mb-6 shadow-md">
              1
            </div>
            <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary">
              Choose Your Course
            </h3>
            <p className="text-text-secondary leading-[1.8]">
              Explore our diverse course library and find the one that fits your
              goals and interests perfectly.
            </p>
          </div>
          <div className="text-center p-8 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover text-white rounded-full flex items-center justify-center font-serif text-[2rem] font-bold mx-auto mb-6 shadow-md">
              2
            </div>
            <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary">
              Take a Test
            </h3>
            <p className="text-text-secondary leading-[1.8]">
              Assess your current level with our smart placement test to get a
              personalized learning path tailored just for you.
            </p>
          </div>
          <div className="text-center p-8 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover text-white rounded-full flex items-center justify-center font-serif text-[2rem] font-bold mx-auto mb-6 shadow-md">
              3
            </div>
            <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary">
              Get Your Path
            </h3>
            <p className="text-text-secondary leading-[1.8]">
              Our AI system will design a detailed roadmap with daily lessons
              and exercises to help you achieve fluency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
