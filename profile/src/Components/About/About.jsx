import React from 'react'
import './About.css'
import img from'../Images/aneena3.jpg'

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
              {/* <img src={img} alt="" className="ab-img" /> */}
              <div className="ab-img"></div>
             
            </div>
            <div className="col-lg-6">
              <p className="ab-text">
              Creative and detail-oriented graphic designer with 2+ years of experience in branding, print, and digital design. 
              Proven ability to deliver high-quality design solutions that meet client objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
