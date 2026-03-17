import { Link } from "react-router-dom";

export default function Footer() {
  const productLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
  ];
  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ];
  const supportLinks = [
    { label: "Report & Support", path: "/support" },
    { label: "Community Discord", href: "https://discord.gg/s7BTV3T9Ce" },
    { label: "Email Support", href: "mailto:khanhromvn@gmail.com" },
  ];

  return (
    <footer
      style={{
        background: "#050709",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 32px" }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src="/src/assets/logo.jpg"
                alt="Fluency Logo"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: -0.2,
                }}
              >
                Fluency
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#6b7280",
                maxWidth: 280,
                margin: "0 0 24px",
              }}
            >
              The modern English learning app for Vietnamese learners.
              Science-backed methods, beautiful design.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.zenoravn.fluency"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "9px 16px",
                textDecoration: "none",
              }}
            >
              <img
                src="/src/assets/google-play.png"
                alt=""
                style={{ width: 22, height: 22, objectFit: "contain" }}
              />
              <div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                  }}
                >
                  Available on
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
                  Google Play
                </div>
              </div>
            </a>
          </div>

          {/* Product links */}
          <div>
            <h4
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: "0 0 16px",
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {productLinks.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  <Link
                    to={l.path}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      color: "#6b7280",
                      padding: 0,
                      fontFamily: "'Outfit', sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: "0 0 16px",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {legalLinks.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  <Link
                    to={l.path}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      color: "#6b7280",
                      padding: 0,
                      fontFamily: "'Outfit', sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: "0 0 16px",
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {supportLinks.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  {l.path ? (
                    <Link
                      to={l.path}
                      style={{
                        fontSize: 14,
                        color: "#6b7280",
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      style={{
                        fontSize: 14,
                        color: "#6b7280",
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 13, color: "#4b5563" }}>
            © 2025 Fluency App. All rights reserved. Made with ❤️ by{" "}
            <b>KhanhRomVN</b>.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              to="/privacy"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                color: "#4b5563",
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                color: "#4b5563",
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
