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
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/svg-5.svg"}/>
                    <ServicesH2>UI Design</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall skill.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/svg-4.svg"}/>
                    <ServicesH2>Code & Debug</ServicesH2>
                    <ServicesP>You can access our course and faculties anywhere in the world by our program.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={process.env.PUBLIC_URL+"images/svg-7.svg"}/>
                    <ServicesH2>Test & Deploy</ServicesH2>
                    <ServicesP>Unlock our special membership service for 1 to 1 virtual teaching.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
