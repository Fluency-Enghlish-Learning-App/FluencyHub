import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { THEMES } from "../constants";
import logoImg from "@/assets/logo.jpg";
import { AlignEndVertical } from "lucide-react";

interface NavbarProps {
  theme: string;
  isDark: boolean;
  setDark: (dark: boolean) => void;
}

export default function Navbar({ theme, isDark, setDark }: NavbarProps) {
  const t = THEMES[theme] || THEMES.dark;
  const location = useLocation();
  const page = location.pathname === "/" ? "home" : location.pathname.slice(1);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", id: "home", path: "/" },
    { label: "Courses", id: "courses", path: "/courses" },
    { label: "Privacy", id: "privacy", path: "/privacy" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? t.navBg : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${t.border}`
          : "1px solid transparent",
        transition: "all 0.3s ease",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: 68,
          gap: 0,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginRight: "auto",
            textDecoration: "none",
          }}
        >
          <img
            src={logoImg}
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
              color: t.text,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: -0.2,
            }}
          >
            Fluency
          </span>
        </Link>

        <div
          className="nav-desktop"
          style={{
            display: "flex",
            gap: 6,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.path}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 16px",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                color: page === l.id ? t.accent : t.textSub,
                transition: "color 0.2s",
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginLeft: "auto",
          }}
        >
          <button
            onClick={() => setDark(!isDark)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: `1px solid ${t.border}`,
              background: t.bgCard,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: t.text,
              fontSize: 22,
              padding: 0,
              display: "none",
            }}
          >
            <AlignEndVertical size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: t.navBg,
            backdropFilter: "blur(20px)",
            borderTop: `1px solid ${t.border}`,
            padding: "12px 24px 20px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 0",
                fontSize: 18,
                fontWeight: 600,
                color: page === l.id ? t.accent : t.textSub,
                borderBottom: `1px solid ${t.border}`,
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
