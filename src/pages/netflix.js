import React,{useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Netflix from '../components/Netflix'
import Sidebar from '../components/Sidebar'

const NetflixPage = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Netflix />
            <Footer />
        </div>
    )
}

export default NetflixPage
