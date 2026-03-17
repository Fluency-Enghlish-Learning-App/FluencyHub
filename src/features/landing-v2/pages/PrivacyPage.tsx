import { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { THEMES } from "../constants";
import { useTheme } from "@/core/providers/theme-provider";

export default function PrivacyPage() {
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

  const sections = [
    {
      icon: "🛡️",
      title: "Privacy & Transparency",
      content:
        "We value your privacy. We only collect technical and performance data to improve stability. We never sell your data or use it for advertising.",
      color: "#818CF8",
    },
    {
      icon: "📱",
      title: "Local Storage Only",
      content:
        "Your learning progress, preferences, and course data are stored locally on your device. We have no access to this information.",
      color: "#38BDF8",
    },
    {
      icon: "📊",
      title: "Performance & Stability",
      content:
        "We use Sentry, Clarity, and PostHog to monitor app health and user experience. This helps us fix bugs faster and improve the app for everyone.",
      color: "#34D399",
    },
    {
      icon: "💻",
      title: "Transparent & Open",
      content:
        "Our app is built with transparency in mind. You can verify our privacy practices by reviewing the source code on GitHub.",
      color: "#F472B6",
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
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "linear-gradient(135deg, #6366F1, #06B6D4)",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                margin: "0 auto 24px",
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
              }}
            >
              🔒
            </div>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginBottom: 16,
              }}
            >
              Privacy <span style={{ color: t.accent }}>Policy</span>
            </h1>
            <p style={{ fontSize: 18, color: t.textSub, lineHeight: 1.6 }}>
              Fluency is designed with privacy in mind. While most data stays
              locally on your device, we use industry-standard tools for
              stability and performance monitoring.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gap: 24, marginBottom: 60 }}>
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 24,
                  padding: "32px",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    background: `${s.color}15`,
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 8,
                      color: s.color,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{ fontSize: 16, lineHeight: 1.7, color: t.textSub }}
                  >
                    {s.content}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div
            style={{
              background: "linear-gradient(135deg, #6366F115, #8B5CF615)",
              border: `1px solid #6366F130`,
              borderRadius: 24,
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              Questions about privacy?
            </h3>
            <p style={{ fontSize: 16, color: t.textSub, marginBottom: 24 }}>
              Feel free to reach out to us if you have any concerns or questions
              regarding your data.
            </p>
            <a
              href="mailto:khanhromvn@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: t.accent,
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 14,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 16,
                boxShadow: `0 10px 20px ${t.accentGlow}`,
              }}
            >
              ✉️ khanhromvn@gmail.com
            </a>
          </div>
        </FadeIn>

        <div
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 14,
            color: t.textMuted,
          }}
        >
          Last Updated: March 2026 • Fluency Privacy Priority
        </div>
      </div>
    </div>
  );
}
