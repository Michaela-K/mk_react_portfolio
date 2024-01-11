import React from 'react'

function Hero() {
  return (
    <section id="heroSection" className="hero__section">
      <div className="hero__section__content__box">
        <div className="hero__section__content">
          <p id='spinning__text'></p>
          <p className="section__title">Michaela King</p>
          <h1 className="hero__section__title">
            Web Developer
          </h1>
          <p className="hero__section-description">
            Based in Ontario, Canada
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </section>
  )
}

export default Hero