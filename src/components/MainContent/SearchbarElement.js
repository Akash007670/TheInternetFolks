import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: relative;
  margin: 3rem 12.5%;
  max-width: 100%;
  height: 10rem;
  background-color: #3b3054;
  border-radius: 12px;

  & img {
    height: 155px;
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    margin-top: 1rem;
    height: 10rem;
    width: 100%;
    max-width: 95%;
    margin-bottom: 2rem;
    margin-left: 1rem;
    & img {
      height: auto;
    }
  }
`;

export const SearchBar = styled.input`
  display: flex;
  position: absolute;
  font-size: 20px;
  left: 2rem;
  top: 3rem;
  height: 40%;
  width: 80%;
  max-width: 65%;
  border-radius: 8px;
  outline: none;
  @media screen and (max-width: 760px) {
    top: 1rem;
    left: 1rem;
    font-size: 18px;
    width: 100%;
    max-width: 90%;
  }
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 16px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  margin-left: 76%;
  margin-top: 3rem;
  @media screen and (max-width: 760px) {
    top: 2.5rem;
    right: 1rem;
    font-size: 18px;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 90%;
  }
`;

export const LinkList = styled.div`
  display: flex;
  position: relative;
  background-color: #eff1f7;
  align-items: center;
  height: 4rem;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 2rem 12rem;

  @media screen and (max-width: 760px) {
    display: flex;
    position: relative;
    margin: 1rem 1rem;
    width: 100%;
    max-width: 95%;
    z-index: 0;
  }
`;

export const CopyBtn = styled.button`
  display: flex;
  position: absolute;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  right: 8rem;
  text-decoration: none;
  @media screen and (max-width: 760px) {
    right: 1rem;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  @media screen and (max-width: 760px) {
    /* justify-content: center;
    text-align: center;
    align-items: center; */
  }
`;
