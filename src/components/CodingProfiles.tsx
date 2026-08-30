import { profile } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, HackerRankIcon } from './Icons';

const cards = [
  {
    name: 'GitHub',
    handle: '@Chandanpgowda',
    desc: 'Where I build, commit and ship my projects.',
    href: profile.github,
    Icon: GitHubIcon,
  },
  {
    name: 'LeetCode',
    handle: 'chandanpgowda',
    desc: 'My problem-solving practice ground.',
    href: profile.leetcode,
    Icon: LeetCodeIcon,
  },
  {
    name: 'HackerRank',
    handle: 'chandnpgowda2004',
    desc: 'Skill challenges and certifications.',
    href: profile.hackerrank,
    Icon: HackerRankIcon,
  },
  {
    name: 'LinkedIn',
    handle: 'chandan-p-gowda',
    desc: 'Professional profile and network.',
    href: profile.linkedin,
    Icon: LinkedInIcon,
  },
];

export function CodingProfiles() {
  return (
    <section id="coding-profiles" aria-label="Coding profiles">
      <div className="container">
        <SectionHead
          kicker="Coding Profiles"
          title="Find me online"
          sub="Active developer and competitive programming profiles."
        />
        <div className="profiles-grid">
          {cards.map(({ name, handle, desc, href, Icon }, i) => (
            <Reveal key={name} delay={(i % 4) * 0.08}>
              <a className="card profile-card" href={href} target="_blank" rel="noopener noreferrer">
                <span className="p-icon">
                  <Icon width={26} height={26} />
                </span>
                <h3>{name}</h3>
                <span>{handle}</span>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-soft)' }}>{desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
