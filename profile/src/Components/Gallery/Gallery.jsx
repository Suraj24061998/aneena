import React, { useState } from 'react';
import './Gallery.css';
import brand1 from '../Images/gallery1.jpg';
import brand2 from '../Images/gallery2.jpg';
import brand3 from '../Images/gallery3.jpg';
import brand4 from '../Images/gallery4.jpg';
import brand5 from '../Images/gallery5.jpg';
import brand6 from '../Images/gallery6.jpg';
import { Link } from 'react-router-dom';

function Gallery() {
  const slider1 = [
    { img: brand1 },
    { img: brand2 },
    { img: brand3 },
    { img: brand4 },
    { img: brand5 },
    { img: brand6 },
  ];

  return (
    <div className="gallery-main">
      <div className="g-text">
        <h1>Projects</h1>
      </div>
      <div className="grid">
        {slider1.map((data) => (
          <div className="grid-item">
            <img src={data.img}  />
          </div>
        ))}
      </div>
      <div className="g-btn">
      <button type="button" class="btn btn-warning">
     <Link to="https://in.pinterest.com/4neenaj/_created/"> More <i class="bi bi-pinterest"></i></Link>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
