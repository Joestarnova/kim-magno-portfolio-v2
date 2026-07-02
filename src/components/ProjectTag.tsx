import { css } from '../lib/style';
import { tagStyle } from '../lib/projectVisuals';
import type { Project } from '../types';

interface ProjectTagProps {
  project: Project;
  position: string;
}

export default function ProjectTag({ project, position }: ProjectTagProps) {
  return (
    <span style={css(`${position};${tagStyle(project)}`)}>
      <span style={css(`width:6px;height:6px;border-radius:50%;background:${project.color}`)} />
      {project.catLabel}
    </span>
  );
}
