import type { Project } from '../types';

export function tileBg(p: Project): string {
  return p.img
    ? `url('${p.img}') center top / cover no-repeat`
    : `linear-gradient(140deg, color-mix(in oklab, ${p.color} 26%, var(--card2)), color-mix(in oklab, ${p.color} 7%, var(--card2)))`;
}

export function tagStyle(p: Project): string {
  return `display:inline-flex;align-items:center;gap:6px;font-family:'Space Mono',monospace;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;padding:5px 10px;border-radius:999px;background:color-mix(in oklab, ${p.color} 16%, var(--card));color:${p.color}`;
}

export function numStyle(p: Project): string {
  return `position:absolute;right:16px;bottom:4px;font-family:'Space Mono',monospace;font-weight:700;font-size:50px;line-height:1;color:color-mix(in oklab, ${p.color} 30%, transparent)`;
}

export function cardImgStyle(p: Project): string {
  return p.cat === 'web'
    ? 'width:100%;height:100%;object-fit:cover;object-position:top center;display:block;border-radius:11px'
    : 'max-width:100%;max-height:100%;width:auto;height:auto;display:block;border-radius:11px';
}
