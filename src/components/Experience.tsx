import { experience, hackathons } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { BriefcaseIcon, TrophyIcon } from './Icons';

export function Experience() {
  return (
    <section id="experience" aria-label="Experience and leadership">
      <div className="container">
        <SectionHead
          kicker="Experience"
          title="Leadership & technical involvement"
          sub="Leading technical activity on campus — not just participating in it."
        />
        <div className="timeline">
          <Reveal>
            <div className="timeline-item">
              <div className="card timeline-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <BriefcaseIcon width={18} height={18} style={{ color: 'var(--accent)' }} />
                  <span className="t-role">{experience.role}</span>
                </div>
                <div className="t-org">{experience.org}</div>
                <div className="t-period">{experience.period}</div>
                <p>{experience.summary}</p>
                <ul>
                  {experience.points.map((pt) => (
                    <li key={pt.slice(0, 24)}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="timeline-item">
              <div className="card timeline-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <TrophyIcon width={18} height={18} style={{ color: 'var(--accent)' }} />
                  <span className="t-role">Hackathons & Technical Activities</span>
                </div>
                <div className="t-period">Participations & event organization</div>
                <ul style={{ marginTop: '0.9rem' }}>
                  {hackathons.map((h) => (
                    <li key={h.title}>
                      <strong style={{ color: 'var(--text)' }}>{h.title}</strong> — {h.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
