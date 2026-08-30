import { useState } from 'react';
import { projects } from '../data/content';
import type { Project } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { GitHubIcon, ExternalIcon, ArrowIcon } from './Icons';
import { ProjectModal } from './ProjectModal';
import { FeaturedProject } from './FeaturedProject';

/* ============ Projects section ============ */
const CATEGORIES = ['All', 'Full-Stack', 'Frontend', 'Automation', 'Other'] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const [modal, setModal] = useState<Project | null>(null);

  const others = projects.filter((p) => !p.featured && (filter === 'All' || p.category === filter));

  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <SectionHead
          kicker="Projects"
          title="Things I've built"
          sub="Real applications with real deployments — click a project to see the full case study."
        />
        <FeaturedProject onOpen={setModal} />

        <div style={{ marginTop: '3.5rem' }}>
          <div className="filters" role="tablist" aria-label="Project filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {others.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <article className="card project-card">
                  <div className="p-top">
                    <div>
                      <h3>{p.name}</h3>
                      <div className="p-type">{p.type}</div>
                    </div>
                    <span className="chip">{p.category}</span>
                  </div>
                  <p className="p-desc">{p.short}</p>
                  <div className="tech-badges" style={{ margin: '0.9rem 0 0' }}>
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <div className="p-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon width={14} height={14} /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalIcon width={14} height={14} /> Live
                      </a>
                    )}
                  </div>
                  <button className="p-details-btn" onClick={() => setModal(p)}>
                    Details <ArrowIcon width={14} height={14} />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
