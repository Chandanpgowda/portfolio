import { profile, navLinks } from '../data/content';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, HackerRankIcon, MailIcon } from './Icons';

export function Footer() {
  const socials = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.leetcode, label: 'LeetCode', Icon: LeetCodeIcon },
    { href: profile.hackerrank, label: 'HackerRank', Icon: HackerRankIcon },
    { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
  ];

  return (
    <footer className="footer">
      <div className="container inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{profile.name}</h3>
            <p className="f-role">{profile.title}</p>
            <p>
              Building modern web applications with clean code, real deployments and a habit of
              continuous learning.
            </p>
            <div className="footer-socials">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>Built with React + Vite — deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
