import { motion } from "framer-motion";
import { 
  Brain, 
  Mic, 
  BarChart, 
  Users, 
  BookOpen, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  benefits: string[];
  color: {
    primary: string;
    secondary: string;
    light: string;
  };
}

const features: Feature[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến phân tích và điều chỉnh lộ trình học tập theo từng cá nhân.",
    benefits: [
      "Phân tích điểm mạnh và điểm yếu",
      "Tự động điều chỉnh độ khó",
      "Gợi ý bài học phù hợp",
      "Theo dõi tiến độ thời gian thực"
    ],
    color: {
      primary: "#FF6B6B",
      secondary: "#FF8787",
      light: "#FFF0F0"
    }
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Luyện Phát Âm",
    description: "Hệ thống nhận diện giọng nói chính xác, giúp cải thiện phát âm và ngữ điệu.",
    benefits: [
      "Phản hồi phát âm ngay lập tức",
      "So sánh với người bản ngữ",
      "Gợi ý cải thiện ngữ điệu",
      "Luyện tập theo từng âm"
    ],
    color: {
      primary: "#4ECDC4",
      secondary: "#6FE7DF",
      light: "#E8F8F7"
    }
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Phân Tích Tiến Độ",
    description: "Theo dõi chi tiết quá trình học tập với các biểu đồ và thống kê trực quan.",
    benefits: [
      "Biểu đồ tiến độ chi tiết",
      "Thống kê thời gian học tập",
      "Đánh giá kỹ năng toàn diện",
      "Dự đoán thời gian đạt mục tiêu"
    ],
    color: {
      primary: "#6C5CE7",
      secondary: "#8F84EA",
      light: "#F0EDFF"
    }
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Học Cộng Đồng",
    description: "Kết nối và học tập cùng cộng đồng người học toàn cầu.",
    benefits: [
      "Thảo luận với người học khác",
      "Chia sẻ kinh nghiệm học tập",
      "Tham gia thách thức nhóm",
      "Tổ chức học nhóm trực tuyến"
    ],
    color: {
      primary: "#A8E6CF",
      secondary: "#BFEBD9",
      light: "#F3FBF8"
    }
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Tài Liệu Phong Phú",
    description: "Kho tài liệu đa dạng với nhiều chủ đề và cấp độ khác nhau.",
    benefits: [
      "Bài học theo chủ đề",
      "Video từ người bản ngữ",
      "Tài liệu thực tế cập nhật",
      "Bài tập tương tác"
    ],
    color: {
      primary: "#FFD93D",
      secondary: "#FFE066",
      light: "#FFF8E1"
    }
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Trò Chuyện AI",
    description: "Thực hành giao tiếp với trợ lý AI thông minh mọi lúc mọi nơi.",
    benefits: [
      "Hội thoại tự nhiên",
      "Điều chỉnh tốc độ nói",
      "Học từ vựng trong ngữ cảnh",
      "Phản hồi ngữ pháp tức thì"
    ],
    color: {
      primary: "#FF8B94",
      secondary: "#FFA5AC",
      light: "#FFF1F2"
    }
  }
];

const FeatureShowcaseSection = () => {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                style={{ 
                  backgroundColor: feature.color.light,
                  color: feature.color.primary
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ color: feature.color.primary }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2 
                      className="w-5 h-5 shrink-0"
                      style={{ color: feature.color.secondary }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color.primary}, ${feature.color.secondary})` 
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <button
          className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg bg-[#52aaa5] hover:bg-[#3d8080]"
        >
          Bắt đầu học ngay
        </button>
      </motion.div>
    </section>
  );
};

export default FeatureShowcaseSection;