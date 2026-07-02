import { css } from '../lib/style';
import TiltCard from './TiltCard';

const ROLES = [
  { title: 'AI Automation Specialist', org: 'Independent Contractor', year: '2025' },
  { title: 'Mechanical Engineer Intern', org: 'DCCON Engineering Services', year: '2024' },
];

export default function ExperienceCard() {
  return (
    <TiltCard
      maxDeg={11}
      style={css(
        'position:relative;overflow:hidden;flex:1;min-width:0;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:22px;box-shadow:var(--shadow);padding:18px 22px;display:flex;flex-direction:column;gap:6px',
      )}
    >
      <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:12px')}>
        <div>
          <div style={css("font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
            Career
          </div>
          <div style={css('font-weight:600;font-size:18px;letter-spacing:-.01em;margin-top:4px')}>Experience</div>
        </div>
        <span
          style={css(
            'display:flex;align-items:center;justify-content:center;width:34px;height:34px;flex:none;border-radius:50%;background:var(--card2);color:#3B6CF6',
          )}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
          </svg>
        </span>
      </div>
      <div style={css('display:flex;flex-direction:column;flex:1;justify-content:space-around;margin-top:2px')}>
        {ROLES.map((r) => (
          <div key={r.title} style={css('display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--line)')}>
            <div style={css('flex:1;min-width:0')}>
              <div style={css('font-weight:600;font-size:14.5px;letter-spacing:-.01em')}>{r.title}</div>
              <div style={css('font-size:12.5px;color:var(--muted);margin-top:2px')}>{r.org}</div>
            </div>
            <span style={css("flex:none;font-family:'Space Mono',monospace;font-size:12px;color:var(--muted)")}>{r.year}</span>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}
