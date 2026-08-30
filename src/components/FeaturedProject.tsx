import { projects } from '../data/content';
import type { Project } from '../data/content';
import { Reveal } from './Reveal';
import { GitHubIcon, ExternalIcon, ArrowIcon, CheckIcon } from './Icons';


const MOCK_CODE = `// collaborative-session.ts
const session = await codeSync.join({
  room: "dsa-grind",
  users: ["chandan", "teammate"],
});

Y.applyMonaco(editor, awareness);   // CRDT sync
socket.emit("edit", delta);        // real-time

const review = await gemini.evaluate(code);`;

export function FeaturedProject({ onOpen }: { onOpen: (p: Project) => void }) {
  const p = projects.find((x) => x.id === 'codesync')!;
  return (
    <Reveal>
      <article className="featured-project">
        <div className="featured-inner">
          <div className="featured-visual" aria-hidden="true">
            <div className="editor-mock">
              <div className="mock-bar">
                <i /><i /><i />
                <span className="mock-file">codesync/session.ts — collaborative</span>
              </div>
              <pre className="mock-code">{MOCK_CODE}</pre>
              <div className="mock-users">
                <i /><i /><i /><i />
                <span>4 collaborators online · AI assistant active</span>
              </div>
            </div>
          </div>
          <div className="featured-content">
            <span className="p-kicker">★ Featured Project</span>
            <h3>{p.name}</h3>
            <p>{p.short}</p>
            <ul className="feature-list">
              {p.features.slice(0, 6).map((f) => (
                <li key={f.slice(0, 24)}>
                  <CheckIcon width={15} height={15} /> {f}
                </li>
              ))}
            </ul>
            <div className="tech-badges">
              {p.tech.slice(0, 10).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
              <span className="chip">+{p.tech.length - 10} more</span>
            </div>
            <div className="featured-actions">
              <a className="btn btn-primary" href={p.demo} target="_blank" rel="noopener noreferrer">
                <ExternalIcon width={16} height={16} /> Live Demo
              </a>
              <a className="btn btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon width={16} height={16} /> GitHub
              </a>
              <button className="btn btn-ghost" onClick={() => onOpen(p)}>
                Case Study <ArrowIcon width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
