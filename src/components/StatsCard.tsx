import { css } from '../lib/style';

export default function StatsCard() {
  return (
    <div
      style={css(
        'flex:1;color:#fff;border-radius:22px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;background-color:#8B5CF6;min-height:56px;overflow:hidden',
      )}
    >
      <div style={css('display:flex;align-items:baseline;gap:8px')}>
        <span style={css('font-size:24px;font-weight:800;line-height:1;letter-spacing:-.02em')}>10+</span>
        <span style={css('font-size:12.5px;opacity:.85')}>projects shipped</span>
      </div>
      <a
        href="#work"
        className="km-viewproj view-projects-pill"
        style={css(
          "display:inline-flex;align-items:center;gap:6px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.04em;background:rgba(255,255,255,.16);padding:6px 12px;border-radius:999px;white-space:nowrap;color:#fff;text-decoration:none",
        )}
      >
        View projects
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12L12 4M6 4h6v6" />
        </svg>
      </a>
    </div>
  );
}
