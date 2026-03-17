import { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { THEMES } from "../constants";
import { useTheme } from "@/core/providers/theme-provider";

export default function TermsOfServicePage() {
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
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the Fluency platform, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download the materials on Fluency for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on Fluency are provided on an 'as is' basis. Fluency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall Fluency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.",
    },
    {
      title: "5. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of Vietnam and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
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
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                margin: "0 auto 24px",
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              📜
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
              Terms of <span style={{ color: t.accent }}>Service</span>
            </h1>
            <p style={{ fontSize: 18, color: t.textSub, lineHeight: 1.6 }}>
              Please read these terms carefully before using our platform. Your
              continued use of Fluency confirms your acceptance of these terms.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            borderRadius: 32,
            padding: "40px",
            backdropFilter: "blur(10px)",
          }}
        >
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div
                style={{
                  marginBottom: i === sections.length - 1 ? 0 : 40,
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: t.text,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: t.textSub,
                    margin: 0,
                  }}
                >
                  {s.content}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 14,
            color: t.textMuted,
          }}
        >
          Last Updated: March 2026 • Fluency Compliance Team
        </div>
      </div>
    </div>
  );
}
