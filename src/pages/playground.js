import React,{useState} from 'react'
import Playground from '../components/Playground';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'

const PlaygroundPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

        console.log("sidebar is open");
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Playground />
            <Footer />
        </div>
    )
}

export default PlaygroundPage
