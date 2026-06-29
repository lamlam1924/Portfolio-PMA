import { jdSignals } from '../../data/projects'
import Badge from '../common/Badge'
import MotionWrapper from '../common/MotionWrapper'
import SectionHeader from '../common/SectionHeader'

const fitItems = [
  {
    title: 'Shared understanding',
    desc: 'I learned that a team can drift when each person reads the requirement differently.',
  },
  {
    title: 'Clarify before building',
    desc: 'Before going deeper, I try to ask about unclear points in the workflow and scope.',
  },
  {
    title: 'Scope matters',
    desc: 'Not every good idea needs to appear in the first version.',
  },
  {
    title: 'Learning through feedback',
    desc: 'Feedback from mentors and teammates helps me revisit early assumptions more calmly.',
  },
]

function FitSection() {
  return (
    <section id="learning" className="section workspace-section">  
      <SectionHeader
  eyebrow="Observation Notes"
  title="Small notes after each project."
  description="I do not treat these projects as a list of achievements. They are a way to reflect on requirement, workflow, business rules, and teamwork."
/>

      <div className="fit-grid">
        {fitItems.map((item, index) => (
          <MotionWrapper key={item.title} delay={index * 0.1} className="fit-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper className="jd-map">
        {jdSignals.map((item) => (
          <Badge key={item} variant="orange">
            {item}
          </Badge>
        ))}
      </MotionWrapper>
    </section>
  )
}

export default FitSection
