import React from 'react'
import data from '../data/index.json'
import { Link } from "react-scroll";

function Hero() {
  return (
    <section id="heroSection" className="hero__section">
      <div className="hero__section__content__box-left">
        <div className="hero__section__img">
          {data?.hero?.map((item, index) => (
              <img src={item.src} alt="Placeholder"></img>
            )
          )}
        </div>
      </div>
      <div className="hero__section__content__box-right">
        <div className="hero__section__content">
          <p className="section__label">Hi, my name is</p>
          <h1 className="hero__section__title">
            Michaela King
          </h1>
          <p className="section__title">I'm a Software Developer</p>
          <p className="section__title">based in Ontario, Canada</p>
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