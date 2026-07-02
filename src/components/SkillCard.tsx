import { css } from '../lib/style';
import type { SkillGroup } from '../types';

interface SkillCardProps {
  group: SkillGroup;
}

export default function SkillCard({ group }: SkillCardProps) {
  return (
    <div
      className="skill-card"
      style={css(
        '--gc:var(--acc);background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:20px;box-shadow:var(--shadow);padding:22px',
      )}
    >
      <div style={css('display:flex;align-items:center;gap:9px')}>
        <span style={css('font-weight:600;font-size:16px;letter-spacing:-.01em')}>{group.name}</span>
      </div>
      <div style={css('display:flex;flex-wrap:wrap;gap:7px;margin-top:16px')}>
        {group.items.map((item) => (
          <span
            key={item.label}
            style={css(
              'display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--text);background:var(--card2);border:1px solid var(--line);padding:6px 12px;border-radius:999px',
            )}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                width={15}
                height={15}
                loading="lazy"
                style={{ display: 'block', flex: 'none' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
