import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import { useActiveSection, useTheme } from './hooks';
import { DownloadIcon, MenuIcon, CloseIcon, MoonIcon, SunIcon } from './Icons';

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const resumeUrl = `${import.meta.env.BASE_URL}assets/Chandan_P_Resume.pdf`;

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container inner">
          <a href="#home" className="logo" aria-label="Chandan P — home">
            {'<'}chandan<span>p</span>{' />'}
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href={resumeUrl} className="btn btn-primary resume-btn-sm" download>
              <DownloadIcon width={15} height={15} /> Resume
            </a>
            <button
              className="icon-btn hamburger"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href.slice(1) ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href={resumeUrl}
          download
          onClick={() => setOpen(false)}
          style={{ color: 'var(--accent)', fontWeight: 600 }}
        >
          Download Resume
        </a>
      </nav>
    </>
  );
}

export const PROFILE = profile;
