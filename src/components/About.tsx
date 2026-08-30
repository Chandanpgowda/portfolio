import { about, profile } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { PinIcon } from './Icons';

export function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="container">
        <SectionHead
          kicker="About"
          title="Turning ideas into working software"
          sub="A quick look at who I am, what I do, and where I'm headed."
        />
        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <div className="highlights">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08}>
                <div className="highlight-item">
                  <span className="h-label">{h.label}</span>
                  <span className="h-value">{h.value}</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="highlight-item">
                <span className="h-label">Location</span>
                <span className="h-value" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <PinIcon width={15} height={15} style={{ color: 'var(--accent)' }} />
                  {profile.location}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
