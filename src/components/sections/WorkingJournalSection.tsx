import { projects } from '../../data/projects'
import SectionHeader from '../common/SectionHeader'
import CaseStudyCard from '../project/WorkingStoryCard'

function CaseStudySection() {
  return (
    <section id="journal" className="section workspace-section journal-section">
      <SectionHeader
        eyebrow="Working Journal"
        title="What I took away from each project."
        description="A short record of the situations that helped me understand teamwork, business rules, and scope more clearly."
      />

      <div className="case-list">
        {projects.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default CaseStudySection
