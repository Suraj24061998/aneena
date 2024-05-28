import React from 'react'
import '../Contact/Contact.css'
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className='main-c'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            |<ul className='contact-link g-3'>
              <button type="button" class="btn btn-warning">
                <Link to="https://in.pinterest.com/4neenaj/_created/">  pinterest <i class="bi bi-pinterest"></i></Link>
              </button>
              <button type="button" class="btn btn-warning">
                <Link to="https://www.behance.net/3dc06e60">  behance <i class="bi bi-behance"></i></Link>
              </button>
              <button type="button" class="btn btn-warning">
                <Link to='https://www.linkedin.com/in/aneena-j-93696b286/'> Linkedin <i class="bi bi-linkedin"></i></Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
