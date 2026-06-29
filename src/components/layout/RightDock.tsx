import { useEffect, useState } from 'react'

const dockItems = [
  { label: 'Home', href: '#home' },
  { label: 'Learning Journey', href: '#growth' },
  { label: 'Working Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

function RightDock() {
  const [activeHref, setActiveHref] = useState(dockItems[0].href)

  useEffect(() => {
    const sections = dockItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="right-dock" aria-label="Quick navigation">
      <span className="right-dock-title">Index</span>

      <nav>
        {dockItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            title={item.label}
            className={activeHref === item.href ? 'active' : undefined}
          >
            <span className="dock-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="dock-line" />
            <span className="dock-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default RightDock
