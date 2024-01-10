import React from 'react'
import Hero from '../Hero'
import Skills from '../Skills'
import About from '../About'
import MyPortfolio from '../Portfolio'
import Contact from '../Contact'

function Home() {
  return (
    <>
      <Hero/>
      <Skills/>
      <MyPortfolio/>
      <Contact/>
    </>
  )
}

export default Home