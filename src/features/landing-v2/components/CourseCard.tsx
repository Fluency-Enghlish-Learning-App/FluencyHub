import { useState, useEffect } from "react";
import { Course, THEMES } from "../constants";

interface CourseCardProps {
  course: Course;
  theme: string;
  showDownload?: boolean;
}

export default function CourseCard({
  course: c,
  theme,
  showDownload = false,
}: CourseCardProps) {
  const t = THEMES[theme] || THEMES.dark;
  const getSkillColor = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("listening"))
      return { bg: "rgba(59,130,246,0.2)", text: "#60a5fa" };
    if (s.includes("reading"))
      return { bg: "rgba(34,197,94,0.2)", text: "#4ade80" };
    if (s.includes("speaking"))
      return { bg: "rgba(168,85,247,0.2)", text: "#c084fc" };
    if (s.includes("writing"))
      return { bg: "rgba(249,115,22,0.2)", text: "#fb923c" };
    if (s.includes("vocabulary"))
      return { bg: "rgba(234,179,8,0.2)", text: "#fde047" };
    if (s.includes("grammar"))
      return { bg: "rgba(236,72,153,0.2)", text: "#f472b6" };
    return { bg: "rgba(255,255,255,0.1)", text: "#e2e8f0" };
  };

  const hasDownload = !!c.downloadUrl;
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: t.bgCard,
        border: `1px solid ${hovered && !isMobile ? t.borderHover : t.border}`,
        borderRadius: 24,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform:
          hovered && !isMobile ? "translateY(-8px) scale(1.02)" : "none",
        boxShadow:
          hovered && !isMobile
            ? "0 25px 50px -12px rgba(0,0,0,0.5)"
            : "0 10px 15px -3px rgba(0,0,0,0.1)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Book cover image - portrait ratio */}
      <div
        style={{
          position: "relative",
          paddingBottom: "145%",
          overflow: "hidden",
        }}
      >
        <img
          src={c.img}
          alt={c.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease",
            transform: hovered && !isMobile ? "scale(1.15)" : "scale(1)",
          }}
        />

        {/* Version Badge - Top Right */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "rgba(15,23,42,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 10,
            padding: "4px 10px",
            fontSize: 10,
            fontWeight: 800,
            color: "#fff",
            zIndex: 5,
            letterSpacing: "0.5px",
          }}
        >
          V{c.version || "1.0"}
        </div>

        {/* Hover Overlay - Desktop only */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(8,10,15,0.4) 0%, rgba(8,10,15,0.92) 100%)",
              backdropFilter: "blur(12px)",
              opacity: hovered ? 1 : 0,
              transition: "all 0.4s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 24,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <div
              style={{
                transform: hovered ? "translateY(0)" : "translateY(20px)",
                transition: "transform 0.4s ease 0.1s",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 19,
                  fontWeight: 800,
                  margin: "0 0 14px",
                  lineHeight: 1.25,
                  color: "#fff",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {c.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 18,
                }}
              >
                {c.author && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
                      display: "flex",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.9)",
                        minWidth: 65,
                      }}
                    >
                      Author:
                    </span>
                    <span>{c.author}</span>
                  </div>
                )}
                {c.adapter && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
                      display: "flex",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.9)",
                        minWidth: 65,
                      }}
                    >
                      Adapter:
                    </span>
                    <span>{c.adapter}</span>
                  </div>
                )}
                {c.publisher && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
                      display: "flex",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.9)",
                        minWidth: 65,
                      }}
                    >
                      Publisher:
                    </span>
                    <span>{c.publisher}</span>
                  </div>
                )}
              </div>

              {c.skills && c.skills.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 24,
                  }}
                >
                  {c.skills.map((skill) => {
                    const colors = getSkillColor(skill);
                    return (
                      <span
                        key={skill}
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          background: colors.bg,
                          color: colors.text,
                          padding: "4px 10px",
                          borderRadius: 8,
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                          border: `1px solid ${colors.text}33`,
                        }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              )}

              {hasDownload ? (
                <a
                  href={c.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "14px 0",
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: 16,
                    color: "#080a0f",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 800,
                    boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                  }}
                >
                  <span style={{ fontSize: 18 }}>⚡</span>
                  Free Download (.zip)
                </a>
              ) : (
                showDownload && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zenoravn.fluency"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px 0",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 16,
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.12)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)")
                    }
                  >
                    ↓ Get App to Learn
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Info - Shown below image on small screens */}
      {isMobile && (
        <div style={{ padding: 20 }}>
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 18,
              fontWeight: 800,
              margin: "0 0 12px",
              lineHeight: 1.3,
              color: t.text,
            }}
          >
            {c.title}
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginBottom: 16,
            }}
          >
            {c.author && (
              <div
                style={{
                  fontSize: 12,
                  color: t.textSub,
                  display: "flex",
                  gap: 6,
                }}
              >
                <span style={{ fontWeight: 700, color: t.text, minWidth: 65 }}>
                  Author:
                </span>
                <span>{c.author}</span>
              </div>
            )}
            {c.adapter && (
              <div
                style={{
                  fontSize: 12,
                  color: t.textSub,
                  display: "flex",
                  gap: 6,
                }}
              >
                <span style={{ fontWeight: 700, color: t.text, minWidth: 65 }}>
                  Adapter:
                </span>
                <span>{c.adapter}</span>
              </div>
            )}
          </div>

          {c.skills && c.skills.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 20,
              }}
            >
              {c.skills.map((skill) => {
                const colors = getSkillColor(skill);
                return (
                  <span
                    key={skill}
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      background: colors.bg,
                      color: colors.text,
                      padding: "3px 8px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                      border: `1px solid ${colors.text}22`,
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          )}

          {hasDownload ? (
            <a
              href={c.downloadUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 0",
                background: t.accent,
                borderRadius: 14,
                color: "#fff",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 700,
                boxShadow: `0 8px 20px ${t.accentGlow}`,
              }}
            >
              ⚡ Download .zip
            </a>
          ) : (
            showDownload && (
              <a
                href="https://play.google.com/store/apps/details?id=com.zenoravn.fluency"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 0",
                  background: t.accentSoft,
                  border: `1px solid ${t.accent}33`,
                  borderRadius: 14,
                  color: t.accent,
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                ↓ Get App to Learn
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}
