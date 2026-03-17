import { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { THEMES } from "../constants";
import { useTheme } from "@/core/providers/theme-provider";

export default function ReportSupportPage() {
  const { theme: projectTheme } = useTheme();
  const theme =
    projectTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : projectTheme;
  const t = THEMES[theme] || THEMES.dark;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const channels = [
    {
      icon: "💬",
      title: "Community Discord",
      desc: "Join our vibrant community on Discord to get quick help, suggest features, and chat with other learners.",
      link: "https://discord.gg/s7BTV3T9Ce",
      label: "Join Discord",
      color: "#5865F2",
    },
    {
      icon: "🪲",
      title: "Report a Bug",
      desc: "Found a glitch? Let us know! The best way to report bugs is through our dedicated Discord channel.",
      link: "https://discord.gg/s7BTV3T9Ce",
      label: "Report Bug",
      color: "#F43F5E",
    },
    {
      icon: "✉️",
      title: "Email Support",
      desc: "Prefer email? Send us your questions or feedback and we'll get back to you as soon as possible.",
      link: "mailto:khanhromvn@gmail.com",
      label: "Send Email",
      color: "#10B981",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: t.bg,
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: 100,
        color: t.text,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginBottom: 16,
              }}
            >
              Report & <span style={{ color: t.accent }}>Support</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: t.textSub,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              We're here to help! Choose the best way to get in touch with us.
              Whether it's a bug report or a general question, we'd love to hear
              from you.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {channels.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 28,
                  padding: "32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    background: `${c.color}15`,
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: t.textSub,
                    marginBottom: 32,
                    flex: 1,
                  }}
                >
                  {c.desc}
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: c.color,
                    color: "#fff",
                    padding: "12px 0",
                    borderRadius: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: 15,
                    transition: "opacity 0.2s",
                  }}
                >
                  {c.label}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div
            style={{
              textAlign: "center",
              marginTop: 80,
              padding: "40px",
              background: t.bgCard,
              borderRadius: 32,
              border: `1px solid ${t.border}`,
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
              Looking for our Help Center?
            </h3>
            <p style={{ color: t.textSub, marginBottom: 24 }}>
              Check out our FAQs and documentation for quick answers to common
              questions.
            </p>
            <a
              href="/help"
              style={{
                color: t.accent,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 16,
              }}
            >
              Browse Help Center →
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
