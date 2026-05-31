import { useState, useEffect } from 'react'

const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sticky, setSticky]     = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => {
      // sticky header — same threshold as original
      setSticky(window.scrollY > 100)

      // close menu on scroll — same as original
      setMenuOpen(false)

      // active nav link — same logic as original script.js
      const sections = document.querySelectorAll('section')
      sections.forEach(sec => {
        const top    = window.scrollY
        const offset = sec.offsetTop - 150
        const height = sec.offsetHeight
        const id     = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
          setActive(id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${sticky ? ' sticky' : ''}`}>
      <a href="#home" className="logo">Portfolio</a>

      <div className="menu-icon" onClick={() => setMenuOpen(v => !v)}>
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} id="menu-icon" />
      </div>

      <nav className={`navbar${menuOpen ? ' active' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  )
}
