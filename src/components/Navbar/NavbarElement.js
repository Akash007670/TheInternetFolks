import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: sticky;
  margin-top: 2rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Navbarcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color : blue;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

export const Navlogo = styled(LinkR)`
  justify-self: start;
  display: flex;
  cursor: pointer;
  font-size: 18px;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width : 760px) {
      position : absolute;
      top : 20px;
      left : 15px;
      transform : tranlate(25%,90%)
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width : 45vw;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight : bold;
  font-size : 18px;


  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const NavBtn1 = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width : 760px) {
    display: none;
  }
  `;
  
  export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;
  
  
  @media screen and (max-width : 760px) {
    display: none;
  }
  `;
  export const NavBtnLink1 = styled(LinkR)`
  border-radius : 50px;
  color : #bfbfbf;
  white-space : nowrap;
  padding : 10px 22px;
  font-size : 18px;
  cursor : pointer;
  text-decoration : none;
  &:hover{
    color : black;
  }
  `;


export const NavBtnLink2 = styled(LinkR)`
border-radius : 50px;
color : white;
background-color : #2acfcf;
white-space : nowrap;
padding : 10px 30px;
font-size : 18px;
cursor : pointer;
text-decoration : none;
`;
