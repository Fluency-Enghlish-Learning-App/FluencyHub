import { motion } from "framer-motion";

const FeatureHeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 bg-[#52aaa5]/10 rounded-full text-[#52aaa5] mb-6">
          <span className="font-medium">✨ Tính năng nổi bật</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Khám phá sức mạnh của{" "}
          <span className="text-[#52aaa5]">Fluency</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trải nghiệm cách học tiếng Anh hiện đại với công nghệ AI tiên tiến và phương pháp học tập được cá nhân hóa.
        </p>
      </motion.div>
    </section>
  );
};

export default FeatureHeroSection;