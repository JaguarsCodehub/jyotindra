import React from 'react'
import "./index.css"
import Bounce from 'react-reveal/Bounce'

const Playground = () => {
    return (
        <div className="top-container">
            <div className="topheader-wrapper">
                <Bounce bottom big>
                <h1><b className="anime-text">Checkout My Code + Design Projects.</b></h1>
                </Bounce>
            </div>
            <div className="airbnb-image-wrapper">
                <Bounce bottom cascade>
                <a href=""><img src='../../images/ui.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>View Design</button></a>
                </div>
                <a href=""><img src='../../images/netflix.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>Live Website</button></a>
                </div>
                <a href=""><img src='../../images/ui3.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>View Design</button></a>
                </div>
                <a href=""><img src='../../images/ui1.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>View Design</button></a>
                </div>
                <a href=""><img src='../../images/appwrapper-1.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>Live App</button></a>
                </div>
                <a href=""><img src='../../images/airbnb.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>Live Website</button></a>
                </div>
                <a href=""><img src='../../images/amazon.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>Live Website</button></a>
                </div>
                <a href=""><img src='../../images/disnep.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>Live Website</button></a>
                </div>
                </Bounce>
            </div>
        </div>
    )
}

export default Playground
