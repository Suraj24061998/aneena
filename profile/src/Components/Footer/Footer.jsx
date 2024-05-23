import React from 'react';
import './Footer.css'
import img1 from '../Images/logo4.png'
import { Link } from 'react-router-dom'
function Footer() {
    const quickLinks = [
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Service', path: '/service'},
        { title: 'Skills', path: '/skills' },
        { title: 'Project', path: '/project' },
        { title: 'Contact', path: '/contact' },
    ]
  
    return (
        <div>
            <div className="footer-main">
                <div className="container">
                    <div className="row p-6">
                        <div className="col-lg-4">
                            <div className="f-img">
                                <img src={img1} alt="" className='log-img ' />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="quik-links">
                                <ul className='quick-content'>
                                    <h1 className="quik-text">Quick Links</h1>
                                    {quickLinks.map((link) => (
                                        <li className='link1'>
                                           <h5><Link to={link.path}>{link.title}</Link></h5> 
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-text">
                                <h1 className="c-text" >Contactus</h1>
                               <div className="icon">
                               
                               {/* <p><i class="fas fa-home mr-3"></i> <div className="i-text">VELLAMANALIL VEEDU,VRINDHA <br /> VAN NAGAR 44,KADAPPAKADA <br />(PO)KOLLAM,691008</div>                     
                               </p> */}
                               <a href="mailto:aneenaj09@gmail.com"><i class="fas fa-envelope mr-3"></i> aneenaj09@gmail.com</a>
                                <p><i class="fas fa-phone mr-3"></i> + 91 7736677162</p>
                               </div>
                            </div>
                          
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
