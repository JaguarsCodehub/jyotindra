import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade'


const Hero2 = () => {
    return (
        <div className="hero2-container">
            <div className="textwrapper">
                <Fade left>
                    <h1 className="big-heading font-face-book">Your website should create <b className="bold">leverage</b> by turning visitors into engaged <b>customers</b>.</h1>
                </Fade>
                <Fade bottom big>
                    <h2 className="small-heading">It will work as a sales funnel which churns engagement leverage <b className="hours">24 hrs a day, 7 days a week</b></h2>
                </Fade>
            </div>
        </div>
    )
}

export default Hero2
