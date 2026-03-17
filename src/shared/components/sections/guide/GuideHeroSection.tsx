import { motion } from "framer-motion";

const GuideHeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Hướng Dẫn Sử Dụng
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tìm hiểu cách sử dụng Fluency hiệu quả nhất để đạt được mục tiêu học tập của bạn
        </p>
      </motion.div>
    </section>
  );
};

export default GuideHeroSection;