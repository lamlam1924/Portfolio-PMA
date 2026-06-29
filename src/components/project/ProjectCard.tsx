import { motion } from 'framer-motion'
import type { Project } from '../../types/project'

type Props = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="folder-tab">
        <span>{project.chapter}</span>
        <strong>{project.name}</strong>
      </div>

      <h3>{project.title}</h3>
      <p className="project-theme">{project.theme}</p>

      <p>{project.story.lesson}</p>

      <dl>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>

        <div>
          <dt>Keyword</dt>
          <dd>{project.tags.join(' • ')}</dd>
        </div>
      </dl>

      <a href={`#${project.id}`} className="text-link">
        Open working note
      </a>
    </motion.article>
  )
}

export default ProjectCard
