import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink  } from "./NavbarElements";



const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav]  = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  
  },[]);

  const toggleHome = () => {
    scroll.scrollToTop();

  };
  
    






    return (

        <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}> Jyotindra KT </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks 
                      to="/playground"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      >Projects</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                    >Resume</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                    >Linkedin</NavLinks>
                  </NavItem>
                  
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/connect">Let's Connect</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
       
    )
}

export default Navbar;
