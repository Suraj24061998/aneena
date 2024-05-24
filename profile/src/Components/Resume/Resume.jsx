import React from 'react'
import './Resume.css'

function Resume() {
  const education=[
    {title:'2021-2023',content:'IMAGE CREATIVE EDUCATION'},
    {title:'2018-2020',content:'JYOTHI NIKETHAN WOMEN ‘S COLLEGE'},
  ]
  const experiences=[
    {
      year: '2024',
      duration: 'present',
      title: 'Graphic Designer',
      description: 'A2z Alphabet Solutionz',
      title1:'Conceptualizing visuals based on requirements and what clients needed',
      title2:'Create design and layouts by hand or use design software according to aesthetic values',
      title3:'Brifieng and meeting with clients'
    },
    {
      year: '2023-2024',
      duration: '1 Years',
      title: 'Graphic Designer',
      description: 'GSSHR Foreign Education & co',
      title1:'Conceptualizing visuals based on requirements and what clients needed',
      title2:'Create design and layouts by hand or use design software according to aesthetic values',
      title3:'Brifieng and meeting with clients'
    },
    {
      year: '2022-2023',
      duration: '1 Years',
      title: 'Video Editor',
      description: 'GCC Wedding co',
      title1:'Conceptualizing visuals based on requirements and what clients needed',
      title2:'Create design and layouts by hand or use design software according to aesthetic values',
      title3:'Brifieng and meeting with clients'
    },
    {
      year: '2022',
      duration: '6 Months',
      title: 'Graphic Designer Intern',
      description: '',
      title1:'Conceptualizing visuals based on requirements and what clients needed',
      title2:'Create design and layouts by hand or use design software according to aesthetic values',
      title3:'Brifieng and meeting with clients'
    },
  ]
   
  return (
    <div>
      <div className="resume-main">
        <div className="resume-head">
          <h1>Resume</h1>
        </div>
        <div className="container">
      <div className="main-timeline">
        {experiences.map((experience) => (
          <div className="timeline" >
            <div className="icon"></div>
            <div className="date-content" data-aos="fade-right">
              <div className="date-outer">
                <span className="date">
                  <span className="month">{experience.duration}</span>
                  <span className="year">{experience.year}</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">{experience.title}</h5>
              <p className="description">{experience.description}
              <ul className='ul-title'>
              <li>{experience.title1}</li>
              <li>{experience.title2}</li>
              <li>{experience.title3}</li>
             </ul>
              </p>
            
             
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default Resume
