import { css } from '../lib/style';
import ProjectTag from './ProjectTag';
import { cardImgStyle, numStyle } from '../lib/projectVisuals';
import type { Project } from '../types';

interface CarouselCardProps {
  project: Project;
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: 'auto' | 'none';
  isActive: boolean;
  onOpenDetail: (project: Project) => void;
}

export default function CarouselCard({ project, transform, opacity, zIndex, pointerEvents, isActive, onOpenDetail }: CarouselCardProps) {
  const isAutomation = project.cat !== 'web';

  return (
    <div
      className={isActive ? 'km-carousel-card km-carousel-card-active' : 'km-carousel-card'}
      style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        width: 392,
        maxWidth: '84%',
        height: '100%',
        transformOrigin: 'center center',
        transition: 'transform .55s cubic-bezier(.22,1,.36,1), opacity .45s ease',
        willChange: 'transform',
        transform,
        opacity,
        zIndex,
        pointerEvents,
      }}
    >
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
        className="km-carcard"
        style={css(
          'display:flex;flex-direction:column;height:100%;background:var(--glass-solid);border:1px solid var(--glass-bd);border-radius:22px;box-shadow:var(--shadow);overflow:hidden;text-decoration:none;color:var(--text)',
        )}
      >
        <div
          role="img"
          aria-label={project.title}
          className="km-carousel-img-wrap"
          style={css(
            'position:relative;z-index:1;flex:none;height:238px;background:transparent;overflow:hidden;padding:15px;display:flex;align-items:center;justify-content:center',
          )}
        >
          <ProjectTag project={project} position="position:absolute;top:16px;left:16px;z-index:2" />
          {project.img ? (
            <img src={project.img} alt={project.title} style={css(cardImgStyle(project))} />
          ) : (
            <span style={css(numStyle(project))}>{project.no}</span>
          )}
        </div>
        <div style={css('position:relative;z-index:1;padding:22px 22px 18px;display:flex;flex-direction:column;gap:12px;flex:1')}>
          <div style={css('font-weight:600;font-size:21px;letter-spacing:-.015em;line-height:1.15')}>{project.title}</div>
          <p
            className="km-carousel-desc"
            style={css('margin:0;color:var(--card-desc-c, var(--muted));font-size:14px;line-height:1.55;transition:color .45s ease')}
          >
            {project.desc}
          </p>
          <div style={css('display:flex;flex-wrap:wrap;gap:6px;margin-top:9px')}>
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
    </div>
  );
}
