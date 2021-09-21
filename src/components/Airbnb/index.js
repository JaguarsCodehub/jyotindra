import React from 'react'
import "./index.css"
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Airbnb = () => {
    return (
        <div className="top-container">
            
            <div className="topheader-wrapper">
            <Bounce bottom big>
                <h1><b className="airbnb-text">Airbnb Clone</b> that helps you show flats in <b className="airbnb-text">London</b> with an amazing UI.</h1>
            </Bounce>
            </div>
            
            <div className="airbnb-image-wrapper">
                <Bounce top big>
                <a href=""><img src='../../images/airbnb.png' alt="" /></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/airbnb-wrapper.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>View Demo</button></a>
                </div>
                </Bounce>
                
            </div>
            <div class="team">
        <div class="team__wrapper">
            <div class="team__text animate-loc">
                
                <p class="topline">Airbnb Clone</p>
                <h1>React Js with Tailwind CSS</h1>
                <p class="team__desc">
                    This website was built using React, Tailwind and Next Js. Amazing Ui elements and the calendar feature is what makes this build beautiful and clean for a developer and UI designer like me. 
                </p>
                
            </div>
            <div class="team__text animate-loc">
                
                <p class="topline animate-loc">Airbnb Clone</p>
                <h1>What did i learn from this build?</h1>
                <p class="team__desc animate-loc">
                    This build taught me how important is a clean UI in todays tech world, also I tried server side rending here, the pink load bar you see at the top, Yes it's that. 
                </p>
                
            </div>
            <div class="team__card ">
                <p>Airbnb</p>
                <img src="../../images/airbnb-mob2.jpg" loading="lazy" alt="" class="team__img" />
            </div> 
            <div class="team__card ">
                {/* <p>Kerela</p> */}
                <img src="../../images/airbnb-mob1.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>France</p> */}
                <img src="../../images/airbnb-mob4.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                <p>React Js Build</p>
                <img src="../../images/airbnb-mob3.jpg" loading="lazy" alt="" class="team__img" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default Airbnb
