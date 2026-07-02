import { css } from '../lib/style';
import Hero from './Hero';
import ExperienceCard from './ExperienceCard';
import CertificationsCard from './CertificationsCard';
import TechStackCard from './TechStackCard';
import FeaturedProjectCard from './FeaturedProjectCard';
import StatsCard from './StatsCard';
import type { Cert } from '../types';
import projWorkAnalytics from '../assets/proj-work-analytics.png';
import projKnowledgeManagement from '../assets/proj-knowledge-management.png';

interface HeroSectionProps {
  certs: Cert[];
  onViewAllCerts: () => void;
}

export default function HeroSection({ certs, onViewAllCerts }: HeroSectionProps) {
  return (
    <div className="km-hero-grid" style={css('display:grid;grid-template-columns:1fr 340px;gap:16px;align-items:stretch;margin-top:44px')}>
      <div className="km-hero-col" style={css('display:flex;flex-direction:column;gap:16px')}>
        <Hero />
        <div className="km-two-col-row" style={css('display:flex;gap:16px;flex:1;align-items:stretch')}>
          <ExperienceCard />
          <CertificationsCard certs={certs} onViewAll={onViewAllCerts} />
        </div>
      </div>
      <div style={css('display:flex;flex-direction:column;gap:16px')}>
        <TechStackCard />
        <FeaturedProjectCard
          href="https://github.com/Joestarnova/jikan-time-ledger"
          img={projWorkAnalytics}
          alt="Time and Task Management Analytics — TimeLedger dashboard"
          title="Time and Task Management Analytics"
          stackLabel="TypeScript · React · Node.js · Express.js · PostgreSQL"
          objectPosition="top left"
        />
        <FeaturedProjectCard
          href="https://github.com/Joestarnova/mern-note-app"
          img={projKnowledgeManagement}
          alt="Knowledge Management App"
          title="Digital Notebook Application"
          stackLabel="JavaScript · React · Node.js · Express.js · MongoDB"
          objectPosition="top center"
        />
        <StatsCard />
      </div>
    </div>
  );
}
