import React from 'react'
import './Cv.css'
import img from '../Images/cv1.jpg'

function Cv() {
    return (
        <div>
            <div className="mt-2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cv-image">
                            <img src={img} alt="" className='c-v-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2"></div>
        </div>
    )
}

export default Cv
