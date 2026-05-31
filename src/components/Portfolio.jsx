import { useState } from 'react'

const projects = [
    {
    id: 1,
    category: 'project-management',
    title: 'DocFlex AI',
    role: 'Project Manager',
    duration: '6 months',
    team: '5 members',
    status: 'Delivered',
    tags: ['Agile', 'Clickup', 'MySQL', 'Python'],
    description:
      ' First medical AI platform in Srilanka designed to transform how healthcare professionals access essential drug information.',
    outcomes: ['Delivered within budget', 'Full requirements met', 'Deployed to production'],
    link: 'https://www.docflex.net/',
    color: 'green',
  },
  {
    id: 2,
    category: 'development',
    title: 'Trading & Learning Platform',
    role: 'Fullstack Developer',
    duration: ' 8 months',
    team: '5 members',
    status: 'Delivered',
    tags: ['Scrum', 'React', 'REST API', 'PostgreSQL'],
    description:
      'A trading simulation platform that enables users to learn and practice trading activities using real-time data, helping them enhance their trading skills.',
    outcomes: ['AI-powered market summary reports', 'Real-time trading simulation environment', 'Secure JWT authentication system'],
    link: '#',
    color: 'green',
  },
  {
    id: 3,
    category: 'development',
    title: 'Caregivers Finding Application',
    role: 'Fullstack Developer',
    duration: '7 months',
    team: 'Individual',
    status: 'Delivered',
    tags: ['Reactjs', 'Nodejs', 'PostgreSQL'],
    description:
      'Building a caregiving platform that connects families with caregivers through location-based matching, scheduling, secure payments, and communication features.',
    outcomes: ['Geolocation-based caregiver matching', 'Real-time scheduling system', 'Secure payment integration architecture'],
    link: '#',
    color: 'green',
  },
  {
    id: 4,
    category: 'development',
    title: 'IoT Conference Hall Mic System',
    role: 'Developer',
    duration: '8 months',
    team: '5 members',
    status: 'Delivered',
    tags: [' ESP32-WROOM-32', 'Firebase', 'Arduino', 'Digital Filtering'],
    description:
      'Led end-to-end delivery of a hardware inventory and management system. Defined project scope, managed sprint cycles, and coordinated a 4-person team while contributing full-stack development.',
    outcomes: ['Real-time microphone control via web application', 'Improved audio quality through signal processing', 'End-to-End Project'],
    link: '#',
    color: 'green',
  },

  // {
  //   id: 5,
  //   category: 'development',
  //   title: 'Blog Content Management System',
  //   role: 'Lead Developer',
  //   duration: '6 weeks',
  //   team: 'Solo',
  //   status: 'Delivered',
  //   tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
  //   description:
  //     'Independently planned, designed, and developed a full-featured CMS with role-based access control, rich text editing, and an analytics dashboard — delivering against a self-set schedule.',
  //   outcomes: ['Self-managed delivery', 'Clean architecture', 'Deployed to production'],
  //   link: '#',
  //   color: 'green',
  // },
]

const filters = ['All', 'Project Management', 'Development']

export default function portfolio() {
  const [active, setActive] = useState('All')

  const filtered = projects.filter((p) => {
    if (active === 'All') return true
    if (active === 'Project Management') return p.category === 'project-management'
    return p.category === 'development'
  })

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <div className="projects-header reveal">
          <h2 className="heading">My <span>Projects</span></h2>
          <p className="projects-sub">
            Each project reflects both technical delivery and project management discipline -
            planning, execution, and stakeholder outcomes.
          </p>

          <div className="proj-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={active === f ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, delay }) {
  return (
    <div className={`proj-card reveal`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="proj-card-top">
        <div className="proj-meta">
          <span className={`proj-status status-${p.color}`}>{p.status}</span>
          <span className="proj-category">
            {p.category === 'project-management' ? 'PM Lead' : 'Development'}
          </span>
        </div>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-role">
          <i className="fa-solid fa-user-tie" /> {p.role}
        </p>
        <p className="proj-desc">{p.description}</p>

        <div className="proj-stats">
          <div className="pstat">
            <i className="fa-regular fa-clock" />
            <span>{p.duration}</span>
          </div>
          <div className="pstat">
            <i className="fa-solid fa-users" />
            <span>{p.team}</span>
          </div>
        </div>
      </div>

      <div className="proj-card-bottom">
        <div className="proj-outcomes">
          {p.outcomes.map((o) => (
            <span key={o} className="outcome">
              <i className="fa-solid fa-check" /> {o}
            </span>
          ))}
        </div>
        <div className="proj-tags">
          {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
        </div>
        <a href={p.link} className="proj-link">
          View Project <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </div>
  )
}
