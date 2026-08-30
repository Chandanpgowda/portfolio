import { blogPosts } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { PenIcon } from './Icons';

export function Blog() {
  return (
    <section id="blog" aria-label="Blog">
      <div className="container">
        <SectionHead
          kicker="Writing"
          title="Blog"
          sub="Notes on projects, full-stack development and hackathon lessons — posts coming soon."
        />
        <div className="blog-grid">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="card blog-card">
                <span className="b-status">{p.status}</span>
                <h3>
                  <PenIcon width={15} height={15} style={{ marginRight: '0.4rem', color: 'var(--accent)' }} />
                  {p.title}
                </h3>
                <p>{p.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
