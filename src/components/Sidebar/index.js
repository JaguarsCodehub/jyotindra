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
                <SidebarLink to='process' onClick={toggle}>Process</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/connect">Let's Connect</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar;
