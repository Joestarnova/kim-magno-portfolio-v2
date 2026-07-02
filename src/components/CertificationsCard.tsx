import { css } from '../lib/style';
import TiltCard from './TiltCard';
import type { Cert } from '../types';

interface CertificationsCardProps {
  certs: Cert[];
  onViewAll: () => void;
}

export default function CertificationsCard({ certs, onViewAll }: CertificationsCardProps) {
  const preview = certs.slice(0, 2);
  return (
    <TiltCard
      maxDeg={11}
      style={css(
        'overflow:hidden;flex:1;min-width:0;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:22px;box-shadow:var(--shadow);padding:18px 22px;display:flex;flex-direction:column;gap:6px;position:relative',
      )}
    >
      <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:12px')}>
        <div>
          <div style={css("font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
            Credentials
          </div>
          <div style={css('font-weight:600;font-size:18px;letter-spacing:-.01em;margin-top:4px')}>Independent Coursework</div>
        </div>
        <span
          style={css(
            'display:flex;align-items:center;justify-content:center;width:34px;height:34px;flex:none;border-radius:50%;background:var(--card2);color:#F59E2E',
          )}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="9" r="6" />
            <path d="M9 14.5L8 21l4-2.2L16 21l-1-6.5" />
          </svg>
        </span>
      </div>
      <div style={css('display:flex;flex-direction:column;flex:1;justify-content:space-around;margin-top:2px')}>
        {preview.map((c) => (
          <div key={c.no} style={css('display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--line)')}>
            <div style={css('flex:1;min-width:0')}>
              <div style={css('font-weight:600;font-size:14px;letter-spacing:-.01em;line-height:1.25')}>{c.title}</div>
              <div style={css('font-size:12.5px;color:var(--muted);margin-top:2px')}>{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onViewAll}
        className="certs-viewall-btn"
        style={css(
          "position:absolute;right:18px;bottom:14px;display:inline-flex;align-items:center;gap:5px;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.03em;background:transparent;border:none;padding:0;color:var(--muted);cursor:pointer",
        )}
      >
        View all
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12L12 4M6 4h6v6" />
        </svg>
      </button>
    </TiltCard>
  );
}
