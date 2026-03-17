import React from "react";
import { BookOpen, Star, Users, Check } from "lucide-react";

interface CourseDetailProps {
  course: any;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  if (!course) return null;

  return (
    <div className="pt-32 pb-16 px-8 bg-background-primary min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-background-secondary rounded-[30px] p-12 mb-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="rounded-[20px] overflow-hidden shadow-lg mb-8">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto block"
                />
              </div>

              {/* Additional Course Info */}
              <div className="grid grid-cols-2 gap-4 text-text-secondary text-[0.95rem]">
                <div>
                  <span className="block text-text-light text-[0.85rem] mb-1">
                    Publisher
                  </span>
                  <span className="font-medium text-text-primary">
                    {course.publisher}
                  </span>
                </div>
                <div>
                  <span className="block text-text-light text-[0.85rem] mb-1">
                    Year
                  </span>
                  <span className="font-medium text-text-primary">
                    {course.publicationYear}
                  </span>
                </div>
                <div>
                  <span className="block text-text-light text-[0.85rem] mb-1">
                    Adapter
                  </span>
                  <span className="font-medium text-text-primary">
                    {course.adapter}
                  </span>
                </div>
                <div>
                  <span className="block text-text-light text-[0.85rem] mb-1">
                    Pages
                  </span>
                  <span className="font-medium text-text-primary">
                    {course.pageCount}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block bg-primary-light text-white py-2 px-4 rounded-[20px] text-[0.85rem] font-semibold mb-6">
                {course.level}
              </span>
              <h1 className="font-serif text-[3rem] font-bold text-text-primary mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-[1.2rem] text-text-light mb-8">
                Author:{" "}
                <span className="text-primary font-semibold">
                  {course.author}
                </span>
              </p>

              <div className="flex gap-8 mb-8">
                <div className="flex items-center gap-2 text-[1.1rem] text-text-secondary">
                  <Star size={24} fill="#FFD700" color="#FFD700" />
                  <span className="font-bold text-text-primary">
                    {course.rating}
                  </span>
                  <span>(10M+ reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-[1.1rem] text-text-secondary">
                  <Users size={24} />
                  <span>{course.students} students</span>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-[1.2rem] font-bold text-text-primary mb-3">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skill &&
                    course.skill.map((s: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#e0e0d8] text-text-secondary py-1 px-3 rounded-[10px] text-[0.9rem]"
                      >
                        {s}
                      </span>
                    ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="font-serif text-[1.2rem] font-bold text-text-primary mb-3">
                  Description
                </h3>
                <p className="text-[1.1rem] leading-[1.8] text-text-secondary">
                  {course.fullDescription}
                </p>
              </div>

              <button
                className="bg-primary text-white border-none py-4 px-10 rounded-[50px] font-serif text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-primary-hover hover:-translate-y-[3px] hover:shadow-lg w-full md:w-auto"
                onClick={() => {
                  if (course.downloadUrl) {
                    window.open(course.downloadUrl, "_blank");
                  } else {
                    alert("Download link not available");
                  }
                }}
              >
                Download Materials
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <div>
            <h2 className="font-serif text-[2rem] font-bold text-text-primary mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {course.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-primary-light rounded-full p-1 flex text-white shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-text-secondary text-[1.1rem]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[2rem] font-bold text-text-primary mb-8">
              Content Preview
            </h2>
            <div className="flex flex-col gap-4">
              {course.chapters.map((chapter: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-background-secondary p-6 rounded-[15px] flex justify-between items-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[rgba(82,170,165,0.1)] text-primary rounded-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-[1.1rem] font-semibold text-text-primary">
                      {chapter.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-text-light">
                    <BookOpen size={18} />
                    <span>{chapter.lessons} parts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>{/* Sidebar placeholder */}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
