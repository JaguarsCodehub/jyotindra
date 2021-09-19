import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#fff' : '#fff')};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index:100;
  transition:  0.2s ease-in-out;
  opacity: 0.95;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width:100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;


export const MobileIcon = styled.div`
  display: none;



  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
    

  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;


  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 0.9rem;
  /* font-weight: bold; */
  cursor: pointer;


  
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px){
    display: none;
  }
`;


export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  font-weight: semi-bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: rgb(90, 72, 255);
    color: #fff;
  }
`;