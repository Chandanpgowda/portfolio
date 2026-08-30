# Chandan P — Developer Portfolio

A modern, fully responsive developer portfolio built with **React + TypeScript + Vite**, designed for GitHub Pages static hosting.

**Live site:** https://chandanpgowda.github.io/portfolio/

## Features

- Dark/light theme with system-preference detection and persistence
- Hero section with typing animation, particle canvas and 3D-tilt profile photo
- Featured project presentation (CodeSync) with case-study modals
- Project filtering by category
- Skills organized by area with project-experience tooltips (no fake percentages)
- Experience/leadership timeline, hackathons, certifications, education cards
- Coding profile cards (GitHub, LeetCode, HackerRank, LinkedIn)
- Live GitHub repository feed via the **public** GitHub API (no tokens) with static fallback
- GitHub contribution graph (third-party image) with graceful failure message
- Blog section (clearly marked "Coming Soon" placeholders — no fake articles)
- Contact form using `mailto:` (backend-free, works on static hosting)
- Custom cursor (desktop only), scroll-reveal animations, scroll progress bar
- Reduced-motion support, semantic HTML, keyboard-accessible controls
- SEO meta tags, Open Graph & Twitter cards, favicon

## Tech Stack

React 18 · TypeScript · Vite · CSS (custom design tokens, no UI framework)

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## GitHub Pages Deployment (step by step)

1. Create a GitHub repository named **`portfolio`** under your account (`Chandanpgowda`).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Chandanpgowda/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
5. Your site will be live at `https://chandanpgowda.github.io/portfolio/`.

> If you rename the repository, update `base` in `vite.config.ts` and `homepage` in `package.json` to `/<repo-name>/`.

## Personal Assets (add these)

Drop these into `public/assets/` — no code changes required:

| File | Purpose |
|---|---|
| `profile.jpg` | Your profile photo (used in hero; placeholder shown if missing) |
| `Chandan_P_Resume.pdf` | Your resume (linked by all "Download Resume" buttons) |

## Environment Variables

**None required.** The portfolio uses only public APIs and static data. Never put API keys, tokens, or database credentials in this project.

## Project Structure

```
├── index.html                  # SEO meta + no-flash theme script
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── assets/                 # profile.jpg + resume go here
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css               # design tokens + base styles
│   ├── app2–app6.css           # component styles (imported by index.css)
│   ├── data/content.ts         # ALL personal data (single source of truth)
│   └── components/
│       ├── Navbar.tsx  ThemeToggle via hooks  Cursor.tsx
│       ├── Hero.tsx    About.tsx  Skills.tsx  Experience.tsx
│       ├── Projects.tsx  FeaturedProject.tsx  ProjectModal.tsx
│       ├── Sections.tsx  (Achievements, Certifications, Education)
│       ├── CodingProfiles.tsx  GitHubActivity.tsx  Blog.tsx
│       ├── Contact.tsx  Footer.tsx  Reveal.tsx  hooks.ts  Icons.tsx
└── .github/workflows/deploy.yml
```

## Important Notes

- The GitHub API is rate-limited per IP (60 req/h). When it fails, a curated static repo list is shown — the site never breaks.
- The contact form composes an email in the visitor's mail client (`mailto:`), which requires no backend and exposes no secrets.
- Certifications list no fake IDs/dates; hackathons list no fabricated rankings.
