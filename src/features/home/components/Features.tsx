import React from "react";
import { Shield, Users, Award, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-8 bg-background-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[0.9rem] uppercase tracking-[2px] text-primary font-semibold mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-[3.5rem] font-bold text-text-primary mb-6">
            Why Choose Fluency?
          </h2>
          <p className="text-[1.2rem] text-text-secondary max-w-[700px] mx-auto">
            We provide the best tools and environment for your language learning
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="flex gap-8 items-start">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-primary-light to-primary rounded-[8px] flex items-center justify-center shrink-0 shadow-md">
              <Zap className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-[1.6rem] font-semibold mb-3 text-text-primary">
                Personalized Path
              </h3>
              <p className="text-text-secondary leading-[1.8]">
                AI analyzes your learning style and progress to adjust the
                curriculum in real-time, ensuring maximum efficiency.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-primary-light to-primary rounded-[8px] flex items-center justify-center shrink-0 shadow-md">
              <Users className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-[1.6rem] font-semibold mb-3 text-text-primary">
                Active Community
              </h3>
              <p className="text-text-secondary leading-[1.8]">
                Connect with learners worldwide, practice speaking in groups,
                and get support from peers and mentors.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-primary-light to-primary rounded-[8px] flex items-center justify-center shrink-0 shadow-md">
              <Award className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-[1.6rem] font-semibold mb-3 text-text-primary">
                Prestigious Certificates
              </h3>
              <p className="text-text-secondary leading-[1.8]">
                Receive recognized completion certificates for every level you
                master to boost your professional profile.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-primary-light to-primary rounded-[8px] flex items-center justify-center shrink-0 shadow-md">
              <Shield className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-[1.6rem] font-semibold mb-3 text-text-primary">
                Learn Anywhere
              </h3>
              <p className="text-text-secondary leading-[1.8]">
                Seamlessly sync your progress across all devices. Start on your
                phone, continue on your laptop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
