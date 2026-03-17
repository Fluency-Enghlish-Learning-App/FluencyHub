import { motion } from "framer-motion";

interface GuideStep {
  title: string;
  description: string;
  tips: string[];
}

const quickStartGuides: GuideStep[] = [
  {
    title: "Tạo tài khoản & Cài đặt",
    description: "Bắt đầu hành trình học tiếng Anh của bạn bằng cách tạo tài khoản và cài đặt ứng dụng Fluency trên các thiết bị.",
    tips: [
      "Sử dụng email thường xuyên để nhận thông báo quan trọng",
      "Cài đặt ứng dụng trên nhiều thiết bị để học mọi lúc mọi nơi",
      "Bật đồng bộ hóa dữ liệu để không mất tiến độ học tập",
      "Tùy chỉnh hồ sơ với sở thích học tập của bạn"
    ]
  },
  {
    title: "Kiểm tra trình độ",
    description: "Làm bài kiểm tra toàn diện để xác định trình độ tiếng Anh hiện tại và nhận lộ trình học tập được cá nhân hóa.",
    tips: [
      "Trả lời trung thực để được đánh giá chính xác",
      "Hoàn thành tất cả các phần: Đọc, Viết, Nghe và Nói",
      "Không cần chuẩn bị trước - kiểm tra khả năng tự nhiên",
      "Thời gian làm bài khoảng 30-45 phút"
    ]
  },
  {
    title: "Thiết lập mục tiêu",
    description: "Xác định mục tiêu học tập và cam kết thời gian biểu phù hợp với lối sống để đạt tiến độ tối ưu.",
    tips: [
      "Đặt mục tiêu SMART (Cụ thể, Đo lường được, Khả thi, Phù hợp, Có thời hạn)",
      "Chia nhỏ mục tiêu dài hạn thành các cột mốc hàng tuần",
      "Phân bổ thời gian cụ thể cho việc luyện tập hàng ngày",
      "Theo dõi tiến độ với công cụ phân tích tích hợp"
    ]
  },
  {
    title: "Bắt đầu học tập",
    description: "Bắt đầu với các bài học cơ bản và dần dần tiến tới nội dung thách thức hơn trong khi phát triển tất cả kỹ năng ngôn ngữ.",
    tips: [
      "Luyện tập đều đặn, dù chỉ 15 phút mỗi ngày",
      "Tập trung vào phát âm và mẫu câu tự nhiên",
      "Thực hành với các tình huống giao tiếp thực tế",
      "Sử dụng tính năng luyện nói với AI"
    ]
  },
  {
    title: "Theo dõi & Cải thiện",
    description: "Giám sát tiến độ và sử dụng các tính năng nâng cao để đẩy nhanh quá trình phát triển tiếng Anh của bạn.",
    tips: [
      "Xem xét thống kê hiệu suất hàng tuần",
      "Tham gia cộng đồng trao đổi ngôn ngữ",
      "Tham gia các buổi hội thoại trực tiếp",
      "Sử dụng phương pháp lặp lại ngắt quãng để ghi nhớ từ vựng"
    ]
  }
];

const QuickStartGuideSection = () => {
  return (
    <section className="bg-[#f6f6f0] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 text-center"
          >
            Hướng dẫn nhanh
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-center mb-12 text-lg"
          >
            Làm theo các bước sau để bắt đầu hành trình chinh phục tiếng Anh
          </motion.p>
          <div className="space-y-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#52aaa5]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-[#52aaa5]">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#52aaa5] mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">{guide.description}</p>
                  <div className="bg-[#f6f6f0] p-5 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-3 text-lg">Mẹo hay:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {guide.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#52aaa5] mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartGuideSection;