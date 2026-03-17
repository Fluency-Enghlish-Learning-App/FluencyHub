import React, { Suspense } from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f6f6f0]">
      <Suspense fallback={<div className="h-screen" />}>{children}</Suspense>
    </div>
  );
};

export default LandingLayout;
