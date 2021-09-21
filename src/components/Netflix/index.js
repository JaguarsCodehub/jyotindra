import React from 'react'
import "./index.css";

const Netflix = () => {
    return (
        <div className="top-container">
            <div className="topheader-wrapper">
                <h1><b className="airbnb-text">Netflix Clone </b>built specifically for TV's and Laptops with React Js.</h1>
            </div>
            <div className="airbnb-image-wrapper">
                <a href=""><img src='../../images/netflix.png' alt="" /></a>
                <a href=""><img src='../../images/netflixwrapper.png' alt="" className="airbnb-image"/></a>
                <div className="button-wrapper">
                    <a href=""><button>View Demo</button></a>
                </div>
            </div>
            <div class="team">
        <div class="team__wrapper">
            <div class="team__text animate-loc">
                <p class="topline">Netflix Clone</p>
                <h1>React Js with Styled Components</h1>
                <p class="team__desc">
                    This website was built using React, Styled Components and Firebase Authentication. Amazing Ui elements and same to same Netflix appearance is what makes this build beautiful and clean for a developer and UI designer like me. 
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
                {/* <p>Airbnb</p> */}
                <img src="../../images/netflix-mob1.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>Kerela</p> */}
                <img src="../../images/netflix-mob2.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>France</p> */}
                <img src="../../images/netflix-mob3.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>React Js Build</p> */}
                <img src="../../images/netflix-mob4.jpg" loading="lazy" alt="" class="team__img" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default Netflix
