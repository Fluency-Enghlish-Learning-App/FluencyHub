import { ReactNode } from "react";
import { useTheme } from "@/core/providers/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { THEMES } from "../constants";

interface LandingLayoutV2Props {
  children: ReactNode;
}

export default function LandingLayoutV2({ children }: LandingLayoutV2Props) {
  const { theme: projectTheme, setTheme } = useTheme();
  const theme =
    projectTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : projectTheme;
  const t = THEMES[theme] || THEMES.dark;

  // Handle setDark for Navbar
  const setDark = (dark: boolean) => {
    setTheme(dark ? "dark" : "light");
  };

  return (
    <div
      style={{
        background: t.bg,
        minHeight: "100vh",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <Navbar theme={theme} isDark={theme === "dark"} setDark={setDark} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
