import { useMemo, useState } from 'react';
import { css } from '../lib/style';
import CarouselCard from './CarouselCard';
import AllProjectsModal from './AllProjectsModal';
import ProjectDetailModal from './ProjectDetailModal';
import type { Project, ProjectCategory } from '../types';

interface WorkSectionProps {
  projects: Project[];
}

type Filter = 'all' | ProjectCategory;

const BASE_TAB =
  "font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.03em;padding:9px 15px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--muted);cursor:pointer;transition:background .18s,color .18s;white-space:nowrap";
const ACTIVE_TAB =
  "font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.03em;padding:9px 15px;border-radius:999px;border:1px solid transparent;background:var(--pill);color:var(--pill-fg);cursor:pointer;transition:background .18s,color .18s;white-space:nowrap";
const DOT_BASE = 'width:9px;height:9px;padding:0;border:0;border-radius:999px;background:var(--line);cursor:pointer;transition:all .25s';
const DOT_ACTIVE = 'width:26px;height:9px;padding:0;border:0;border-radius:999px;background:var(--text);cursor:pointer;transition:all .25s';

export default function WorkSection({ projects }: WorkSectionProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [allProjectsOpen, setAllProjectsOpen] = useState(false);
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  const filtered = useMemo(() => (filter === 'all' ? projects : projects.filter((p) => p.cat === filter)), [projects, filter]);

  const tabs: { key: Filter; label: string }[] = useMemo(
    () => [
      { key: 'all', label: `All · ${projects.length}` },
      { key: 'web', label: `Web Apps · ${projects.filter((p) => p.cat === 'web').length}` },
      { key: 'ai-automation', label: `AI Automation · ${projects.filter((p) => p.cat === 'ai-automation').length}` },
    ],
    [projects],
  );

  const n = filtered.length;
  const active = n ? ((activeIndex % n) + n) % n : 0;

  const carousel = useMemo(
    () =>
      filtered.map((p, i) => {
        let off = i - active;
        if (n > 1) {
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
        }
        const abs = Math.abs(off);
        const visible = abs <= 1;
        const scale = off === 0 ? 1 : 0.84;
        return {
          project: p,
          transform: `translateX(calc(-50% + ${off * 58}%)) scale(${scale}) rotateY(${-off * 24}deg)`,
          opacity: visible ? (off === 0 ? 1 : 0.5) : 0,
          zIndex: off === 0 ? 30 : visible ? 20 : 5,
          pointerEvents: (off === 0 ? 'auto' : 'none') as 'auto' | 'none',
        };
      }),
    [filtered, active, n],
  );

  const handleSetFilter = (f: Filter) => {
    setFilter(f);
    setActiveIndex(0);
  };

  return (
    <section id="work" style={css('scroll-margin-top:110px')}>
      <div style={css('display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:210px 0 22px')}>
        <div>
          <div style={css("font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
            02 — Selected work
          </div>
          <h2 style={css('margin:8px 0 0;font-size:clamp(28px,3vw,40px);font-weight:700;letter-spacing:-.025em')}>Featured work</h2>
        </div>
        <div style={css('display:flex;align-items:center;gap:9px;flex-wrap:wrap')}>
          {tabs.map((t) => (
            <button key={t.key} onClick={() => handleSetFilter(t.key)} style={css(t.key === filter ? ACTIVE_TAB : BASE_TAB)}>
              {t.label}
            </button>
          ))}
          <button
            onClick={() => setAllProjectsOpen(true)}
            className="viewall-pill-btn"
            style={css(
              "display:inline-flex;align-items:center;gap:9px;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.03em;padding:9px 9px 9px 16px;border-radius:999px;border:1px solid transparent;background:var(--acc);color:var(--acc-ink);cursor:pointer;white-space:nowrap",
            )}
          >
            View all
            <span
              style={css(
                'display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#10130A;color:#fff;flex:none',
              )}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12L12 4M6 4h6v6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div style={css('position:relative;margin-top:44px;display:flex;align-items:center;gap:16px')}>
        <button
          onClick={() => setActiveIndex((i) => i - 1)}
          aria-label="Previous project"
          className="carousel-nav-btn"
          style={css(
            'display:flex;align-items:center;justify-content:center;width:56px;height:56px;flex:none;border-radius:50%;background:var(--card);border:1px solid var(--line);box-shadow:var(--shadow);color:var(--text);cursor:pointer;z-index:40',
          )}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div style={css('position:relative;flex:1;height:478px;perspective:1700px')}>
          {carousel.map((c) => (
            <CarouselCard
              key={c.project.no}
              project={c.project}
              transform={c.transform}
              opacity={c.opacity}
              zIndex={c.zIndex}
              pointerEvents={c.pointerEvents}
              onOpenDetail={setDetailProject}
            />
          ))}
        </div>
        <button
          onClick={() => setActiveIndex((i) => i + 1)}
          aria-label="Next project"
          className="carousel-nav-btn"
          style={css(
            'display:flex;align-items:center;justify-content:center;width:56px;height:56px;flex:none;border-radius:50%;background:var(--card);border:1px solid var(--line);box-shadow:var(--shadow);color:var(--text);cursor:pointer;z-index:40',
          )}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div style={css('display:flex;justify-content:center;gap:8px;margin-top:22px')}>
        {filtered.map((p, i) => (
          <button key={p.no} onClick={() => setActiveIndex(i)} aria-label="Go to project" style={css(i === active ? DOT_ACTIVE : DOT_BASE)} />
        ))}
      </div>

      {allProjectsOpen && <AllProjectsModal projects={projects} onClose={() => setAllProjectsOpen(false)} onOpenDetail={setDetailProject} />}
      {detailProject && <ProjectDetailModal project={detailProject} onClose={() => setDetailProject(null)} />}
    </section>
  );
}
