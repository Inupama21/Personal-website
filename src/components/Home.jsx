import { useEffect } from 'react'
import mainPic from './images/mainpic.png'
import cv from './images/cv.pdf'

export default function Home() {
  useEffect(() => {
    // Typed.js — exact strings from original script.js
    if (window.Typed) {
      const typed = new window.Typed('.multiple-text', {
        strings: [
        
          'Project Manager',
          'Fullstack Developer',
          'Undergraduate',

        ],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      })
      return () => typed.destroy()
    }
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, I'm</h3>
        <h1>Inupama Sandali</h1>
        <h3>And I'm a <span className="multiple-text">FullStack Developer</span></h3>
        <p>
          I am fascinated by what happens between an idea and its successful <br />
          delivery. Whether managing projects or building solutions,<br/>
          I am constantly exploring better ways to turn vision into reality.
        </p>

        <div className="social-media">
          <a href="https://www.linkedin.com/in/inupama-kavisekara-a5ab07265/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href="https://www.instagram.com/inu_sandali/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram" />
          </a>
           <a href="https://github.com/Inupama21" aria-label="github">
            <i className="fa-brands fa-github" />
          </a>
          {/*
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-twitter" />
          </a> */}
        </div>

        <a href={cv} target="_blank" className="btn">Download CV
        </a>
        
      </div>

      <div className="home-img">
        {/* Replace src with your real image path: images/profiledp.png */}
        <img src={mainPic} alt="Inupama Sandali" />
      </div>
    </section>
  )
}
