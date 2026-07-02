import { useEffect, useRef, useState, type RefObject } from 'react';
import { css } from '../lib/style';
import { useNavSpy } from '../hooks/useNavSpy';

interface NavProps {
  toggleTheme: () => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
}

const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '#' },
  { key: 'work', label: 'Work', href: '#work' },
  { key: 'skills', label: 'Skills', href: '#skills' },
  { key: 'contact', label: 'Contact', href: '#contact' },
];

export default function Nav({ toggleTheme, toggleRef }: NavProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useNavSpy(headerRef);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="km-nav-header"
      style={css(
        'display:flex;align-items:center;gap:14px;position:sticky;top:16px;z-index:100;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:999px;box-shadow:var(--shadow);padding:10px 14px',
      )}
    >
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="km-nav-burger"
        style={css(
          'align-items:center;justify-content:center;width:38px;height:38px;flex:none;border-radius:50%;background:var(--card2);border:1px solid var(--line);color:var(--text);cursor:pointer',
        )}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>
      <nav className={menuOpen ? 'km-nav-links km-nav-open' : 'km-nav-links'} style={css('flex:1;display:flex;align-items:center;gap:6px')}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            data-nav={link.key}
            className="km-navlink"
            onClick={() => setMenuOpen(false)}
            style={css(
              'font-weight:600;font-size:14px;color:var(--text);text-decoration:none;padding:9px 18px;border-radius:999px;background:transparent',
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="km-nav-spacer" style={css('flex:1')} />
      <div className="km-nav-actions" style={css('display:flex;align-items:center;gap:14px')}>
        <button ref={toggleRef} onClick={toggleTheme} data-theme-toggle="1" aria-label="Toggle theme" className="km-toggle">
          <svg
            className="km-t-sun"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2v2.4M12 19.6V22M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2 12h2.4M19.6 12H22M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
          </svg>
          <svg className="km-t-moon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8z" />
          </svg>
          <span className="km-toggle-knob" />
        </button>
        <div
          style={css(
            'display:flex;align-items:center;gap:10px;background:var(--card);border-radius:999px;padding:5px 6px 5px 16px;box-shadow:var(--shadow);flex:none',
          )}
        >
          <span className="km-nav-name" style={css('font-weight:600;font-size:14px;white-space:nowrap')}>
            Kim Magno
          </span>
          <span
            style={css(
              "display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:var(--acc);color:var(--acc-ink);font-family:'Space Mono',monospace;font-weight:700;font-size:12px",
            )}
          >
            KM
          </span>
        </div>
      </div>
    </header>
  );
}
