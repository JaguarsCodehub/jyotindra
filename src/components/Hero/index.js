import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade'

const Hero = () => {
    return (
        <div className="container">
            <div className="hero-container">
            <Fade top>
                <div className="text-wrapper">
                    
                    <h1 className="font-face-book"> UI Designer & Developer working with startups and individuals to create <b>eye-catchy</b> websites and apps.</h1>
                    
                </div>
                </Fade>
                <Fade top>
                <div className="image-wrapper">
                    <img src='../../images/hero-2.jpg' alt="" />
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero
