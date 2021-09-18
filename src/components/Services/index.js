import React from 'react'
// import Icon1 from 'images/svg-1.svg'
// import Icon2 from 'images/svg-1.svg'
// import Icon3 from 'images/svg-1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1 className="font-face-book">My Methodlogy</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/1.svg"}/>
                    <ServicesH2>Sketch</ServicesH2>
                    <ServicesP>I sketch out designs being in your users' shoes in order to understand their needs.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/2.svg"}/>
                    <ServicesH2>Frame</ServicesH2>
                    <ServicesP>We define together the framework of the experience and will begin to formalize the user journey.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/3.svg"}/>
                    <ServicesH2>Design</ServicesH2>
                    <ServicesP>I will design and create an interactive presentation of your UI according to your workflow of idea.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/4.svg"}/>
                    <ServicesH2>Code your design</ServicesH2>
                    <ServicesP>I will code the frontend design of the web/app using React, Tailwind CSS etc.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/5.svg"}/>
                    <ServicesH2>Debug & Test</ServicesH2>
                    <ServicesP>I will solve problems occuring in the code and test it myself on various devices.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/6.svg"}/>
                    <ServicesH2>Deploy the Code</ServicesH2>
                    <ServicesP>Once the project has been validated.You will be able to launch and promote the product.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
