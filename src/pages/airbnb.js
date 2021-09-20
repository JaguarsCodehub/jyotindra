import React from 'react'
import Airbnb from '../components/Airbnb'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const airbnb = () => {
    return (
        <div>
            <Navbar />
            <Airbnb />
            <Footer />
        </div>
    )
}

export default airbnb
