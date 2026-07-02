import { css } from '../lib/style';
import ProjectTag from './ProjectTag';
import { numStyle, tileBg } from '../lib/projectVisuals';
import type { Project } from '../types';

interface ProjectGridCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export default function ProjectGridCard({ project, onOpenDetail }: ProjectGridCardProps) {
  const isAutomation = project.cat !== 'web';

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener"
      onClick={
        isAutomation
          ? (e) => {
              e.preventDefault();
              onOpenDetail(project);
            }
          : undefined
      }
      className="all-projects-card"
      style={css(
        'background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:20px;box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column;text-decoration:none;color:var(--text)',
      )}
    >
      <div role="img" aria-label={project.title} style={css(`position:relative;height:130px;flex:none;background:${tileBg(project)};overflow:hidden`)}>
        <ProjectTag project={project} position="position:absolute;top:14px;left:14px" />
        {!project.img && <span style={css(numStyle(project))}>{project.no}</span>}
      </div>
      <div style={css('padding:18px 18px 20px;display:flex;flex-direction:column;gap:11px;flex:1')}>
        <div style={css('font-weight:600;font-size:18px;letter-spacing:-.015em;line-height:1.16')}>{project.title}</div>
        <p style={css('margin:0;color:var(--card-desc-c, var(--muted));font-size:13px;line-height:1.5;transition:color .45s ease')}>
          {project.desc}
        </p>
        <div style={css('display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:6px')}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={css(
                "font-family:'Space Mono',monospace;font-size:10.5px;letter-spacing:.02em;color:var(--muted);background:var(--card2);border:1px solid var(--line);padding:4px 9px;border-radius:999px",
              )}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
