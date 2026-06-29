import { motion } from 'framer-motion'
import type { Project } from '../../types/project'
import Badge from '../common/Badge'
import SummaryBox from './SummaryBox'

type Props = {
  project: Project
}

function WorkingStoryCard({ project }: Props) {
  return (
    <motion.article
      id={project.id}
      className="case-card"
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="case-header">
        <div>
          <p className="eyebrow">{project.chapter}</p>
          <h3>{project.name}</h3>
          <p>{project.theme}</p>

          <div className="focus-list">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <SummaryBox
          items={[
            { label: 'Role', value: project.role },
            { label: 'Timeline', value: project.time },
            { label: 'Team', value: project.team },
          ]}
        />
      </header>

      <div className="case-body">
        <section>
          <span className="note-label">Observation</span>
          <h4>{project.story.title}</h4>
          <p>{project.story.before}</p>
        </section>

        <section>
          <span className="note-label">Observation</span>
          <h4>What made me rethink</h4>
          <p>{project.story.situation}</p>
        </section>

        <InfoBlock label="Action" title="Where I took part" items={project.story.whatIDid} />

        <section>
          <span className="note-label">Insight</span>
          <h4>What I carried forward</h4>
          <p>{project.story.result}</p>
          <p>{project.story.lesson}</p>
        </section>
      </div>
    </motion.article>
  )
}

function InfoBlock({ label, title, items }: { label: string; title: string; items: string[] }) {
  return (
    <section>
      <span className="note-label">{label}</span>
      <h4>{title}</h4>
      <ul className="list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default WorkingStoryCard
