import { css } from '../lib/style';
import TiltCard from './TiltCard';

export default function TechStackCard() {
  return (
    <TiltCard
      maxDeg={11}
      style={css(
        'position:relative;overflow:hidden;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:22px;box-shadow:var(--shadow);padding:22px',
      )}
    >
      <div style={css('display:flex;align-items:center;justify-content:space-between')}>
        <span style={css('font-weight:600;font-size:17px;letter-spacing:-.01em')}>Core Expertise</span>
      </div>
      <div className="km-techstack-grid" style={css('display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:18px')}>
        <div style={css('display:flex;flex-direction:column;align-items:center;gap:8px')}>
          <span
            style={css(
              "display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#3178C6;color:#fff;font-family:'Space Mono',monospace;font-weight:700;font-size:13px;letter-spacing:.02em",
            )}
          >
            TS
          </span>
          <span style={css("font-family:'Space Mono',monospace;font-size:9.5px;color:var(--muted);text-align:center;line-height:1.3")}>TypeScript</span>
        </div>

        <div style={css('display:flex;flex-direction:column;align-items:center;gap:8px')}>
          <span style={css('display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#20232A')}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse cx="12" cy="12" rx="10" ry="4.1" />
                <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(120 12 12)" />
              </g>
            </svg>
          </span>
          <span style={css("font-family:'Space Mono',monospace;font-size:9.5px;color:var(--muted);text-align:center;line-height:1.3")}>React</span>
        </div>

        <div style={css('display:flex;flex-direction:column;align-items:center;gap:8px')}>
          <span
            style={css('display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#5FA04E;color:#fff')}
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
              <path d="M12 2.2l8.24 4.76v9.52L12 21.24 3.76 16.48V6.96z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
              <text x="12" y="15.4" textAnchor="middle" fontFamily="'Space Mono',monospace" fontWeight="700" fontSize="8.5" fill="#fff">
                N
              </text>
            </svg>
          </span>
          <span style={css("font-family:'Space Mono',monospace;font-size:9.5px;color:var(--muted);text-align:center;line-height:1.3")}>Node.js</span>
        </div>

        <div style={css('display:flex;flex-direction:column;align-items:center;gap:8px')}>
          <span
            style={css(
              "display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#2C2C2C;color:#fff;font-family:'Space Mono',monospace;font-weight:700;font-size:13px",
            )}
          >
            ex
          </span>
          <span style={css("font-family:'Space Mono',monospace;font-size:9.5px;color:var(--muted);text-align:center;line-height:1.3")}>Express</span>
        </div>

        <div style={css('display:flex;flex-direction:column;align-items:center;gap:8px')}>
          <span style={css('display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#336791')}>
            <img src="https://cdn.simpleicons.org/postgresql/ffffff" width="21" height="21" alt="PostgreSQL" />
          </span>
          <span style={css("font-family:'Space Mono',monospace;font-size:9.5px;color:var(--muted);text-align:center;line-height:1.3")}>PostgreSQL</span>
        </div>
      </div>
    </TiltCard>
  );
}
