import { css } from '../lib/style';

interface FeaturedProjectCardProps {
  href: string;
  img: string;
  alt: string;
  title: string;
  stackLabel: string;
  objectPosition?: string;
}

export default function FeaturedProjectCard({ href, img, alt, title, stackLabel, objectPosition = 'top left' }: FeaturedProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="featured-project-card"
      style={css(
        'display:block;text-decoration:none;color:inherit;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:22px;box-shadow:var(--shadow);overflow:hidden',
      )}
    >
      <div style={css('position:relative;height:172px;overflow:hidden;background:#0B0B0C')}>
        <img src={img} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition, display: 'block' }} />
        <span
          style={css(
            'position:absolute;top:14px;right:14px;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:var(--card);color:var(--text)',
          )}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12L12 4M6 4h6v6" />
          </svg>
        </span>
      </div>
      <div style={css('padding:18px')}>
        <div style={css('font-weight:600;font-size:16px;letter-spacing:-.01em')}>{title}</div>
        <div style={css("font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);margin-top:5px")}>{stackLabel}</div>
      </div>
    </a>
  );
}
