import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tutorial from "./components/Tutorial";
import RecommendedCourses from "./components/RecommendedCourses";
import Features from "./components/Features";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-primary font-serif">
      <Navbar />
      <Hero />
      <Tutorial />
      <RecommendedCourses limit={3} />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
