/**
 * Central content layer for the portfolio.
 * All personal information lives here so components stay clean and data stays truthful.
 */

export const profile = {
  name: 'Chandan P',
  title: 'Full-Stack Developer',
  location: 'Hassan, Karnataka, India',
  email: 'chandanpgowda2004@gmail.com',
  phone: '+91 8792039311',
  github: 'https://github.com/Chandanpgowda',
  githubUser: 'Chandanpgowda',
  linkedin: 'https://linkedin.com/in/chandan-p-gowda-816362324',
  leetcode: 'https://leetcode.com/u/chandanpgowda/',
  hackerrank: 'https://www.hackerrank.com/profile/chandnpgowda2004',
  tagline: 'Building real-world software where thoughtful engineering meets relentless curiosity.',
  intro:
    'I am a Computer Science & Engineering student who ships full-stack applications — from real-time collaborative tools to automation bots — and I am always learning the next piece of the modern web.',
  roles: ['Full-Stack Developer', 'CSE Undergraduate', 'Problem Solver', 'Continuous Learner'],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  paragraphs: [
    "I'm an ongoing Computer Science & Engineering student pursuing my B.E., with a clear career goal: becoming a Full-Stack Developer who builds software people actually use.",
    'I enjoy the entire journey of an application — shaping the UI, designing APIs, modelling data, and deploying it live. Working on real-world projects like CodeSync has taught me how modern web technologies come together: React, Next.js, Node.js, MongoDB, real-time WebSockets, and AI integrations.',
    'Beyond building, I sharpen my problem-solving through programming challenges and stay involved in my college tech community — organising hackathons and technical events that push me (and others) to keep learning.',
  ],
  highlights: [
    { label: 'Focus', value: 'Full-Stack Web Development' },
    { label: 'Degree', value: 'B.E. Computer Science & Engineering' },
    { label: 'Based in', value: 'Hassan, Karnataka, India' },
    { label: 'Open to', value: 'Internships & Software Roles' },
  ],
};

export interface SkillGroup {
  name: string;
  icon: string;
  skills: { name: string; note?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    icon: 'code',
    skills: [{ name: 'Python' }, { name: 'C' }, { name: 'Java' }, { name: 'JavaScript' }, { name: 'TypeScript', note: 'Project experience — CodeSync' }],
  },
  {
    name: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React.js' },
      { name: 'Next.js', note: 'App Router — CodeSync' },
      { name: 'Tailwind CSS', note: 'Project experience' },
    ],
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Socket.IO & WebSockets', note: 'Real-time — CodeSync' },
      { name: 'NextAuth.js / JWT', note: 'Auth — CodeSync' },
    ],
  },
  {
    name: 'Databases',
    icon: 'database',
    skills: [{ name: 'MongoDB' }, { name: 'Mongoose' }, { name: 'SQL' }],
  },
  {
    name: 'Tools & Platforms',
    icon: 'tools',
    skills: [
      { name: 'Visual Studio Code' },
      { name: 'GitHub' },
      { name: 'Figma' },
      { name: 'Vercel / Railway', note: 'Deployments' },
    ],
  },
  {
    name: 'Also worked with',
    icon: 'spark',
    skills: [
      { name: 'Monaco Editor', note: 'CodeSync' },
      { name: 'Xterm.js', note: 'CodeSync' },
      { name: 'Yjs (CRDT)', note: 'CodeSync' },
      { name: 'Google Gemini API', note: 'CodeSync' },
      { name: 'Nodemailer', note: 'CodeSync' },
      { name: 'bcrypt', note: 'CodeSync' },
    ],
  },
];

export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'AI' | 'Automation' | 'Other';

export interface Project {
  id: string;
  name: string;
  type: string;
  category: ProjectCategory;
  short: string;
  description: string;
  problem?: string;
  contribution?: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'codesync',
    name: 'CodeSync',
    type: 'Real-Time Collaborative Coding Platform',
    category: 'Full-Stack',
    featured: true,
    short:
      'A real-time collaborative coding platform where multiple users code together, chat, and get AI-assisted code evaluation — built end-to-end with Next.js, Socket.IO, Yjs and MongoDB.',
    description:
      'CodeSync is a real-time collaborative coding platform that allows multiple users to work simultaneously on coding projects, communicate through an integrated chat system, and use an AI assistant for coding support and evaluation.',
    problem:
      'Developers usually collaborate by sharing screens or pasting code back and forth. CodeSync removes that friction: everyone edits the same project simultaneously with conflict-free syncing, communicates in the same workspace, and can evaluate code with an AI assistant.',
    contribution:
      'I worked on the full-stack development of the project — the Next.js frontend, the real-time collaboration layer (Socket.IO, WebSockets, Yjs CRDTs), the MongoDB data layer with Mongoose, authentication with NextAuth.js/JWT/OTP flows, the Gemini AI assistant integration, and deployment on Railway.',
    features: [
      'Create and manage coding projects',
      'Real-time collaborative code editing (Yjs CRDT + Monaco)',
      'Multi-user presence and live collaboration',
      'Integrated chat system',
      'AI coding assistant & code evaluation (Google Gemini)',
      'Built-in terminal (Xterm.js)',
      'Authentication with NextAuth.js, JWT & OTP/password-reset',
      'Project management dashboard',
    ],
    tech: [
      'React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Monaco Editor',
      'Xterm.js', 'Socket.IO', 'WebSockets', 'Yjs', 'MongoDB', 'Mongoose',
      'NextAuth.js', 'JWT', 'bcrypt', 'Google Gemini API', 'Nodemailer', 'Railway',
    ],
    github: 'https://github.com/Chandanpgowda/codeSynce',
    demo: 'https://code-synce.vercel.app/',
  },
  {
    id: 'blood-link',
    name: 'Blood Donation Management System',
    type: 'Responsive Web Platform',
    category: 'Frontend',
    short:
      'A responsive blood donation platform designed to connect donors with recipients through a clean, donor-focused interface.',
    description: 'A responsive blood donation platform designed to connect donors with recipients.',
    features: [
      'Responsive interface across devices',
      'Donor/recipient focused experience',
      'Interactive frontend with a user-friendly UI',
      'Deployed on Vercel',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    demo: 'https://blood-link-steel.vercel.app',
  },
  {
    id: 'tech-news-bot',
    name: 'Discord Tech News Bot',
    type: 'Python Automation / RSS Bot',
    category: 'Automation',
    short:
      'A Python-based RSS feed processor that automatically collects technology news and sends categorized, deduplicated updates to Discord.',
    description:
      'A Python-based RSS feed processor that automatically collects technology news and sends categorized updates to Discord channels.',
    features: [
      'Automatic RSS fetching',
      'Duplicate & spam filtering with summary cleaning',
      'Regional segmentation — Global & India news',
      'Category-based filtering: Innovation, Startups, AI, Cybersecurity, Future Tech, Space Tech & general technology',
      'Discord webhook delivery',
    ],
    tech: ['Python', 'RSS', 'Discord Webhooks'],
  },
  {
    id: 'nutri-aura',
    name: 'Nutri Aura',
    type: 'Personalized Diet & Nutrition Tracker',
    category: 'Full-Stack',
    short:
      'A web application that helps users track daily food intake and understand nutritional information such as calories and protein, built on a Node.js + MongoDB stack.',
    description:
      'A web application designed to help users track daily food intake and understand nutritional information such as calories and protein — a software project demonstrating data tracking and full-stack web development.',
    features: [
      'Daily food tracking with nutrition calculation',
      'Calorie and protein tracking',
      'User profile with weight/height/target information',
      'Personal dashboard with nutrition insights',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'campus-harmony-grid',
    name: 'Campus Harmony Grid',
    type: 'Campus Software Project',
    category: 'Other',
    short:
      'A campus-focused software project exploring how structured digital tooling can support campus life.',
    description: 'A campus-focused software project — a practical build exploring structured, campus-oriented software design.',
    features: ['Campus-focused design', 'Practical software engineering practice'],
    tech: ['Web Development'],
  },
];

export const experience = {
  role: 'Secretary',
  org: 'TechSpark — Technical Club',
  period: 'Navkis College of Engineering, Hassan',
  summary:
    'Led the technical club as Secretary, driving hands-on technical activity across the campus rather than just membership.',
  points: [
    'Helped organize technical activities and coordinate club operations with students and team members',
    'Conducted a 24-hour hackathon end-to-end — planning, logistics and mentoring participants',
    'Organized multiple technical events, workshops and sessions',
    'Coordinated technical activities between the club, students and faculty',
  ],
};

export const hackathons = [
  {
    title: 'Hackathon — Alva’s Institute, Moodbidri',
    description: 'Participated in an inter-college hackathon, building solutions under time pressure with a team.',
  },
  {
    title: 'Hackathon — Rajeev Institute of Technology',
    description: 'Participated in a hackathon focused on rapid problem solving and prototype development.',
  },
  {
    title: '24-Hour Hackathon — Conducted via TechSpark',
    description: 'Conducted a full 24-hour hackathon as Secretary of TechSpark, from planning to execution.',
  },
  {
    title: 'Technical Events — TechSpark',
    description: 'Participated in and organized multiple technical events through the TechSpark club.',
  },
];

export const certifications = [
  { issuer: 'IBM', title: 'Getting Started with Artificial Intelligence' },
  { issuer: 'IIT Bombay', title: 'JavaScript Training' },
  { issuer: 'Zysk Technologies', title: 'Industrial Workshop' },
  { issuer: 'Infosys', title: 'Data Structures and Algorithms' },
];

export const education = {
  degree: 'B.E. — Computer Science and Engineering',
  college: 'Navkis College of Engineering, Hassan',
  university: 'Visvesvaraya Technological University',
  duration: '2023 – 2027',
  cgpa: '7.6 / 10',
};

export const blogPosts = [
  { title: 'Building CodeSync', excerpt: 'How a real-time collaborative coding platform comes together — CRDTs, sockets, and all.', status: 'Coming Soon' },
  { title: 'Learning Full-Stack Development', excerpt: 'What I have learned building complete applications, from UI to database.', status: 'Coming Soon' },
  { title: 'Real-Time Web Applications', excerpt: 'WebSockets, Socket.IO and Yjs — making browsers collaborate in real time.', status: 'Coming Soon' },
  { title: 'My Hackathon Experience', excerpt: 'What 24-hour hackathons taught me about building fast and working in teams.', status: 'Coming Soon' },
  { title: 'JavaScript / React Projects', excerpt: 'Practical patterns from the projects I build.', status: 'Coming Soon' },
];

// Fallback repos shown if the GitHub API is rate-limited or unavailable.
export const fallbackRepos = [
  { name: 'codeSynce', description: 'Real-time collaborative coding platform with AI assistance.', language: 'TypeScript', html_url: 'https://github.com/Chandanpgowda/codeSynce' },
  { name: 'blood-link', description: 'Blood donation management system — connecting donors and recipients.', language: 'JavaScript', html_url: 'https://blood-link-steel.vercel.app' },
];


