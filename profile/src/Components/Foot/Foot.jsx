import React from 'react'
import './Foot.css'
import { Link } from 'react-router-dom'

function Foot() {
    const contact=[
        {icon:'fa fa-phone', text: '91 7736677162' },
        {icon:'fa fa-envelope', text: 'aneenaj09@gmail.com',link:'mailto:aneenaj09@gmail.com' },   
    ]
    const quickLinks = [
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Service', path: '/service'},
        { title: 'Skills', path: '/skills' },
        { title: 'Project', path: '/project' },
        { title: 'Contact', path: '/contact' },
    ]
    const socialMediaLinks = [
        { href: 'https://www.behance.net/3dc06e60', iconClass: 'bi bi-behance' },
        { href: 'https://in.pinterest.com/4neenaj/_created/', iconClass: 'bi bi-pinterest' },
        { href: 'https://www.linkedin.com/in/aneena-j-93696b286/', iconClass: 'bi bi-linkedin' },
        
      ];
  return (
    <div>
      <div className="main-footer">
        <div className="logoinfo">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <ul>
              {contact.map((contact, index) => (
                <li key={index}>
                  <div className={contact.icon}></div>
                  <a href={contact.link}>{contact.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="com">
          <h1>Quick Links</h1>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="info">
          <h1>Social Media</h1>
          <div className="sociallogos">
            <div className="logobox">
              {socialMediaLinks.map((social, index) => (
                <a key={index} href={social.href} className={social.iconClass}></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foot
