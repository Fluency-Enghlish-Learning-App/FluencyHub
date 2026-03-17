export type ThemeType = {
  bg: string;
  bgAlt: string;
  bgCard: string;
  bgCardHover: string;
  border: string;
  borderHover: string;
  text: string;
  textSub: string;
  textMuted: string;
  accent: string;
  accentGlow: string;
  accentSoft: string;
  navBg: string;
  pill: string;
  pillText: string;
  heroGradient: string;
  meshA: string;
  meshB: string;
  green: string;
  greenSoft: string;
  amber: string;
  amberSoft: string;
  tag: (color: string) => { bg: string; border: string; text: string };
};

export const THEMES: Record<string, ThemeType> = {
  dark: {
    bg: "#080a0f",
    bgAlt: "#0d1117",
    bgCard: "rgba(255,255,255,0.04)",
    bgCardHover: "rgba(255,255,255,0.07)",
    border: "rgba(255,255,255,0.07)",
    borderHover: "rgba(255,255,255,0.14)",
    text: "#f0f2f7",
    textSub: "#8892a0",
    textMuted: "#4a5568",
    accent: "#3b82f6",
    accentGlow: "rgba(59,130,246,0.25)",
    accentSoft: "rgba(59,130,246,0.12)",
    navBg: "rgba(8,10,15,0.85)",
    pill: "rgba(59,130,246,0.15)",
    pillText: "#60a5fa",
    heroGradient:
      "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%)",
    meshA: "rgba(59,130,246,0.06)",
    meshB: "rgba(139,92,246,0.05)",
    green: "#22c55e",
    greenSoft: "rgba(34,197,94,0.12)",
    amber: "#f59e0b",
    amberSoft: "rgba(245,158,11,0.12)",
    tag: function (c: string) {
      return { bg: c + "18", border: c + "40", text: c };
    },
  },
  light: {
    bg: "#f5f7fc",
    bgAlt: "#ffffff",
    bgCard: "rgba(255,255,255,0.85)",
    bgCardHover: "rgba(255,255,255,1)",
    border: "rgba(0,0,0,0.07)",
    borderHover: "rgba(0,0,0,0.14)",
    text: "#0d1117",
    textSub: "#556070",
    textMuted: "#a0aab4",
    accent: "#2563eb",
    accentGlow: "rgba(37,99,235,0.2)",
    accentSoft: "rgba(37,99,235,0.1)",
    navBg: "rgba(245,247,252,0.88)",
    pill: "rgba(37,99,235,0.1)",
    pillText: "#2563eb",
    heroGradient:
      "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.12) 0%, transparent 70%)",
    meshA: "rgba(37,99,235,0.04)",
    meshB: "rgba(124,58,237,0.03)",
    green: "#16a34a",
    greenSoft: "rgba(22,163,74,0.1)",
    amber: "#d97706",
    amberSoft: "rgba(217,119,6,0.1)",
    tag: function (c: string) {
      return { bg: c + "15", border: c + "35", text: c };
    },
  },
};

export interface Course {
  id: string | number;
  title: string;
  sub: string;
  lessons: number;
  pts?: number;
  level: string;
  tag: string;
  tagColor: string;
  img: string; // Resolves to cover image at root of folder
  zipUrl?: string; // Direct link to the curso zip file
  isNew?: boolean;
  rating?: number;
  students?: number;
  version?: string | number;
  author?: string;
  adapter?: string;
  publisher?: string;
  skills?: string[];
  downloadUrl?: string;
}

// URLs to exported course folders containing Course.json and cover image
export const COURSE_SOURCES: string[] = [
  // Manual links can still be added here
];

// Cloudflare Pages URLs (comma-separated in .env)
const envUrls = import.meta.env.VITE_PAGES_URLS || "";
export const PAGES_URLS = envUrls
  .split(",")
  .map((url: string) => url.trim())
  .filter((url: string) => url.length > 0);

export const GITHUB_REPO = "KhanhRomVN/FluencyCourse";
