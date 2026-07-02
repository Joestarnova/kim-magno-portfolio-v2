import { css } from '../lib/style';
import TiltCard from './TiltCard';
import heroPortrait from '../assets/hero-portrait.png';

export default function Hero() {
  return (
    <TiltCard
      className="km-hero-card"
      style={css(
        'position:relative;background:var(--glass);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);border:1px solid var(--glass-bd);border-radius:26px;box-shadow:var(--shadow);padding:38px;display:grid;grid-template-columns:1.04fr .96fr;gap:20px;min-height:516px;overflow:hidden',
      )}
    >
      <div style={css('display:flex;flex-direction:column')}>
        <h1 style={css("margin:20px 0 0;font-size:clamp(40px,4.4vw,60px);line-height:1.0;letter-spacing:-.032em;font-weight:700")}>
          Engineering solutions beyond code
          <span style={css('color:var(--acc)')}>.</span>
        </h1>
        <div style={css('display:flex;align-items:center;gap:18px;margin-top:26px')}>
          <span
            style={css(
              "font-family:'Space Mono',monospace;font-weight:700;font-size:52px;line-height:1;-webkit-text-stroke:1.4px var(--faint);color:transparent",
            )}
          >
            01
          </span>
          <svg
            width="54"
            height="12"
            viewBox="0 0 54 12"
            fill="none"
            stroke="var(--faint)"
            strokeWidth="1.4"
            strokeLinecap="round"
            style={css('flex:none')}
          >
            <line x1="0" y1="6" x2="44" y2="6" strokeDasharray="2 4" />
            <path d="M42 2l6 4-6 4" strokeLinejoin="round" />
          </svg>
          <div className="km-hero-bio-wrap" style={css('max-width:300px')}>
            <p
              className="km-hero-bio-text"
              style={css('margin: 0; color: var(--muted); font-size: 16px; line-height: 1.5; width: 302px; height: 105px; text-align: left')}
            >
              Hi, I'm <span style={css('font-weight:700;color:var(--acc)')}>Kim Magno</span>, a software engineer
              specializing in full-stack development and automation with a background in mechanical engineering.
            </p>
          </div>
        </div>
        <div style={css('margin-top:auto;display:flex;flex-direction:column;gap:22px;padding-top:30px')}>
          <a
            href="mailto:kbmagno14@gmail.com"
            className="cta-btn"
            style={css(
              'display: inline-flex; align-items: center; justify-content: space-between; gap: 16px; width: 182px; background: var(--acc); color: var(--acc-ink); border-radius: 999px; padding: 8px 8px 8px 26px; font-weight: 600; font-size: 16px; text-decoration: none; box-shadow: 0 8px 22px color-mix(in oklab,var(--acc) 45%,transparent); height: 46px',
            )}
          >
            Get in touch
            <span
              style={css(
                'display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: #10130A; color: #fff; flex: none',
              )}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3.5 7l8.5 5.5L20.5 7" />
              </svg>
            </span>
          </a>
          <div style={css('display:flex;align-items:center;justify-content:space-between;gap:14px;width:182px')}>
            <span style={css("font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.02em;white-space:nowrap;color:var(--muted)")}>
              Find me on
            </span>
            <div style={css('display:flex;gap:10px')}>
              <a
                href="https://github.com/Joestarnova"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="social-icon-btn"
                style={css(
                  'display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:var(--card2);border:1px solid var(--line);color:var(--text);text-decoration:none',
                )}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.2.68.82.57A12 12 0 0 0 12 .3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kim-magno14/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="social-icon-btn"
                style={css(
                  'display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:var(--card2);border:1px solid var(--line);color:var(--text);text-decoration:none',
                )}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="km-hero-right" style={css('position:relative;display:flex;align-items:flex-end;justify-content:center;min-height:448px')}>
        <div
          className="km-hero-visual-glow"
          style={css(
            'position:absolute;top:48%;left:50%;transform:translate(-50%,-50%);width:560px;height:560px;border-radius:50%;background:radial-gradient(circle at 50% 50%,color-mix(in oklab,var(--acc) 48%,transparent),color-mix(in oklab,var(--acc) 18%,transparent) 42%,transparent 70%);animation:kmPulse 6s ease-in-out infinite',
          )}
        />
        <span
          className="km-hero-float-dot"
          style={css(
            'position:absolute;top:4%;left:6%;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.12);animation:kmFloatA 5s ease-in-out infinite',
          )}
        />
        <span
          className="km-hero-float-dot"
          style={css(
            'position:absolute;top:16%;right:5%;width:14px;height:14px;border-radius:50%;background:var(--text);animation:kmFloatB 6s ease-in-out infinite',
          )}
        />
        <span
          className="km-hero-float-dot"
          style={css(
            'position:absolute;top:44%;right:-1%;width:22px;height:22px;border-radius:50%;background:var(--acc);box-shadow:0 6px 16px color-mix(in oklab,var(--acc) 50%,transparent);animation:kmFloatC 7s ease-in-out infinite',
          )}
        />
        <span
          className="km-hero-float-dot"
          style={css(
            'position:absolute;bottom:26%;left:2%;width:16px;height:16px;border-radius:50%;background:#3B6CF6;animation:kmFloatB 5.5s ease-in-out infinite',
          )}
        />
        <img
          src={heroPortrait}
          alt="Kim Magno"
          className="km-hero-portrait"
          style={css(
            'position:absolute;top:0;left:0;right:0;width:100%;height:calc(100% + 38px);object-fit:contain;object-position:bottom center;display:block;-webkit-mask-image:linear-gradient(to bottom,#000 74%,rgba(0,0,0,0.55) 88%,transparent 100%),radial-gradient(150px 130px at 8% 100%,transparent 0%,rgba(0,0,0,0.5) 55%,#000 85%);-webkit-mask-composite:source-in;mask-image:linear-gradient(to bottom,#000 74%,rgba(0,0,0,0.55) 88%,transparent 100%),radial-gradient(150px 130px at 8% 100%,transparent 0%,rgba(0,0,0,0.5) 55%,#000 85%);mask-composite:intersect',
          )}
        />
      </div>
    </TiltCard>
  );
}
