import React from 'react'
import { SidebarContainer,
         Icon,
         CloseIcon,
         SidebarWrapper,
         SideBtnWrap,
         SidebarRoute,
         SidebarMenu,
         SidebarLink
         } from "./SidebarElement";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/playground' onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Resume</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Linkedin</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Dribble</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Let's Connect</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar;
