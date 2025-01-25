import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <div>
        <div className=''>
        <Navbar  /></div>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact/>
        <Footer/>

      </div>

    </div>
  )
}

export default Home
