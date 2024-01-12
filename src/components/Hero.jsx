import React from 'react'
import { Link } from "react-scroll";

function Hero() {
  return (
    <section id="heroSection" className="hero__section">
      <div className="hero__section__content__box">
        <div className="hero__section__content">
          <p className="section__title">Michaela King</p>
          <h1 className="hero__section__title">
          <span className="text-highlight">Web</span> Developer
          </h1>
          <p className="hero__section-description">
            Based in Ontario, Canada
          </p>
        </div>
        <Link spy={true} smooth={true} duration={500} offset={-70} to="Contact">
          <button className="btn btn-primary">
            Get In Touch
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero