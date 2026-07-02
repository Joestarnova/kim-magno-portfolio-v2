import { css } from '../lib/style';
import SkillCard from './SkillCard';
import type { SkillGroup } from '../types';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" style={css('margin-top:210px;scroll-margin-top:110px')}>
      <div style={css("font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)")}>
        03 — Capabilities
      </div>
      <h2 style={css('margin:8px 0 24px;font-size:clamp(28px,3vw,40px);font-weight:700;letter-spacing:-.025em')}>What I work with</h2>
      <div style={css('display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;max-width:1000px;margin:0 auto')}>
        {skills.map((group) => (
          <SkillCard key={group.name} group={group} />
        ))}
      </div>
    </section>
  );
}
