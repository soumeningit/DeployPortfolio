import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import MySkills from './MySkills'
import Contact from './Contact'
import Projects from './Projects'
import AboutMe from './AboutMe'

function Home() {
    return (
        <div className='bg-[#ffffff] overflow-hidden'>
            <Navbar />
            <Intro />
            <MySkills />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    )
}

export default Home