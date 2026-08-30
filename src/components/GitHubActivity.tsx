import { useEffect, useState } from 'react';
import { profile, fallbackRepos } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { GitHubIcon, StarIcon } from './Icons';

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  fork?: boolean;
}

/**
 * Fetches public repos from the GitHub API (no auth, no secrets).
 * Falls back to a curated static list if the API fails or is rate-limited.
 */
export function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`,
      { signal: controller.signal }
    )
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data: Repo[]) => {
        const list = data.filter((r) => !r.fork).slice(0, 6);
        setRepos(list.length ? list : null);
        if (!list.length) setFailed(true);
      })
      .catch(() => setFailed(true));
    return () => controller.abort();
  }, []);

  const list: Repo[] =
    repos ?? fallbackRepos.map((r) => ({ ...r, stargazers_count: 0 }));

  return (
    <section id="github" aria-label="GitHub activity">
      <div className="container">
        <SectionHead
          kicker="GitHub Activity"
          title="Live from my GitHub"
          sub="Recent repositories pulled from the public GitHub API — with a static fallback if the API is unavailable."
        />
        <div className="gh-grid">
          {list.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <a className="card gh-repo" href={r.html_url} target="_blank" rel="noopener noreferrer">
                <h3>
                  <GitHubIcon width={16} height={16} /> {r.name}
                </h3>
                <p>{r.description || 'No description provided.'}</p>
                <div className="gh-meta">
                  {r.language && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span className="lang-dot" /> {r.language}
                    </span>
                  )}
                  {r.stargazers_count > 0 && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <StarIcon width={13} height={13} /> {r.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="gh-chart">
            <h3>
              <GitHubIcon width={16} height={16} /> Contribution activity
            </h3>
            {/* Third-party contribution graph with graceful failure notice */}
            <img
              src={`https://ghchart.rshah.org/22d3ee/${profile.githubUser}`}
              alt={`GitHub contribution graph for ${profile.name}`}
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = 'none';
                const parent = img.parentElement;
                if (parent && !parent.querySelector('.gh-fallback')) {
                  const note = document.createElement('p');
                  note.className = 'gh-fallback';
                  note.innerHTML =
                    'Contribution graph could not be loaded. View live activity on <a href="' +
                    profile.github +
                    '" target="_blank" rel="noopener noreferrer" style="color: var(--accent)">GitHub →</a>';
                  parent.appendChild(note);
                }
              }}
            />
          </div>
        </Reveal>
        {failed && (
          <p className="form-note" style={{ marginTop: '1rem' }}>
            GitHub API was unavailable — showing a curated selection instead.
          </p>
        )}
      </div>
    </section>
  );
}
