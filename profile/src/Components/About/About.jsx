import React from 'react'
import './About.css'
import img from'../Images/h2.jpg'

function About() {
  return (
    <div>
      <div className="about-main">
        <div className="ab-head">
            <h1>About Me</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={img} alt="" className="ab-img" />
            </div>
            <div className="col-lg-6">
              <p className="ab-text"data-aos="fade-left">
              I'm a professional Graphic Designer & Illustrator with more than 2+ years of experience.
               I’d love to try something new for my projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
