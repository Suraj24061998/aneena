import React, { useEffect} from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
function Resume() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const experiences = [
    {
      year: '2024',
      duration: 'present',
      title: 'Graphic Designer',
      description: 'A2z Alphabet Solutionz',
      title1: 'Designed print and digital materials for various clients, including brochures, posters, and website graphics',
      title2: 'Improved client satisfaction by implementing a more client-focused design process.',
      title3: 'Assisted in the redesign of the company’s website, enhancing the user experience and visual appeal.'
    },
    {
      year: '2023',
      duration: '6 months',
      title: 'Graphic Designer',
      description: 'GSSHR Foreign Education & co',
      title1: 'Additional Training Period (February 2024 - March 2024)',
      title2: 'Conceptualizing visuals based on requirements and what clients needed ,Improved client satisfaction by implementing a more client-focused design process.',
      title3: 'Assisted in the redesign of the company’s website, enhancing the user experience and visual appeal.'
    },
    {
      year: '2022-2023',
      duration: '1 Years',
      title: 'Video Editor',
      description: 'GCC Wedding co',
      title1: 'Led the design team on multiple projects, creating brand identities, marketing materials, and digital assets.',
      title2: 'Create design and layouts by hand or use design software according to aesthetic values',
      title3: 'Brifieng and meeting with clients'
    },
    {
      year: '2022',
      duration: '6 Months',
      title: 'Graphic Designer Intern',
      description: '',
      title1: 'Conceptualizing visuals based on requirements and what clients needed',
      title2: 'Create design and layouts by hand or use design software according to aesthetic values',
      title3: 'Brifieng and meeting with clients'
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
          <div className="r-b-t-n">
            <button type="button" class="btn btn-warning">
              <Link to='/cv'>  View Cv </Link>

            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Resume
