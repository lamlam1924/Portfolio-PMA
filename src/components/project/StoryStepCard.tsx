import { motion } from 'framer-motion'

type Decision = {
  title: string
  context: string
  action: string
  result: string
}

type Props = {
  decision: Decision
}

function DecisionCard({ decision }: Props) {
  return (
    <motion.div
      className="decision-card"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <h5>{decision.title}</h5>

      <div className="decision-grid">
        <div>
          <span>Context</span>
          <p>{decision.context}</p>
        </div>

        <div>
          <span>Action</span>
          <p>{decision.action}</p>
        </div>

        <div>
          <span>Result</span>
          <p>{decision.result}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default DecisionCard
