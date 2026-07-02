import { css } from '../lib/style';
import ProjectGridCard from './ProjectGridCard';
import type { Project } from '../types';

interface AllProjectsModalProps {
  projects: Project[];
  onClose: () => void;
  onOpenDetail: (project: Project) => void;
}

export default function AllProjectsModal({ projects, onClose, onOpenDetail }: AllProjectsModalProps) {
  return (
    <div
      onClick={onClose}
      className="km-modal-backdrop"
      style={css(
        'position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(8,9,11,.55);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)',
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="km-modal-panel"
        style={css(
          'position:relative;width:min(1120px,100%);max-height:86vh;display:flex;flex-direction:column;background:var(--page-bg);border:1px solid var(--line);border-radius:26px;box-shadow:0 30px 90px rgba(0,0,0,.45);overflow:hidden',
        )}
      >
        <div
          className="km-modal-header"
          style={css('display:flex;align-items:center;justify-content:space-between;gap:16px;padding:24px 28px;border-bottom:1px solid var(--line)')}
        >
          <div>
            <div style={css("font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
              All projects
            </div>
            <div style={css('font-weight:700;font-size:25px;letter-spacing:-.02em;margin-top:5px')}>{projects.length} projects shipped</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="modal-close-btn"
            style={css(
              'display:flex;align-items:center;justify-content:center;width:46px;height:46px;flex:none;border-radius:50%;background:var(--card);border:1px solid var(--line);box-shadow:var(--shadow);color:var(--text);cursor:pointer',
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="km-modal-body" style={css('flex:1;min-height:0;overflow:auto;padding:24px 28px 30px')}>
          <div className="km-projects-grid" style={css('display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px')}>
            {projects.map((p) => (
              <ProjectGridCard key={p.no} project={p} onOpenDetail={onOpenDetail} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
