import MotionWrapper from './MotionWrapper'

type Props = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <MotionWrapper className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </MotionWrapper>
  )
}

export default SectionHeader