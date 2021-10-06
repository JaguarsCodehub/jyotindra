import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

const ProcessPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Process />
            <Footer />
        </div>
    )
}

export default ProcessPage
