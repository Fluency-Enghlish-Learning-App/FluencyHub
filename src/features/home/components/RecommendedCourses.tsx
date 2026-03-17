import React from "react";
import { BookOpen, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../data/mockData";

interface RecommendedCoursesProps {
  limit?: number;
  onCourseClick?: (courseId: number) => void;
  showTitle?: boolean;
}

const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({
  limit,
  onCourseClick,
  showTitle = true,
}) => {
  const navigate = useNavigate();
  const displayCourses = limit ? coursesData.slice(0, limit) : coursesData;

  const handleCourseClick = (course: any) => {
    if (course.downloadUrl) {
      window.open(course.downloadUrl, "_blank");
    } else {
      alert("Download link not available");
    }
  };

  const getSkillBadgeStyle = (skill: string) => {
    switch (skill.toLowerCase()) {
      case "listening":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "reading":
        return "bg-green-100 text-green-700 border-green-200";
      case "writing":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "speaking":
        return "bg-rose-100 text-rose-700 border-rose-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-24 px-8 bg-background-primary">
      <div className="max-w-[1400px] mx-auto">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="text-[0.9rem] uppercase tracking-[2px] text-primary font-semibold mb-4 block">
              Popular Courses
            </span>
            <h2 className="font-serif text-[3.5rem] font-bold text-text-primary mb-6">
              Recommended for You
            </h2>
            <p className="text-[1.2rem] text-text-secondary max-w-[700px] mx-auto">
              Quality courses designed by experts to help you master English
              effectively.
            </p>
          </div>
        )}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-10 mt-12">
          {displayCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-[8px] overflow-visible transition-all duration-400 cursor-pointer hover:-translate-y-2 group relative text-left"
              onClick={() => handleCourseClick(course)}
            >
              <div className="overflow-hidden rounded-[8px] relative mb-4">
                <div className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold px-2 py-1 rounded-[8px] shadow-md">
                  {course.targetAudience}
                </div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[450px] object-cover transition-transform duration-400 group-hover:scale-105"
                />

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col justify-center text-left z-10 rounded-[8px]">
                  <div className="font-bold text-text-primary text-lg mb-3">
                    {course.title}
                  </div>
                  <div className="mb-4 text-[0.9rem] leading-relaxed text-text-secondary line-clamp-6">
                    {course.fullDescription}
                  </div>
                  <div className="space-y-2 text-[0.9rem] text-text-secondary">
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Publisher:</span>
                      <span className="font-medium text-text-primary">
                        {course.publisher}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Adapter:</span>
                      <span className="font-medium text-text-primary">
                        {course.adapter}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Year:</span>
                      <span className="font-medium text-text-primary">
                        {course.publicationYear}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Pages:</span>
                      <span className="font-medium text-text-primary">
                        {course.pageCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[1.4rem] font-semibold mb-3 text-text-primary line-clamp-2">
                  {course.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skill &&
                    course.skill.map((s: string, idx: number) => (
                      <span
                        key={idx}
                        className={`text-[0.75rem] px-2 py-0.5 rounded-[8px] border ${getSkillBadgeStyle(
                          s,
                        )}`}
                      >
                        {s}
                      </span>
                    ))}
                </div>

                <p className="text-text-light text-[0.95rem] line-clamp-3">
                  {course.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
