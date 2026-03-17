import React, { Suspense } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <main className="bg-background-primary flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
            </div>
          }>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
