import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #3b3054;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "10%" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  transform: translateY(10rem);
  /* border: 2px solid red; */
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 50px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 70px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #bfbfbf;
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
  margin-bottom: 1rem;
  text-decoration: none;
`;

export const SidebarRoute2 = styled(LinkR)`
  border-radius: 50px;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 16px 64px;
  width: 60%;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    background-color: #29c7c7;
  }
`;
