import React,{useState} from 'react'
import Airbnb from '../components/Airbnb'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

const AirbnbPage = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Airbnb />
            <Footer />
        </div>
    )
}

export default AirbnbPage;
