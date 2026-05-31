import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Home      from './components/Home'
import About     from './components/About'
import Skills    from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  useEffect(() => {
    // ScrollReveal — exact same config & selectors as original script.js
    // Runs after all components mount so all DOM elements exist
    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      sr.reveal('.home-content, .heading',                              { origin: 'top' })
      sr.reveal('.home-img, .skills-container, .portfolio-box', { origin: 'bottom' })
      sr.reveal('.home-content h1, .about-img, .hero-visual, .contact-info',                         { origin: 'left' })
      sr.reveal('.home-content p, .about-content, .contact-form-card',                      { origin: 'right' })
      sr.reveal('.skills-group',                                         { origin: 'bottom', interval: 200 })
      sr.reveal('.tool-chip',                                            { origin: 'bottom', interval: 100 })
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
