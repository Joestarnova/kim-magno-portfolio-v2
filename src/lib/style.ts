import type { CSSProperties } from 'react';

/**
 * Parses a CSS declaration string ("display:flex;gap:16px") into a React
 * style object. Keeps custom properties (--foo) as-is and camelCases
 * standard properties.
 */
export function css(declarations: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const decl of declarations.split(';')) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) continue;
    if (prop.startsWith('--')) {
      style[prop] = value;
      continue;
    }
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[camel] = value;
  }
  return style as CSSProperties;
}
