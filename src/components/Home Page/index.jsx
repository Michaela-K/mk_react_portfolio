import React from 'react'
import Hero from '../Hero'
import Skills from '../Skills'
import MyPortfolio from '../Portfolio'
import Contact from '../Contact'
import Footer from '../Footer'
import About from '../About'

function Home() {
  return (
    <div id="Home">
      <Hero/>
      <About/>
      <Skills/>
      <MyPortfolio/>
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home