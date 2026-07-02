export type ProjectCategory = 'web' | 'ai-automation';

export interface Project {
  no: string;
  title: string;
  cat: ProjectCategory;
  catLabel: string;
  color: string;
  link: string;
  desc: string;
  stack: string[];
  img?: string;
}

export interface Cert {
  no: string;
  title: string;
  issuer: string;
}

export interface SkillIcon {
  label: string;
  icon?: string;
}

export interface SkillGroup {
  name: string;
  items: SkillIcon[];
}
