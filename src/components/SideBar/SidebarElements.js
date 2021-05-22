import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 93%;
  height: 90%;
  background-color: #3b3054;
  display: grid;
  align-items: center;
  top: 1rem;
  left: 1.2rem;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  font-weight : bold;
  border-radius : 12px;
  margin-bottom : 10px;
  opacity : ${({isOpen}) => (isOpen ? '100%' : '0%')};
  top : ${({isOpen}) => (isOpen ? '15%' : '-100%')};
`;

export const CloseIcon = styled(FaBars)`
  color: gray;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: black;
`;

export const SidebarMenu = styled.ul`
display : grid;
grid-template-columns : 1fr;
grid-template-rows : repeat(5,50px);
text-align : center;

@media screen and (max-width : 480px) {
    grid-template-rows : repeat(5,70px);
}
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBtnWrap1 = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBtnWrap2 = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute1 = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration : none;

  &:hover {
      transition :  all 0.2s ease-in-out;
      color : white;
  }

  @media screen and (max-width : 760px) {
    padding : 8px;
  }
`;

export const SidebarRoute2 = styled(LinkR)`
  border-radius: 50px;
  background-color: #2acfcf; 
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration : none;
  margin-bottom : 60px;

  &:hover {
      transition :  all 0.2s ease-in-out;   
  }
`;
