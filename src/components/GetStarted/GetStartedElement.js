import styled from "styled-components";

export const Description = styled.div`
  z-index: 3;
  width: 100%;
  max-width: 1600px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 13%;
  margin-right: 1rem;
  width: auto;
  @media screen and (max-width: 760px) {
    display: flex;
    order: 2;
  }
`;
export const ContentWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  @media screen and (max-width: 760px) {
    display: flex;
    height: fit-content;
    margin-bottom: 2rem;
    order: 1;
  }
`;

export const Heading = styled.h1`
  text-align: start;
  color: black;
  font-size: 48px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;

export const Para = styled.p`
  text-align: start;
  font-size: 18px;
  // background-color : yellow;
  color: #bfbfbf;
  max-width: auto;

  @media screen and (max-width: 760px) {
    font-size: 10px;
    text-align: center;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    align-items: center;
    padding-bottom: 22px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
`;
export const Person = styled.div`
  position: relative;

  @media screen and (max-width: 760px) {
    & img {
      position: relative;
      left: 3rem;
      height: 90%;
      width: 90%;
    }
  }
`;
