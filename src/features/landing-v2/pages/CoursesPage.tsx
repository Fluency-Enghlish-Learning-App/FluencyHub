import { useState, useEffect } from "react";
import {
  THEMES,
  COURSE_SOURCES,
  GITHUB_REPO,
  PAGES_URLS,
  Course,
} from "../constants";
import { CourseService } from "../services/courseService";
import { FadeIn } from "../components/FadeIn";
import CourseCard from "../components/CourseCard";
import { useTheme } from "@/core/providers/theme-provider";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { theme: projectTheme } = useTheme();
  const theme =
    projectTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : projectTheme;
  const t = THEMES[theme] || THEMES.dark;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      const discovered = await CourseService.discoverCourses(
        PAGES_URLS,
        GITHUB_REPO,
      );
      const manual = await CourseService.fetchAllCourses(COURSE_SOURCES);
      setCourses([...discovered, ...manual]);
      setLoading(false);
    };
    loadCourses();
  }, []);

  const [filterData, setFilterData] = useState<
    { name: string; count: number; color: string }[]
  >([]);

  const CATEGORY_COLORS = [
    "#3b82f6", // Blue
    "#8b5cf6", // Violet
    "#ec4899", // Pink
    "#f97316", // Orange
    "#10b981", // Emerald
    "#06b6d4", // Cyan
    "#f43f5e", // Rose
    "#84cc16", // Lime
  ];

  useEffect(() => {
    if (courses.length > 0) {
      const counts: Record<string, number> = {};
      courses.forEach((c) => {
        (c.skills || []).forEach((s) => {
          counts[s] = (counts[s] || 0) + 1;
        });
      });

      const sortedSkills = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([name, count], i) => ({
          name,
          count,
          color: CATEGORY_COLORS[i % CATEGORY_COLORS.length],
        }));

      setFilterData([
        { name: "All", count: courses.length, color: t.accent },
        ...sortedSkills,
      ]);
    }
  }, [courses, t.accent]);

  const filtered = courses.filter((c) => {
    const matchTag =
      filter === "All" || (c.skills && c.skills.includes(filter));
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      (c.skills &&
        c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())));
    return matchTag && matchSearch;
  });

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        paddingTop: 100,
        minHeight: "100vh",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 100px" }}
      >
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px,4.5vw,56px)",
                fontWeight: 800,
                color: t.text,
                margin: "0 0 14px",
                letterSpacing: -1.5,
              }}
            >
              All Courses
            </h1>
            <p
              style={{
                fontSize: 17,
                color: t.textSub,
                maxWidth: 500,
                margin: "0 auto 32px",
              }}
            >
              Explore our complete library. Download any course to your device
              and learn offline, anywhere.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: "12px 18px",
                marginBottom: 16,
              }}
            >
              <span style={{ color: t.textMuted }}>🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses by name or topic..."
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: 15,
                  color: t.text,
                  fontFamily: "'Outfit', sans-serif",
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: t.textMuted,
                    fontSize: 18,
                  }}
                >
                  ✕
                </button>
              )}
            </div>
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "nowrap",
                  overflow: "hidden",
                  paddingBottom: 4,
                }}
              >
                {filterData.map((f) => {
                  const active = f.name === filter;
                  return (
                    <button
                      key={f.name}
                      onClick={() => setFilter(f.name)}
                      style={{
                        padding: "8px 18px",
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        background: active
                          ? `${f.color}25`
                          : theme === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.05)",
                        border: `1px solid ${active ? f.color : t.border}`,
                        color: active ? f.color : t.textSub,
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        fontFamily: "'Outfit', sans-serif",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {f.name} ({f.count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </FadeIn>

        <div style={{ fontSize: 13, color: t.textMuted, marginBottom: 24 }}>
          {loading
            ? "Searching for courses..."
            : `${filtered.length} course${filtered.length !== 1 ? "s" : ""} found`}
        </div>

        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: t.textSub,
            }}
          >
            Loading library...
          </div>
        ) : (
          <>
            <div
              className="course-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
              }}
            >
              {filtered.map((c, i) => (
                <FadeIn key={c.id} delay={i * 0.06}>
                  <CourseCard course={c} theme={theme} showDownload={true} />
                </FadeIn>
              ))}
            </div>

            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 0",
                  color: t.textMuted,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: 16 }}>
                  No courses found. Try a different search or filter.
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
