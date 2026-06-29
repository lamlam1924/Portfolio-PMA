import { motion } from 'framer-motion'
import { Fragment } from 'react'
import Button from '../common/Button'

const projectLessons = [
  {
    project: 'RMS',
    keyword: 'Teamwork',
    lesson: 'Align on the workflow before assigning tasks.',
  },
  {
    project: 'Rentify',
    keyword: 'Product Thinking',
    lesson: 'Understand the business before choosing the solution.',
  },
  {
    project: 'TuteClass',
    keyword: 'Scope',
    lesson: 'Define the scope before expanding the product.',
  },
]

const keywords = ['Requirement', 'Workflow', 'Teamwork', 'Trade-off', 'Reflection']

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -44 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Software Engineering Student</p>

        <h1>Every project leaves me with a better way of working.</h1>

        <div className="hero-text" aria-label="Working flow">
          {keywords.map((item, index) => (
            <Fragment key={item}>
              <span className="hero-text-item">{item}</span>
              {index < keywords.length - 1 && (
                <span className="hero-text-arrow" aria-hidden="true">
                  •
                </span>
              )}
            </Fragment>
          ))}
        </div>

        <div className="hero-actions">
          <Button href="#growth">Read Journal</Button>
          <Button href="#journal" variant="secondary">
            Open journal
          </Button>
        </div>
      </motion.div>

      <motion.aside
        className="hero-panel journal-note"
        initial={{ opacity: 0, x: 44 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="note-pin" />

        <p className="note-label">Journal Preview</p>

        <h2>Three projects. Three lessons.</h2>

        <div className="lesson-list">
          {projectLessons.map((item, index) => (
            <a key={item.project} href={`#${item.project.toLowerCase()}`}>
              <span className="lesson-index">{String(index + 1).padStart(2, '0')}</span>
              <span>
                <strong>{item.project}</strong>
                <em>{item.keyword}</em>
              </span>
              <span>{item.lesson}</span>
            </a>
          ))}
        </div>
      </motion.aside>
    </section>
  )
}

export default Hero
