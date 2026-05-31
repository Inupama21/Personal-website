import { useEffect, useRef } from 'react'

const pmSkills = [
  { name: 'Agile / Scrum', level: 60 },
  { name: 'Project Planning & Scheduling', level: 70},
  { name: 'Risk Management', level: 50},
  { name: 'Stakeholder Management', level: 60},
  { name: 'Budgeting & Resource Allocation', level: 70 },
  { name: 'SDLC Management', level: 70 },
]

const techSkills = [
  { name: 'React / JavaScript', level: 65 },
  { name: 'Node.js / Express', level: 60 },
  { name: 'SQL & Database Design', level: 70 },
  { name: 'Git & Version Control', level: 65 },
  { name: 'HTML / CSS', level: 80 },
  { name: 'Python', level: 50 },
]

const tools = [
  { icon: 'fa-brands fa-jira', label: 'Jira' },
  { icon: 'fa-brands fa-clickup', label: 'Clickup' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-brands fa-figma', label: 'Figma' },
  { icon: 'fa-solid fa-table-columns', label: 'MS Project' },
  { icon: 'fa-brands fa-slack', label: 'Slack' },
  { icon: 'fa-solid fa-database', label: 'MySQL' },
  { icon: 'fa-brands fa-react', label: 'React' },
]

function SkillBar({ name, level }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span className="pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" data-level={level} />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate bars when section scrolls into view
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          const fills = sectionRef.current.querySelectorAll('.skill-fill')
          fills.forEach(el => {
            el.style.width = el.dataset.level + '%'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-container">
        {/* PM Skills */}
        <div className="skills-group">
          <h3>
            <i className="fa-solid fa-diagram-project" />
            Project Management
          </h3>
          {pmSkills.map(s => <SkillBar key={s.name} {...s} />)}
        </div>

        {/* Tech Skills */}
        <div className="skills-group">
          <h3>
            <i className="fa-solid fa-code" />
            Technical Skills
          </h3>
          {techSkills.map(s => <SkillBar key={s.name} {...s} />)}
        </div>
      </div>

      {/* Tools */}
      <div className="tools-section">
        <h3>
          <i className="fa-solid fa-wrench" />
          Tools &amp; Platforms
        </h3>
        <div className="tools-grid">
          {tools.map(t => (
            <div key={t.label} className="tool-chip">
              <i className={t.icon} />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
