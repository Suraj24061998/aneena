import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../Images/logo4.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Resume', path: '/resume' },
    { title: 'Service', path: '/service' },
    { title: 'Skills', path: '/skills' },
    { title: 'Project', path: '/project' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-nav">
      <div className="container">
        <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {nav.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={link.path} onClick={toggleNav}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
        </div>
      </div>
      
    </div>
  );
}

export default Nav;
