import RecommendedCourses from "@/features/home/components/RecommendedCourses";
import Navbar from "@/features/home/components/Navbar";
import Footer from "@/features/home/components/Footer";
import { useEffect } from "react";

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <div className="pt-20">
        <RecommendedCourses limit={100} showTitle={false} />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
