import { css } from '../lib/style';
import ProjectTag from './ProjectTag';
import { numStyle, tileBg } from '../lib/projectVisuals';
import type { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <div
      onClick={onClose}
      style={css(
        'position:fixed;inset:0;z-index:220;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(8,9,11,.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)',
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={css(
          'position:relative;width:min(720px,100%);max-height:88vh;display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:26px;box-shadow:0 30px 90px rgba(0,0,0,.45);overflow:hidden',
        )}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="detail-close-btn"
          style={css(
            'position:absolute;top:16px;right:16px;z-index:3;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:rgba(14,15,17,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.18);color:#fff;cursor:pointer',
          )}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div role="img" aria-label={project.title} style={css(`position:relative;height:360px;flex:none;background:${tileBg(project)}`)}>
          {!project.img && <span style={css(numStyle(project))}>{project.no}</span>}
        </div>
        <div style={css('flex:1;min-height:0;overflow:auto;padding:30px 34px 36px')}>
          <ProjectTag project={project} position="" />
          <h3 style={css('margin:16px 0 0;font-size:26px;font-weight:700;letter-spacing:-.02em;line-height:1.2')}>{project.title}</h3>
          <p style={css('margin:14px 0 0;color:var(--muted);font-size:15px;line-height:1.6;max-width:560px')}>{project.desc}</p>
          <div style={css('display:flex;flex-wrap:wrap;gap:7px;margin-top:20px')}>
            {project.stack.map((s) => (
              <span
                key={s}
                style={css(
                  "font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:.02em;color:var(--muted);background:var(--card2);border:1px solid var(--line);padding:5px 11px;border-radius:999px",
                )}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
