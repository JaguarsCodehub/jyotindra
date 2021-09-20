import React from 'react'

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink } from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Projects</FooterLinkTitle>
                                <FooterLink to="/signin">Netflix</FooterLink>
                                <FooterLink to="/signin">Hotstar</FooterLink>
                                <FooterLink to="/signin">Anime Mobile App</FooterLink>
                                <FooterLink to="/signin">Animated Mobile App</FooterLink>
                                <FooterLink to="/signin">Finance Mobile App</FooterLink>
                                <FooterLink to="/signin">Airbnb</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Credentials</FooterLinkTitle>
                                <FooterLink to="/signin">Resume</FooterLink>
                                <FooterLink to="/signin">Portfolio</FooterLink>
                                
                        </FooterLinkItems>    
                           
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Tech I Use</FooterLinkTitle>
                                <FooterLink to="/signin">React</FooterLink>
                                <FooterLink to="/signin">Styled Components</FooterLink>
                                <FooterLink to="/signin">React Native</FooterLink>
                                <FooterLink to="/signin">Figma</FooterLink>
                                <FooterLink to="/signin">Adobe XD</FooterLink>
                                <FooterLink to="/signin">React Hooks</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Know Me !</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">LinkedIn</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">Dribbble</FooterLink>
                                {/* <FooterLink to="/signin">Sponsorship</FooterLink>  */}
                        </FooterLinkItems> 
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
