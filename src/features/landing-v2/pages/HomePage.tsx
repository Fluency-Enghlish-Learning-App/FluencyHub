import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
import googlePlayBadge from "@/assets/google-play.png";

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const { theme: projectTheme } = useTheme();
  const theme =
    projectTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : projectTheme;
  const t = THEMES[theme] || THEMES.dark;

  useEffect(() => {
    const loadCourses = async () => {
      setLoadingCourses(true);
      // Discovery via Cloudflare Pages (with GitHub fallback)
      const discovered = await CourseService.discoverCourses(
        PAGES_URLS,
        GITHUB_REPO,
      );
      // also fetch from explicit sources
      const manual = await CourseService.fetchAllCourses(COURSE_SOURCES);

      setCourses([...discovered, ...manual]);
      setLoadingCourses(false);
    };
    loadCourses();
  }, []);

  const stats = [
    { v: "50K+", l: "Active Learners" },
    { v: "200+", l: "Total Lessons" },
    { v: "8", l: "Course Topics" },
    { v: "4.9★", l: "App Rating" },
  ];

  const features = [
    {
      icon: "🧠",
      title: "Spaced Repetition SRS",
      desc: "Scientifically proven flashcard algorithm. Optimal review intervals reduce forgetting by 90% and help you retain vocabulary long-term.",
    },
    {
      icon: "🎯",
      title: "Adaptive Learning AI",
      desc: "Personalized learning path that automatically adjusts difficulty and content based on your performance and learning patterns.",
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      desc: "Detailed dashboard tracking your streak, XP points, completed lessons, retention rate, and fluency milestones.",
    },
    {
      icon: "🎙️",
      title: "Pronunciation AI",
      desc: "Real-time pronunciation scoring using speech recognition. Phoneme-level feedback helps you sound like a native speaker.",
    },
    {
      icon: "🏆",
      title: "Gamification System",
      desc: "Earn badges, climb leaderboards, and maintain daily streaks. Consistent practice feels rewarding, not like a chore.",
    },
    {
      icon: "📱",
      title: "Offline-First Design",
      desc: "Download entire courses for full offline access. Perfect for commuting, traveling, or areas with limited connectivity.",
    },
  ];

  const reviews = [
    {
      name: "Alex Doe",
      country: "🇻🇳",
      text: "Fluency changed how I learn English. The spaced repetition is incredibly effective — I retained more vocab in 2 months than in 2 years of traditional study.",
      rating: 5,
      job: "Software Engineer",
      img: 2,
    },
    {
      name: "Tanaka Yuki",
      country: "🇯🇵",
      text: "The pronunciation AI is outstanding. My colleagues noticed a real difference after just 3 weeks. The daily streak system keeps me motivated every single day.",
      rating: 5,
      job: "Marketing Manager",
      img: 5,
    },
    {
      name: "Carlos M.",
      country: "🇧🇷",
      text: "Business English course was exactly what I needed for my promotion. Clear, practical, and well-structured. Offline mode is a lifesaver during my commute.",
      rating: 5,
      job: "Project Manager",
      img: 8,
    },
    {
      name: "Anh Khoa",
      country: "🇻🇳",
      text: "I've tried Duolingo, Babbel, and others. Fluency is in a different league. The content depth and clean UI make it feel like a truly premium product.",
      rating: 5,
      job: "Medical Student",
      img: 12,
    },
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: t.heroGradient,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: t.meshA,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: t.meshB,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* Left copy */}
            <div>
              <h1
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(38px,5vw,64px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  color: t.text,
                  margin: "0 0 20px",
                  letterSpacing: -0.5,
                }}
              >
                Speak English
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  With Confidence
                </span>
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: t.textSub,
                  margin: "0 0 36px",
                  maxWidth: 460,
                }}
              >
                Master English faster with AI-powered spaced repetition,
                real-time pronunciation feedback, and beautifully crafted
                courses designed for Vietnamese learners.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 48,
                }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.zenoravn.fluency"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "10px 22px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={googlePlayBadge}
                    alt=""
                    style={{ width: 28, height: 28, objectFit: "contain" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Get it on
                    </div>
                    <div
                      style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}
                    >
                      Google Play
                    </div>
                  </div>
                </a>
                <Link
                  to="/courses"
                  className="btn-rainbow-cta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 14,
                    padding: "13px 28px",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Browse Courses →
                </Link>
              </div>

              {/* Social proof */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex" }}>
                  {[1, 5, 8, 12].map((n, i) => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/32?img=${n}`}
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: `2px solid ${t.bg}`,
                        marginLeft: i === 0 ? 0 : -10,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: t.text }}>
                    50,000+ learners
                  </div>
                  <div style={{ fontSize: 12, color: t.textSub }}>
                    ⭐⭐⭐⭐⭐ 4.9 average rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right — phone */}
            <div
              className="hero-phone"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,rgba(59,130,246,0.15),rgba(139,92,246,0.12))",
                  filter: "blur(50px)",
                }}
              />
              {/* Phone shell */}
              <div
                style={{
                  width: 280,
                  height: 560,
                  borderRadius: 44,
                  background: theme === "dark" ? "#000" : "#fff",
                  border: `8px solid ${theme === "dark" ? "#1a1a1a" : "#f1f1f1"}`,
                  boxShadow:
                    theme === "dark"
                      ? "0 30px 60px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)"
                      : "0 30px 60px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Dynamic Island */}
                <div
                  style={{
                    width: 90,
                    height: 26,
                    background: "#000",
                    borderRadius: 20,
                    margin: "14px auto 0",
                    zIndex: 10,
                    position: "relative",
                  }}
                />

                {/* Content */}
                <div
                  style={{ flex: 1, padding: "20px 16px", background: t.bg }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: t.text,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      Fluency
                    </div>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: t.accentSoft,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                      }}
                    >
                      👤
                    </div>
                  </div>

                  <div
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,0,0,0.03)",
                      borderRadius: 12,
                      padding: "8px 12px",
                      marginBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontSize: 12, opacity: 0.5 }}>🔍</span>
                    <span style={{ fontSize: 12, color: t.textSub }}>
                      Search courses...
                    </span>
                  </div>

                  <div
                    style={{
                      background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                      borderRadius: 20,
                      padding: "20px",
                      marginBottom: 20,
                      color: "#fff",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{ fontSize: 10, opacity: 0.8, marginBottom: 4 }}
                    >
                      CONTINUE LEARNING
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginBottom: 12,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      Business English
                    </div>
                    <div
                      style={{
                        height: 4,
                        background: "rgba(255,255,255,0.2)",
                        borderRadius: 10,
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          width: "65%",
                          height: "100%",
                          background: "#fff",
                          borderRadius: 10,
                        }}
                      />
                    </div>
                    <div style={{ fontSize: 10, opacity: 0.8 }}>
                      65% Complete
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: t.text,
                      marginBottom: 12,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    Today's Goal
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                    }}
                  >
                    {[
                      { l: "Streak", v: "14 Days", i: "🔥", c: "#f97316" },
                      { l: "Target", v: "30 XP", i: "🎯", c: "#3b82f6" },
                    ].map((goal) => (
                      <div
                        key={goal.l}
                        style={{
                          background: t.bgCard,
                          border: `1px solid ${t.border}`,
                          borderRadius: 16,
                          padding: "12px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: 18, marginBottom: 4 }}>
                          {goal.i}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 800,
                            color: t.text,
                          }}
                        >
                          {goal.v}
                        </div>
                        <div style={{ fontSize: 10, color: t.textSub }}>
                          {goal.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div
                  style={{
                    height: 54,
                    background: t.bgCard,
                    borderTop: `1px solid ${t.border}`,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {["🏠", "📚", "📊", "⚙️"].map((icon, idx) => (
                    <div
                      key={idx}
                      style={{ fontSize: 16, opacity: idx === 0 ? 1 : 0.4 }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div
                style={{
                  position: "absolute",
                  top: 60,
                  right: -20,
                  background: t.bgAlt,
                  border: `1px solid ${t.border}`,
                  borderRadius: 14,
                  padding: "10px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  fontSize: 12,
                }}
              >
                <div style={{ fontWeight: 700, color: t.text }}>
                  🔥 14 Day Streak!
                </div>
                <div style={{ color: t.textSub, fontSize: 11 }}>
                  Keep it up!
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 100,
                  left: -30,
                  background: t.bgAlt,
                  border: `1px solid ${t.border}`,
                  borderRadius: 14,
                  padding: "10px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  fontSize: 12,
                }}
              >
                <div style={{ fontWeight: 700, color: t.text }}>
                  🏆 New Badge!
                </div>
                <div style={{ color: t.textSub, fontSize: 11 }}>
                  Speed Learner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section
        style={{
          borderTop: `1px solid ${t.border}`,
          borderBottom: `1px solid ${t.border}`,
          padding: "32px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {stats.map((s, i) => (
              <FadeIn key={s.l} delay={i * 0.08}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(28px,3vw,40px)",
                      fontWeight: 800,
                      color: t.text,
                      lineHeight: 1,
                      letterSpacing: -0.2,
                    }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontSize: 13, color: t.textSub, marginTop: 4 }}>
                    {s.l}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div
                style={{
                  display: "inline-block",
                  background: t.pill,
                  border: `1px solid ${t.accentSoft}`,
                  borderRadius: 99,
                  padding: "5px 14px",
                  marginBottom: 16,
                  fontSize: 12,
                  fontWeight: 600,
                  color: t.pillText,
                }}
              >
                Why Fluency?
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 800,
                  color: t.text,
                  margin: "0 0 16px",
                  letterSpacing: -0.5,
                }}
              >
                Everything you need to
                <br />
                become fluent
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: t.textSub,
                  maxWidth: 520,
                  margin: "0 auto",
                }}
              >
                Fluency combines proven learning science with elegant design to
                create an experience that's both effective and genuinely
                enjoyable.
              </p>
            </div>
          </FadeIn>

          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div
                  style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 20,
                    padding: "28px 24px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: t.accentSoft,
                      border: `1px solid ${t.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      marginBottom: 16,
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 700,
                      color: t.text,
                      margin: "0 0 8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: t.textSub,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course preview ── */}
      <section style={{ padding: "0 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 40,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: t.pill,
                    border: `1px solid ${t.accentSoft}`,
                    borderRadius: 99,
                    padding: "5px 14px",
                    marginBottom: 12,
                    fontSize: 12,
                    fontWeight: 600,
                    color: t.pillText,
                  }}
                >
                  Featured Courses
                </div>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(26px,3.5vw,42px)",
                    fontWeight: 800,
                    color: t.text,
                    margin: 0,
                    letterSpacing: -0.5,
                  }}
                >
                  Start learning today
                </h2>
              </div>
              <Link
                to="/courses"
                style={{
                  background: "none",
                  border: `1px solid ${t.border}`,
                  borderRadius: 10,
                  padding: "9px 18px",
                  color: t.textSub,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                }}
              >
                See all courses →
              </Link>
            </div>
          </FadeIn>
          <div
            className="course-preview-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {loadingCourses ? (
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "40px 0",
                  textAlign: "center",
                  color: t.textSub,
                }}
              >
                Loading courses...
              </div>
            ) : courses.length > 0 ? (
              courses.slice(0, 4).map((c, i) => (
                <FadeIn key={c.id} delay={i * 0.08}>
                  <CourseCard course={c} theme={theme} />
                </FadeIn>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "40px 0",
                  textAlign: "center",
                  color: t.textSub,
                }}
              >
                No courses available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section
        style={{
          padding: "100px 0",
          background:
            theme === "dark"
              ? "linear-gradient(180deg, transparent, rgba(59,130,246,0.04), transparent)"
              : "linear-gradient(180deg, transparent, rgba(37,99,235,0.03), transparent)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 800,
                  color: t.text,
                  margin: "0 0 14px",
                  letterSpacing: -0.5,
                }}
              >
                Loved by learners
                <br />
                worldwide
              </h2>
              <p style={{ fontSize: 16, color: t.textSub }}>
                Don't take our word for it — here's what our community says.
              </p>
            </div>
          </FadeIn>
          <div
            className="reviews-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
          >
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.1}>
                <div
                  style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 20,
                    padding: "28px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: 12 }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} style={{ color: "#f59e0b", fontSize: 14 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: t.text,
                      margin: "0 0 20px",
                    }}
                  >
                    "{r.text}"
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img
                      src={`https://i.pravatar.cc/40?img=${r.img}`}
                      alt=""
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                    <div>
                      <div
                        style={{ fontSize: 14, fontWeight: 600, color: t.text }}
                      >
                        {r.country} {r.name}
                      </div>
                      <div style={{ fontSize: 12, color: t.textSub }}>
                        {r.job}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support & Community ── */}
      <section
        style={{
          padding: "80px 24px",
          background: theme === "dark" ? "#0a0c10" : "#f8fafc",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                borderRadius: 32,
                padding: "48px 32px",
                textAlign: "center",
                boxShadow: `0 20px 40px -12px ${t.accent}15`,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                  color: t.text,
                  margin: "0 0 12px",
                  letterSpacing: -0.5,
                }}
              >
                Need help? Join the community!
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: t.textSub,
                  maxWidth: 500,
                  margin: "0 auto 32px",
                  lineHeight: 1.6,
                }}
              >
                If you encounter any issues or have ideas to contribute, contact
                <b>KhanhRomVN</b> via Gmail or join the <b>Fluency</b> Discord!
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://discord.gg/s7BTV3T9Ce"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#5865F2",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: 14,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <span style={{ fontSize: 20 }}>💬</span> Join Discord
                </a>
                <a
                  href="mailto:khanhromvn@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: t.accentSoft,
                    color: t.accent,
                    padding: "12px 24px",
                    borderRadius: 14,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <span style={{ fontSize: 20 }}>✉️</span> Support Email
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section style={{ padding: "80px 0 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <div
              style={{
                background: "linear-gradient(135deg,#1e3a5f,#1d2d4f,#2d1b69)",
                borderRadius: 28,
                padding: "64px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "rgba(139,92,246,0.2)",
                  filter: "blur(60px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: -40,
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  background: "rgba(59,130,246,0.15)",
                  filter: "blur(60px)",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(28px,4vw,48px)",
                    fontWeight: 800,
                    color: "#fff",
                    margin: "0 0 16px",
                    letterSpacing: -1,
                  }}
                >
                  Start your fluency journey
                  <br />
                  today — it's free
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: 440,
                    margin: "0 auto 36px",
                  }}
                >
                  Download Fluency and join 50,000+ learners achieving their
                  English goals.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.zenoravn.fluency"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 14,
                    padding: "12px 24px",
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <img
                    src={googlePlayBadge}
                    alt=""
                    style={{ width: 24, height: 24, objectFit: "contain" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#555",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Available on
                    </div>
                    <div
                      style={{ fontSize: 16, fontWeight: 700, color: "#111" }}
                    >
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
