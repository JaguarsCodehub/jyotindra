import React from 'react'
import "./index.css"
import Bounce from 'react-reveal/Bounce'

const Anime = () => {
    return (
        <div className="top-container">
            <div className="topheader-wrapper">
                <Bounce bottom big>
                <h1><b className="anime-text">Anime Manga App </b>is a React Native App which works on both<b className="anime-text"> Android & iOS</b>.</h1>
                </Bounce>
            </div>
            <div className="airbnb-image-wrapper">
                <Bounce top big>
                <a href=""><img src='../../images/appwrapper-1.png' alt="" /></a>
                </Bounce>
                <Bounce top big>
                <a href=""><img src='../../images/appwrapper-2.png' alt="" className="airbnb-image"/></a>
                
                </Bounce>
            </div>
            <div class="team">
        <div class="team__wrapper">
            <div class="team__text animate-loc">
                <p class="topline">Anime App</p>
                <h1>React Native & Stylesheet</h1>
                <p class="team__desc">
                    This App was built using React Native, Expo and Stylesheet. Amazing Smooth Ui and FlatList. 
                </p>
            </div>
            <div class="team__text animate-loc">
                <p class="topline animate-loc">Anime Manga App</p>
                <h1>What did i learn from this build?</h1>
                <p class="team__desc animate-loc">
                    This build taught me how to build an actual App, also the fact that it can work on both Android and Ios makes me more excited to work more aggresively on React Native.
                </p>
            </div>
            <div class="team__card ">
                {/* <p>Airbnb</p> */}
                <img src="../../images/book.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>Kerela</p> */}
                <img src="../../images/book2.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>France</p> */}
                <img src="../../images/book3.jpg" loading="lazy" alt="" class="team__img" />
            </div>
            <div class="team__card ">
                {/* <p>React Js Build</p> */}
                <img src="../../images/book4.jpg" loading="lazy" alt="" class="team__img" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default Anime
