import { useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'light' | 'dark';

/** Manages the light/dark theme, persists it, and animates the switch as an
 * expanding circle from the toggle button (View Transitions API, with a
 * plain instant fallback for unsupported browsers / reduced motion). */
export function useTheme(startTheme: Theme = 'light') {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('km_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return startTheme;
  });
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem('km_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const applyTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const toggleTheme = useCallback(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !document.startViewTransition) {
      applyTheme();
      return;
    }

    const btn = toggleRef.current;
    const r = btn ? btn.getBoundingClientRect() : { left: innerWidth - 60, top: 40, width: 48, height: 48 };
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const endR = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(applyTheme);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endR}px at ${x}px ${y}px)`] },
          { duration: 560, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' },
        );
      })
      .catch(() => {});
  }, [applyTheme]);

  return { theme, toggleTheme, toggleRef };
}
