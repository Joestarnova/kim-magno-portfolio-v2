import { useRef, type CSSProperties, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max tilt in degrees. */
  maxDeg?: number;
}

/** Mouse-follow 3D tilt, matching the original km-tilt behavior: rotate
 * toward the cursor on hover, ease back to flat on leave. */
export default function TiltCard({ children, className, style, maxDeg = 5.5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const onMouseEnter = () => {
    const el = ref.current;
    if (!el || reduced()) return;
    el.style.transition = 'transform .18s cubic-bezier(.22,1,.36,1)';
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1100px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg)`;
    });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    el.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
    el.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div ref={ref} className={className} style={style} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
