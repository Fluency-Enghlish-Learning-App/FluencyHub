import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Fluency giúp cải thiện tiếng Anh như thế nào?",
      answer: "Fluency sử dụng phương pháp học toàn diện kết hợp các bài tập tương tác, phản hồi thời gian thực và lộ trình học được cá nhân hóa. Ứng dụng tập trung vào tất cả các kỹ năng ngôn ngữ: nói, nghe, đọc và viết, với công nghệ thích ứng tự động điều chỉnh theo tốc độ và phong cách học của bạn."
    },
    {
      question: "Mỗi ngày nên học bao lâu để đạt hiệu quả tốt nhất?",
      answer: "Chúng tôi khuyến nghị học tập 15-30 phút mỗi ngày để có kết quả tối ưu. Các bài học được thiết kế phù hợp với lịch trình bận rộn của bạn, và bạn có thể theo dõi tiến độ thông qua bảng phân tích tích hợp của chúng tôi."
    },
    {
      question: "Tôi có thể sử dụng Fluency khi không có kết nối internet không?",
      answer: "Có! Nhiều tính năng có sẵn trong chế độ offline. Bạn có thể tải xuống bài học và tài liệu thực hành để sử dụng khi không có kết nối internet. Tuy nhiên, một số tính năng như học với gia sư trực tiếp và luyện tập hội thoại sẽ cần kết nối internet."
    },
    {
      question: "Fluency có phù hợp với người mới bắt đầu không?",
      answer: "Hoàn toàn phù hợp! Fluency phục vụ mọi trình độ, từ người mới bắt đầu đến người học nâng cao. Bài kiểm tra đánh giá ban đầu sẽ giúp xác định trình độ hiện tại của bạn và tạo lộ trình học phù hợp."
    },
    {
      question: "Điểm khác biệt của Fluency so với các ứng dụng học tiếng Anh khác?",
      answer: "Fluency nổi bật với việc tập trung vào kỹ năng giao tiếp thực tế, tương tác với người bản ngữ và công nghệ nhận dạng giọng nói tiên tiến. Chúng tôi cũng cung cấp phản hồi cá nhân hóa và lộ trình học thích ứng phát triển cùng với tiến bộ của bạn."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tìm hiểu thêm về cách Fluency có thể giúp bạn cải thiện tiếng Anh
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        openIndex === index ? "bg-[#52aaa5]" : "bg-gray-100"
                      }`}
                    >
                      <HelpCircle 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index ? "text-white" : "text-gray-500"
                        }`} 
                      />
                    </div>
                    <span className={`text-lg font-medium transition-colors duration-300 ${
                      openIndex === index ? "text-[#52aaa5]" : "text-gray-900"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#52aaa5]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      {/* Decorative line */}
                      <div 
                        className="h-0.5 w-16 mt-4 rounded-full"
                        style={{ backgroundColor: "#52aaa5" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;