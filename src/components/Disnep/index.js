import React from 'react'
import "./index.css"
import Bounce from 'react-reveal/Bounce';


const disnep = () => {
    return (
        <div className="top-container">
            <div className="topheader-wrapper">
                <Bounce bottom big>
                <h1><b className="disnep-text">Disnep Hotstar </b>with a User Interface you will <b className="disnep-text">Fall in Love </b>with.</h1>
                </Bounce>
            </div>
            <div className="airbnb-image-wrapper">
                <Bounce top big>
                <a><img src='../../images/disnep.png' alt="" /></a>
                </Bounce>
                <Bounce top big>
                <a><img src='../../images/disnepwrapper.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href="https://hotstar-clone-65601.web.app/"><button>View Demo</button></a>
                </div>
                </Bounce>
            </div>
            <div class="team">
        <div class="team__wrapper">
            <div class="team__text animate-loc">
                <p class="topline">Dinsep Hotstar Clone</p>
                <h1>React Js with Styled Components</h1>
                <p class="team__desc">
                    This website was built using React, Styled Components and Firebase Authentication. Amazing Ui elements and the card hover with video feature is what steals the whole show of my build. 
                </p>
            </div>
            <div class="team__text animate-loc">
                <p class="topline animate-loc">Disnep HOtstar Clone</p>
                <h1>What did i learn from this build?</h1>
                <p class="team__desc animate-loc">
                    This build taught me how simple css can create a difference between a good Ui and an absolute great Ui, also I tried Firebase Authentication here as it was easy as given in the documentation.
                </p>
            </div>
            <div class="team__card ">
                {/* <p>Airbnb</p> */}
                <img src="../../images/disnep-mob1.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>Kerela</p> */}
                <img src="../../images/disnep-mob2.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>France</p> */}
                <img src="../../images/disnep-mob3.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>React Js Build</p> */}
                <img src="../../images/disnep-mob4.jpg" loading="lazy" alt="" class="team__img" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default disnep
