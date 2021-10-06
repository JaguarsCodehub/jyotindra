import React,{useState} from 'react'
import Hero2 from '../components/Hero2'
import Feature from '../components/Hero3'
import Hero4 from '../components/Hero4'
import MainHero from '../components/MainHero'
// import Hero5 from '../components/Hero5'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar';




const Home = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <MainHero />
            <Hero2 />
            <Services />
            <Feature />
            <Hero4 />
            <Projects />
            {/* <Hero5 /> */}
        </>
    )
}

export default Home
