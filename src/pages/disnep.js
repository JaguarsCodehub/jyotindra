import React,{useState} from 'react'
import Disnep from '../components/Disnep';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DisnepPage = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Disnep />
            <Footer />
        </div>
    )
}

export default DisnepPage
