import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      <div>
        <Navbar  />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact/>

      </div>

    </div>
  )
}

export default Home
