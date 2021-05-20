import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap1,
  SideBtnWrap2,
  SidebarRoute1,
  SidebarRoute2,
} from "../SideBar/SidebarElements";

const Sidebar = ({isOpen , mytoggleHandler}) => {
  return (
    <>
      <SidebarContainer isOpen = {isOpen} onClick = {mytoggleHandler}>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="Features" onClick = {mytoggleHandler}>Features</SidebarLink>
            <SidebarLink to="Pricing" onClick = {mytoggleHandler}>Pricing</SidebarLink>
            <SidebarLink to="Resources" onClick = {mytoggleHandler}>Resources</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap1>
            <SidebarRoute1 to="Login">Login</SidebarRoute1>
          </SideBtnWrap1>
          <SideBtnWrap2>
            <SidebarRoute2 to="Signup">Sign Up</SidebarRoute2>
          </SideBtnWrap2>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
