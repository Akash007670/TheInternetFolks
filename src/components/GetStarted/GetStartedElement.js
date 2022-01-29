import styled from "styled-components";

export const Description = styled.div`
  z-index: 3;
  width: 100%;
  height: 55vh;
  max-width: 1600px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 3rem auto 5rem;
  /* border: 2px solid red; */
  @media screen and (max-width: 850px) {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  /* border: 2px solid green; */
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding: 0 60px;
  animation: moveTop 1s ease-in-out;

  @keyframes moveTop {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    width: 100%;
    order: 2;
  }
`;
export const ContentWrapper2 = styled.div`
  display: flex;
  height: 100%;
  /* border: 2px solid blue; */
  animation: moveRightToLeft 1s ease-in-out;
  @keyframes moveRightToLeft {
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 850px) {
    display: flex;
    height: fit-content;
    margin-bottom: 2rem;
    order: 1;
    animation: moveTop 1s ease-in-out;
  }
`;

export const Heading = styled.h1`
  text-align: start;
  flex-wrap: wrap;
  color: black;
  font-size: 60px;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    text-align: start;
    font-size: 45px;
  }

  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 40px;
  }
`;

export const Para = styled.p`
  font-size: 20px;
  color: #bfbfbf;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    text-align: start;
    font-size: 15px;
  }
  @media screen and (max-width: 850px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }
  @media screen and (max-width: 850px) {
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
  font-size: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #2ac3c3;
  }
  @media screen and (max-width: 850px) {
    font-size: 18px;
  }
`;
export const Person = styled.div`
  position: relative;
  & img {
    height: auto;
    width: auto;
    background-size: cover;
  }
  @media screen and (max-width: 1200px) {
    & img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 850px) {
    & img {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
`;
