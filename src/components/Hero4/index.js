import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade';

const Hero4 = () => {
    return (
        <div className="ui-container">
            <Fade bottom big>
            <div className="header-wrapper">
                <h1>I can help turn your <b className="middle-text">paper ball</b> into a <b className="middle-text">paper plane</b> with code and design.</h1>
            </div>
            </Fade>
            <Fade bottom big>
            <div className="ui-image-wrapper">
            <img src='../../images/ui.png' alt="" />
                {/* <img src={require('../Hero4/ui.png')} alt="" /> */}
            </div>
            </Fade>
        </div>
    )
}

export default Hero4
