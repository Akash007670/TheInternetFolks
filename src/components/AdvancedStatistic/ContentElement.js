import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  position: relative;
  background-color: #eff1f7;
  /* border: 2px solid red; */
  height: 70vh;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 850px) {
    height: 130vh;
    padding-top: 1rem;
  }
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  /* border: 2px solid green; */
  padding: 30px;
  width: 90%;
  max-width: 1500px;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 850px) {
    display: flex;
    height: 100%;
    padding: 0px;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid blueviolet; */
  margin-bottom: 4rem;
  @media screen and (max-width: 850px) {
    text-align: center;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 850px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Para = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #737373a1;
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    font-weight: 400;
  }
`;

// <---------->

export const CardsWrapper = styled.div`
  display: flex;
  /* border: 2px solid black; */
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: 100%;
    padding-bottom: 2rem;
  }
`;

export const Card1 = styled.div`
  display: flex;
  position: relative;
  /* border: 2px solid red; */
  flex-direction: column;
  background-color: white;
  justify-content: space-evenly;
  cursor: pointer;
  padding: 1.5rem;
  height: 70%;
  width: 30%;
  z-index: 20;
  border-radius: 8px;
  transform: translateY(-3rem);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 23%);
    /* transform: rotate(-1deg) translateY(10px) scale(1); */
  }
  @media screen and (max-width: 850px) {
    display: flex;
    height: 28%;
    width: 100%;
    align-items: center;
    text-align: center;
    transform: translateY(0rem);
  }
`;
export const Card2 = styled.div`
  position: relative;
  display: flex;
  /* border: 2px solid blue; */
  cursor: pointer;
  flex-direction: column;
  background-color: white;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: 1.5rem;
  height: 70%;
  width: 30%;
  z-index: 20;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 23%);
    transform: rotate(-1deg) translateY(-1px) scale(1);
  }
  @media screen and (max-width: 850px) {
    display: flex;
    height: 28%;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
export const Card3 = styled.div`
  position: relative;
  display: flex;
  /* border: 2px solid green; */
  flex-direction: column;
  background-color: white;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: 1.5rem;
  height: 70%;
  width: 30%;
  z-index: 20;
  transform: translateY(3rem);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 23%);
    /* transform: rotate(-1deg) translateY(-1px) scale(1); */
  }
  @media screen and (max-width: 850px) {
    display: flex;
    height: 28%;
    width: 100%;
    align-items: center;
    text-align: center;
    transform: translateY(-0rem);
  }
`;

export const Heading1 = styled.h3`
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  @media screen and (max-width: 850px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.3rem;
  }
`;

export const Para1 = styled.p`
  display: flex;
  font-size: 1.2rem;
  color: #bfbfbf;
  @media screen and (max-width: 850px) {
    display: flex;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3054;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  position: absolute;
  top: -3rem;
  background-size: cover;
  z-index: 100;

  @media screen and (max-width: 850px) {
    top: -3rem;
  }
`;

export const Line = styled.div`
  display: flex;
  position: absolute;
  height: 5px;
  width: 60%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: #2acfcf;
  z-index: 10;

  @media screen and (max-width: 850px) {
    transform: rotate(90deg);
    width: 110%;
    height: 5px;
    margin-left: 0%;
    top: 50%;
  }
`;
