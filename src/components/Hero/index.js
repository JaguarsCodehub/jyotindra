import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade'
import {FiCopy} from 'react-icons/fi';


const Hero = () => {

    

    return (
        <div className="container">
            <div className="hero-container">
            <Fade top>
                <div className="text-wrapper">
                    
                    {/* <h1 className="font-face-book"> UI Designer & Developer working with startups and individuals to create <b>eye-catchy</b> websites and apps.</h1> */}
                    <h1 className="font-face-book">Helping startups with <b>Code</b> & <b>design</b> to create tech products & better user experience.</h1>
                    
                </div>
                </Fade>
                <Fade top>
                <div className="image-wrapper">
                    <img src='../../images/brainmain6.png' alt="" />
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero
