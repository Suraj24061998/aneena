import React, { useEffect } from 'react'
import './Service.css'
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../Images/icon1.png'
import img1 from '../Images/icon2.png'
import img2 from '../Images/icon3.png'
import img3 from '../Images/icon4.png'
import img4 from '../Images/icon5.png'
import img5 from '../Images/icon6.png'

function Service() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const services = [
        { img: img,text: 'Design'},
        {img:img1,text:'Video Editing'},
        {img:img2,text:'Product Design'},
        {img:img3,text:'Illustration'},
        {img:img4,text:'Logo Design'},
        {img:img5,text:'Branding'},
        

   
    ];
    return (
        <div>
            <div className="service-main">
                <div className="service-head">
                    <h1>Services</h1>
                </div>
                <div className="container mt-5">
                    <div className="row g-5 mt-5">
                        {services.map((service, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="serive-box"data-aos="fade-down"data-aos-duration="1500">
                                    <div className="service-img">
                                        <img src={service.img} alt="" className='s-img'/>
                                        <div className="service-text mt-3">
                                        <p className="serv-t">{service.text}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service
