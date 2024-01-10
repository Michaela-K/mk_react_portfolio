import React from 'react'

function Hero() {
  return (
    <section id="heroSection" className="hero__section">
      <div className="hero__section__content__box">
        <div className="hero__section__content">
          <p className="section__title">Michaela King</p>
          <h1 className="hero__section__title">
            <span className="hero__section-title__color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero__section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> 
            Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero__section__img">
        <img src="./assets/images/hijabi.png" alt="Hero Image" />
      </div>
    </section>
  )
}

export default Hero