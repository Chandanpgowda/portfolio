import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { useIsMobile } from './hooks';
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  HackerRankIcon,
  DownloadIcon,
  ArrowIcon,
} from './Icons';

/* Typing animation */
const TYPED = ['Full-Stack Developer', 'CSE Undergraduate', 'Problem Solver', 'Continuous Learner'];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return;
    }
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      const current = words[word];
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1800);
          return;
        }
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      }
      timer = window.setTimeout(tick, deleting ? 45 : 90);
    };
    timer = window.setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

/* Lightweight canvas particles — reduced on mobile, disabled for reduced motion */
function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mobile = useIsMobile();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = mobile ? 28 : 70;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--accent').trim() || '#22d3ee';

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.35;
        ctx.fill();
      }
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = accent;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          if (Math.abs(dx) < 110 * dpr && Math.abs(dy) < 110 * dpr) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [mobile]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

/* 3D tilt on the profile photo (desktop pointers only) */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'rotateY(0) rotateX(0)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return ref;
}

const PLACEHOLDER_AVATAR = `${import.meta.env.BASE_URL}assets/profile-placeholder.svg`;

function ProfilePhoto() {
  const [src, setSrc] = useState(`${import.meta.env.BASE_URL}assets/profile.jpg`);
  const tilt = useTilt();
  return (
    <div className="photo-wrap">
      <div className="photo-ring" aria-hidden="true" />
      <div ref={tilt} className="photo-card">
        <img
          src={src}
          alt="Portrait photo of Chandan P"
          loading="eager"
          width={320}
          height={320}
          onError={() => setSrc(PLACEHOLDER_AVATAR)}
        />
      </div>
      <div className="floating-badges" aria-hidden="true">
        <span className="floating-badge" style={{ top: '4%', left: '-14%', '--d': '0s' } as React.CSSProperties}>React</span>
        <span className="floating-badge" style={{ top: '30%', right: '-18%', '--d': '1.4s' } as React.CSSProperties}>Node.js</span>
        <span className="floating-badge" style={{ bottom: '18%', left: '-20%', '--d': '2.6s' } as React.CSSProperties}>TypeScript</span>
        <span className="floating-badge" style={{ bottom: '2%', right: '-8%', '--d': '3.4s' } as React.CSSProperties}>MongoDB</span>
      </div>
      <p className="photo-caption">chandanpgowda@dev:~$</p>
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(TYPED);
  const resumeUrl = `${import.meta.env.BASE_URL}assets/Chandan_P_Resume.pdf`;

  const socials = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.leetcode, label: 'LeetCode', Icon: LeetCodeIcon },
    { href: profile.hackerrank, label: 'HackerRank', Icon: HackerRankIcon },
  ];

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <ParticleField />
        <div className="hero-glow" />
      </div>
      <div className="container inner">
        <div>
          <span className="hero-badge">
            <span className="dot" /> Available for internships & opportunities
          </span>
          <h1>
            Hi, I&apos;m <span className="grad">Chandan P</span>
          </h1>
          <p className="typing" aria-live="polite">
            {typed}
            <span className="cursor-bar" aria-hidden="true" />
          </p>
          <p className="tagline">{profile.tagline}</p>
          <p className="tagline" style={{ marginTop: '0.7rem' }}>{profile.intro}</p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowIcon width={16} height={16} />
            </a>
            <a href={resumeUrl} className="btn btn-ghost" download>
              <DownloadIcon width={16} height={16} /> Download Resume
            </a>
          </div>
          <div className="socials">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <ProfilePhoto />
      </div>
      <div className="scroll-hint" aria-hidden="true">scroll</div>
    </section>
  );
}

