import { projects } from '../../data/projects'
import SectionHeader from '../common/SectionHeader'
import ProjectCard from '../project/ProjectCard'

function ProjectSection() {
  return (
    <section id="growth" className="section soft-section workspace-section project-section">
      <SectionHeader
        eyebrow="Learning Journey"
        title="Three projects. Three lessons."
        description="Each project became a starting point for the next way of working."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
