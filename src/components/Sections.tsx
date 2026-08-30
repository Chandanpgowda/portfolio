import { hackathons, certifications, education } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { TrophyIcon, CapIcon, CheckIcon } from './Icons';

export function Achievements() {
  return (
    <section id="achievements" aria-label="Hackathons and achievements">
      <div className="container">
        <SectionHead
          kicker="Hackathons & Activities"
          title="Learning by building under pressure"
          sub="Hackathon participations and hands-on technical events I've taken part in or organized."
        />
        <div className="achievements-grid">
          {hackathons.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.1}>
              <div className="card ach-card">
                <span className="ach-icon">
                  <TrophyIcon width={20} height={20} />
                </span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" aria-label="Certifications">
      <div className="container">
        <SectionHead
          kicker="Certifications"
          title="Certified learning"
          sub="Courses and workshops completed across AI, JavaScript, DSA and industry practice."
        />
        <div className="certs-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.08}>
              <div className="card cert-card">
                <span className="c-issuer">
                  <CheckIcon width={14} height={14} />
                  {c.issuer}
                </span>
                <h3>{c.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" aria-label="Education">
      <div className="container">
        <SectionHead kicker="Education" title="Academic background" />
        <Reveal>
          <div className="card edu-card">
            <span className="edu-icon">
              <CapIcon width={26} height={26} />
            </span>
            <div>
              <h3>{education.degree}</h3>
              <p className="edu-meta">
                {education.college} · {education.university}
              </p>
              <div className="edu-tags">
                <span className="chip">{education.duration}</span>
                <span className="chip">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
