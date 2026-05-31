export default function About() {
  return (
    <section className="about" id="about">
      <div className="hero-visual reveal-right">
        <div className="hero-card-stack">
          <div className="stat-card stat-1">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects Developed</span>
          </div>
          <div className="stat-card stat-2">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Coding</span>
          </div>
          <div className="stat-card stat-3">
            <span className="stat-num">8+</span>
            <span className="stat-label">Months in PM</span>
          </div>
          <div className="pm-badge">
            <i className="fa-solid fa-diagram-project" />
            <span>Project<br/>Manager</span>
          </div>
        </div>
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>FullStack Developer &amp; Project Manager</h3>
        <p>
         I'm Inupama Sandali, an IT undergraduate passionate about the intersection of technology and leadership. 
         My journey started with code - but I quickly realised that the most impactful work happens when technical skill
          is paired with strong project management: clear goals, structured delivery, and teams that communicate well.
        </p>
        <p>
          I'm actively building expertise in <strong>Agile methodologies</strong>, risk
          management, and stakeholder communication - applying these frameworks in academic
          projects and personal initiatives to prepare for a career where I can lead
          technology delivery from day one.
        </p>
        <a href="#contact" className="btn">Work with me <i className="fa-solid fa-arrow-right" /></a>
      </div>
    </section>
  )
}
