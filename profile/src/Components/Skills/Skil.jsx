import React, {useEffect} from 'react'
import './Skil.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Skil() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
   
    const skills = [
        { name: 'Phoroshop', percent: '100%' },
        { name: 'Illustrator', percent: '95%' },
        { name: 'Premiere Pro', percent: '80%' },
        { name: 'Autodesk Maya', percent: '60%' },
        { name: 'After Effect', percent: '70%' },
      ];
  return (
    <div>
         <div className="skill-head">
            <h1>MY Skills</h1>
        </div>
      <div className="container">
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6 mt-3">
              <div className="skill-main"data-aos="flip-down"data-aos-duration="2000">
                <div className="skill-text">
                  <div className="skill-p-text">
                    <p className="s-t-1">{skill.name}</p>
                    <p className="s-t-2">{skill.percent}</p>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{ width: skill.percent }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       
 
    </div>
  )
}

export default Skil
