import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  fluency: boolean;
  traditional: boolean;
  otherApps: boolean;
  description: string;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: "AI Cá Nhân Hóa",
    fluency: true,
    traditional: false,
    otherApps: false,
    description: "Công nghệ AI thông minh tự động điều chỉnh theo trình độ người học"
  },
  {
    feature: "Phản Hồi Thời Gian Thực",
    fluency: true,
    traditional: false,
    otherApps: true,
    description: "Nhận phản hồi ngay lập tức về phát âm và ngữ pháp"
  },
  {
    feature: "Học Cùng Người Bản Ngữ",
    fluency: true,
    traditional: true,
    otherApps: false,
    description: "Tương tác và học hỏi từ giáo viên bản ngữ"
  },
  {
    feature: "Nội Dung Thực Tế",
    fluency: true,
    traditional: true,
    otherApps: false,
    description: "Học qua các tình huống và tài liệu thực tế"
  },
  {
    feature: "Lộ Trình Linh Hoạt",
    fluency: true,
    traditional: false,
    otherApps: true,
    description: "Tự do điều chỉnh thời gian và nội dung học tập"
  },
  {
    feature: "Phân Tích Dữ Liệu",
    fluency: true,
    traditional: false,
    otherApps: false,
    description: "Theo dõi và phân tích chi tiết quá trình học tập"
  }
];

const FeatureComparisonSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            So Sánh Phương Pháp Học
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những ưu điểm vượt trội của Fluency so với các phương pháp học tiếng Anh khác
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-lg font-semibold text-gray-900">
                Tính năng
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-[#52aaa5] mb-2">
                  Fluency
                </div>
                <div className="text-sm text-gray-600">
                  Nền tảng học thông minh
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Trung tâm truyền thống
                </div>
                <div className="text-sm text-gray-600">
                  Học offline tại lớp
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Ứng dụng khác
                </div>
                <div className="text-sm text-gray-600">
                  Các app học tiếng Anh
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {comparisonFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col justify-center">
                    <div className="font-medium text-gray-900">
                      {item.feature}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </div>
                  </div>
                  
                  {/* Fluency */}
                  <div className="flex items-center justify-center">
                    {item.fluency ? (
                      <CheckCircle2 className="w-6 h-6 text-[#52aaa5]" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>

                  {/* Traditional */}
                  <div className="flex items-center justify-center">
                    {item.traditional ? (
                      <CheckCircle2 className="w-6 h-6 text-gray-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>

                  {/* Other Apps */}
                  <div className="flex items-center justify-center">
                    {item.otherApps ? (
                      <CheckCircle2 className="w-6 h-6 text-gray-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonSection;