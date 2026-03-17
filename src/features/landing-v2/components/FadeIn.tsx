import { useState, useEffect, useRef, ReactNode } from "react";

export function useVisible(
  threshold: number = 0.12,
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  style = {},
}: FadeInProps) {
  const [ref, visible] = useVisible();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
