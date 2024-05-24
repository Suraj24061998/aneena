import React, { useEffect } from 'react'
import './Home.css'
import img from '../Images/h2.jpg'
import About from '../About/About'
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from '../Resume/Resume';
import Service from '../Services/Service';
import Skil from '../Skills/Skil';
import Gallery from '../Gallery/Gallery';
import Port from '../portfolio/Port';



function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div>
      <div className="home-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
            <div className="home-text1"data-aos="fade-right" data-aos-duration="2000">
            <p className="h-t-1">HELLO!</p>
            <p className="h-t-2">I'm Graphic Designer</p>
        </div>
            </div>
            <div className="col-lg-5">
            <div className="home-img">
            <img src={img} alt="" className='h-img' />
        </div>
            </div>
          </div>
        </div>
       
      
      </div>
      <About/>
      <Resume/>
      <Service/>
      <Skil/>
      <Gallery/>
     
     
      
     
    </div>
  )
}

export default Home
