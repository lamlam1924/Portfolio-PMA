type SummaryItem = {
  label: string
  value: string
}

type Props = {
  items: SummaryItem[]
}

function SummaryBox({ items }: Props) {
  return (
    <div className="case-summary">
      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  )
}

export default SummaryBox
