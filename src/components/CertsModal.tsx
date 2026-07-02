import { css } from '../lib/style';
import type { Cert } from '../types';

interface CertsModalProps {
  certs: Cert[];
  onClose: () => void;
}

export default function CertsModal({ certs, onClose }: CertsModalProps) {
  return (
    <div
      onClick={onClose}
      className="km-modal-backdrop"
      style={css(
        'position:fixed;inset:0;z-index:220;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(8,9,11,.55);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)',
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="km-modal-panel"
        style={css(
          'position:relative;width:min(640px,100%);max-height:86vh;display:flex;flex-direction:column;background:var(--page-bg);border:1px solid var(--line);border-radius:26px;box-shadow:0 30px 90px rgba(0,0,0,.45);overflow:hidden',
        )}
      >
        <div
          className="km-modal-header"
          style={css(
            'display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 28px;border-bottom:1px solid var(--line)',
          )}
        >
          <div>
            <div style={css("font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
              Credentials
            </div>
            <div style={css('font-weight:700;font-size:25px;letter-spacing:-.02em;margin-top:5px')}>{certs.length} certifications</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="certs-close-btn"
            style={css(
              'display:flex;align-items:center;justify-content:center;width:46px;height:46px;flex:none;border-radius:50%;background:var(--card2);border:1px solid var(--line);color:var(--text);cursor:pointer',
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="km-modal-body" style={css('padding:8px 28px 24px;overflow:auto')}>
          {certs.map((c) => (
            <div key={c.no} style={css('display:flex;gap:16px;align-items:flex-start;padding:18px 0;border-bottom:1px solid var(--line)')}>
              <span style={css("font-family:'Space Mono',monospace;font-size:12px;color:var(--acc);flex:none;padding-top:2px")}>{c.no}</span>
              <div style={css('flex:1;min-width:0')}>
                <div style={css('font-weight:600;font-size:16px;letter-spacing:-.01em;line-height:1.3')}>{c.title}</div>
                <div style={css('font-size:13px;color:var(--muted);margin-top:4px')}>{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
