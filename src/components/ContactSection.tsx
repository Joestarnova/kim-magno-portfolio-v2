import { css } from '../lib/style';
import TiltCard from './TiltCard';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/Joestarnova',
    label: 'GitHub',
    path: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.2.68.82.57A12 12 0 0 0 12 .3z',
    width: 19,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/kim-magno14/',
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
    width: 18,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="km-section-spacer" style={css('margin-top:210px;scroll-margin-top:110px;position:relative')}>
      <TiltCard
        style={css(
          'position:relative;border-radius:24px;overflow:hidden;min-height:210px;display:flex;align-items:center;border:1px solid var(--glass-bd);box-shadow:var(--shadow),inset 0 1px 0 rgba(255,255,255,.28)',
        )}
      >
        <div
          aria-hidden="true"
          style={css(
            'position:absolute;inset:0;background:radial-gradient(85% 125% at 40% 2%,rgba(58,92,175,.5),transparent 56%),radial-gradient(74% 128% at 93% 50%,rgba(104,58,78,.4),transparent 60%),radial-gradient(62% 120% at 6% 80%,rgba(16,32,84,.58),transparent 62%),linear-gradient(103deg,#060f2a 0%,#0a1026 40%,#100e20 68%,#160f1b 100%)',
          )}
        />
        <div aria-hidden="true" style={css('position:absolute;inset:0;overflow:hidden')}>
          <div
            style={css(
              "position:absolute;left:-10%;right:-10%;top:44%;height:52%;transform:rotate(-4deg);transform-origin:center;mix-blend-mode:screen;filter:blur(20px);background:linear-gradient(3deg,transparent 30%,rgba(150,185,255,.10) 44%,rgba(214,230,255,.5) 55%,rgba(160,195,255,.14) 66%,transparent 80%);-webkit-mask-image:linear-gradient(100deg,rgba(0,0,0,.35) 0%,#000 26%,#000 58%,rgba(0,0,0,.25) 82%,transparent 100%);mask-image:linear-gradient(100deg,rgba(0,0,0,.35) 0%,#000 26%,#000 58%,rgba(0,0,0,.25) 82%,transparent 100%);background-size:200% 100%;animation:kmRibbon 16s ease-in-out infinite",
            )}
          />
        </div>
        <div
          aria-hidden="true"
          style={css(
            'position:absolute;inset:0;backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);background:linear-gradient(150deg,rgba(255,255,255,.12),rgba(255,255,255,.03) 44%,transparent 70%),rgba(255,255,255,.022)',
          )}
        />
        <div
          style={css(
            'position:relative;z-index:2;flex:1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:28px;padding:clamp(28px,4vw,48px)',
          )}
        >
          <div className="km-contact-info" style={css('min-width:280px;align-self:stretch;display:flex;flex-direction:column')}>
            <div style={css('flex:1;display:flex;align-items:center')}>
              <h2
                style={css(
                  "margin:0;font-family:'Newsreader',Georgia,serif;font-weight:500;font-size:clamp(30px,4vw,54px);line-height:1.04;letter-spacing:-.015em;color:#EDF0F6",
                )}
              >
                Turning complexity into <em style={css('font-style:italic;color:#3D93FF')}>clarity.</em>
              </h2>
            </div>
            <div style={css('transform:translateY(16px)')}>
              <div
                style={css(
                  "font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:rgba(210,216,230,.72)",
                )}
              >
                Kim Magno <span style={css('color:rgba(210,216,230,.4)')}>|</span> Software Engineer
              </div>
              <div
                style={css(
                  "margin-top:10px;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:rgba(210,216,230,.6)",
                )}
              >
                Remote · GMT+8
              </div>
            </div>
          </div>
          <div style={css('display:flex;flex-direction:column;align-items:flex-end;gap:16px;flex:none')}>
            <div style={css('display:flex;gap:10px')}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="contact-social-icon"
                  style={css(
                    'display:flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;text-decoration:none',
                  )}
                >
                  <svg width={s.width} height={s.width} viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a
                href="mailto:kbmagno14@gmail.com"
                aria-label="Email"
                className="contact-social-icon"
                style={css(
                  'display:flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;text-decoration:none',
                )}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="M3.5 7l8.5 5.5L20.5 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
      <div
        style={css(
          "position:relative;margin-top:26px;padding-top:22px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;font-family:'Space Mono',monospace;font-size:12px;color:var(--muted)",
        )}
      >
        <span>© 2026 Kim Magno</span>
        <span>Simple. Intentional. Reliable.</span>
      </div>
    </section>
  );
}
