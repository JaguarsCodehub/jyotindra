import React,{useState} from 'react'
import "./index.css"
import { ArrowForward,ArrowRight } from './ProjectElements'

const Projects = () => {


    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div>
           
            <section className="projects">
                <div class="container">
                <h1 class="section-heading" data-outline="Projects">Recent Projects</h1>
                <div class="all-items">
                    <div class="item">
                    <div class="left">
                        <div class="img">
                        <img src=".../../images/airbnb.png" alt="" />
                        </div>
                    </div>
                    <div class="right">
                        <h2 class="project-title">Airbnb Clone</h2>
                        <h3 class="project-sub-title">Travel to London and book flats now.</h3>
                        <p class="project-desc">I made this application for a USA customer. This application is truly Amazing. Here
                        you can chat with your friend
                        constantly inside a secure environment and there will be no information reserved after the end of the
                        session.</p>
                        <div class="buttons">
                        {/* <a href="#" class="primary-btn">View Presentation</a> */}
                        <a href="#" class="primary-btn outline external-link"> <span>Don't miss this Presentation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        </div>

                    </div>
                    </div>
                    <div class="item">
                    <div class="left">
                        <div class="img">
                        <img src=".../../images/netflix.png" alt="" />
                        </div>
                    </div>
                    <div class="right">
                        <h2 class="project-title">Netflix Clone 
                        </h2>
                        <h3 class="project-sub-title">This build is for Televisons and Laptops
                        </h3>
                        <p class="project-desc">Hotel zaman is one of the famous hotel in Chittagong. We created their website. The
                        client wanted a clean and smooth
                        design which I was able to provide at the end of the project.</p>
                        <div class="buttons">
                        <a href="#" class="primary-btn outline external-link"> <span>Don't miss this Presentation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div class="item">
                    <div class="left">
                        <div class="img">
                        <img src=".../../images/book.jpg" alt="" />
                        </div>
                    </div>
                    <div class="right">
                        <h2 class="project-title">Native Anime App</h2>
                        <h3 class="project-sub-title">React Native app for android & ios</h3>
                        <p class="project-desc">Piranz is one of the famous music composer in UAE. The challenge was to keep the
                        music environment in the web. It was
                        hard but in the end
                        we provided a good quality website that satisfied the client.</p>
                        <div class="buttons">
                        <a href="#" class="primary-btn outline external-link"> <span>Don't miss this Presentation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div class="item">
                    <div class="left">
                        <div class="img">
                        <img src=".../../images/disnep2.png" alt="" />
                        </div>
                    </div>
                    <div class="right">
                        <h2 class="project-title">Disnep Hotstar clone</h2>
                        <h3 class="project-sub-title">A mobile friendly website</h3>
                        <p class="project-desc">Piranz is one of the famous music composer in UAE. The challenge was to keep the
                        music environment in the web. It was
                        hard but in the end
                        we provided a good quality website that satisfied the client.</p>
                        <div class="buttons">
                        <a href="#" class="primary-btn outline external-link"> <span>Don't miss this Presentation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="last-wrapper">
                        <h1>Wanna know more about me?</h1>
                    </div>
                    <div className="button-wrapper">
                        <button 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            >Dive in {hover ? <ArrowForward /> : <ArrowRight />}
                        </button>
                    </div>
                </div>
                </div>
                
            </section>
            
        </div>
    )
}

export default Projects
