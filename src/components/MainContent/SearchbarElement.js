import styled from "styled-components";

export const Flex = styled.div`
  background-color: #eff1f7;
  border: 2px solid #eff1f7;
  position: relative;
  width: 100%;
  height: 30vh;
`;

export const Background = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1500px;
  top: -30%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 10rem;
  background-color: #3b3054;
  border-radius: 12px;

  @media screen and (max-width: 850px) {
    display: flex;
    width: 90%;
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    width: 90%;
    align-items: center;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  font-size: 20px;
  height: 40%;
  width: 80%;
  max-width: 65%;
  border-radius: 8px;
  outline: none;
  @media screen and (max-width: 1200px) {
    width: 80%;
    max-width: 65%;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 90%;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 15%;
  height: 40%;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #2ac3c3;
  }
  @media screen and (max-width: 1200px) {
    width: 15%;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 90%;
  }
`;

export const LinkList = styled.div`
  display: flex;
  background-color: white;
  border: 2px solid green;
  margin: 7rem auto 2rem;
  width: 90%;
  max-width: 1500px;
  align-items: center;
  height: 4rem;
  padding: 30px;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 90%;
    margin: 7rem auto;
    z-index: 0;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 90%;
    height: 10rem;
    margin: 7rem auto 2rem;
    flex-direction: column;
    padding: 10px;
    z-index: 0;
  }
`;

export const GivenLink = styled.text`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  color: #444242;
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    font-weight: 500;
    width: 50%;
  }
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    border-bottom: 2px solid #e7e6e6;
    font-weight: 500;
    width: 100%;
    height: 30%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 30%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 45%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    height: 70%;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #2acfcf;
  /* border: 2px solid red; */
  @media screen and (max-width: 850px) {
    width: 100%;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const CopyBtn = styled.button`
  display: flex;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #2ac3c3;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    justify-content: center;
  }
`;
