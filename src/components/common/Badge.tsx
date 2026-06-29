type Props = {
  children: string
  variant?: 'primary' | 'orange' | 'soft'
}

function Badge({ children, variant = 'soft' }: Props) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}

export default Badge