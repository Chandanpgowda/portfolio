import { skillGroups } from '../data/content';
import type { SkillGroup } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { CodeIcon, LayoutIcon, ServerIcon, DatabaseIcon, ToolsIcon, SparkIcon } from './Icons';

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  code: CodeIcon,
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  tools: ToolsIcon,
  spark: SparkIcon,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = ICONS[group.icon] ?? CodeIcon;
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <div className="card skill-card">
        <div className="skill-head">
          <Icon width={22} height={22} />
          <h3>{group.name}</h3>
        </div>
        <div className="skill-tags">
          {group.skills.map((s) => (
            <span key={s.name} className="chip skill-tag">
              {s.name}
              {s.note && <span className="note" role="tooltip">{s.note}</span>}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills">
      <div className="container">
        <SectionHead
          kicker="Skills"
          title="Technologies I work with"
          sub="Core strengths plus tools I've used in shipped projects. Hover the tags to see where each one was applied."
        />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.name} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
