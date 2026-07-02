import { useState } from 'react';
import { css } from './lib/style';
import { useTheme } from './hooks/useTheme';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import CertsModal from './components/CertsModal';
import { CERTS, PROJECTS, SKILLS } from './data';

const ACCENT = 'violet';

function App() {
  const { theme, toggleTheme, toggleRef } = useTheme('dark');
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <div
      className="km-root"
      data-theme={theme}
      data-accent={ACCENT}
      style={css(
        "min-height: 100vh; background: var(--page-bg); color: var(--text); font-family: 'Schibsted Grotesk',ui-sans-serif,system-ui,sans-serif; -webkit-font-smoothing: antialiased; text-align: left",
      )}
    >
      <div className="km-container" style={css('max-width:1360px;margin:0 auto;padding:20px 24px 40px')}>
        <Nav toggleTheme={toggleTheme} toggleRef={toggleRef} />
        <HeroSection certs={CERTS} onViewAllCerts={() => setCertsOpen(true)} />
        <WorkSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <ContactSection />
      </div>
      {certsOpen && <CertsModal certs={CERTS} onClose={() => setCertsOpen(false)} />}
    </div>
  );
}

export default App;
