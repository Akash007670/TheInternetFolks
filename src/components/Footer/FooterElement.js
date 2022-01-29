import styled from "styled-components";
import BgBoost from "../assets/images/bg-boost-desktop.svg";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    display: flex;
    height: 130vh;
  }
`;

export const FooterTitle = styled.div`
  display: flex;
  width: 100%;
  background-color: #3b3054;
  background-image: url(${BgBoost});
  background-repeat: no-repeat;
  background-size: cover;
  height: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    display: flex;
    height: 20%;
  }
`;

export const Head = styled.h2`
  display: flex;
  /* border: 2px solid red; */
  color: white;
  font-size: 3rem;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 1rem;
  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const Btn = styled.button`
  display: flex;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  padding: 13px 40px;
  border-radius: 30px;
  &:hover {
    background-color: #2ac3c3;
  }
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

// <------------------->

export const MainFooter = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  background-color: #232127;
  justify-content: space-evenly;
  padding: 4rem;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: 80%;
    align-items: center;
    justify-content: center;
    padding: 0px;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  /* border: 2px solid red; */
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-weight: bold;
  @media screen and (max-width: 850px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  /* border: 2px solid green; */
  width: 50%;
  justify-content: space-evenly;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }
`;

export const FooterHead = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

export const FooterMenu1 = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  /* border: 2px solid yellow; */
  align-items: center;
  height: 100%;
  width: 30%;
  @media screen and (max-width: 850px) {
    display: flex;
    width: 100%;
  }
`;

export const FooterList = styled.li`
  font-size: 1rem;
  margin: 10px;
  color: #bfbfbf;
  cursor: pointer;
  &:hover {
    color: #2ac3c3;
  }
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 20%;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    display: flex;
    width: 50%;
  }
`;

export const LinksLogo = styled.div`
  display: flex;
  height: 34px;
  width: 34px;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    display: flex;
  }
  @media screen and (max-width: 1200px) {
    height: 40px;
    width: 40px;
  }
`;
