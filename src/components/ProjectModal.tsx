import { useEffect } from 'react';
import type { Project } from '../data/content';
import { GitHubIcon, ExternalIcon } from './Icons';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal-close" onClick={onClose} aria-label="Close project details">
          ✕
        </button>
        <span className="m-type">{project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.problem && (
          <>
            <h4>The problem it solves</h4>
            <p>{project.problem}</p>
          </>
        )}
        <h4>Key features</h4>
        <ul>
          {project.features.map((f) => (
            <li key={f.slice(0, 24)}>{f}</li>
          ))}
        </ul>
        {project.contribution && (
          <>
            <h4>My contribution</h4>
            <p>{project.contribution}</p>
          </>
        )}
        <h4>Technology</h4>
        <div className="tech-badges">
          {project.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="modal-actions">
          {project.github && (
            <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon width={16} height={16} /> GitHub
            </a>
          )}
          {project.demo && (
            <a className="btn btn-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalIcon width={16} height={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
