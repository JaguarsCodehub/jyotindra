import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Process = () => {
    return (
        <div>
            <div className="topheader-wrapper">
            <Bounce bottom big>
                <h1><b className="anime-text">UX Design + Code Process</b></h1>
            </Bounce>
            </div>
            
            <div className="airbnb-image-wrapper">
                <Bounce top big>
                <a href=""><img src='../../images/process-1.png' alt="" /></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/process-2.png' alt="" className="airbnb-image"/></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/process-3.png' alt="" className="airbnb-image"/></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/process-4.png' alt="" className="airbnb-image"/></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/process-5.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href="/connect"><button>Let's Connect</button></a>
                </div>
                </Bounce>
                
            </div>
        </div>
    )
}

export default Process
