import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  margin-top: 30rem;
  margin-left: 9rem;
  margin-right: 12rem;
  background-color: #3b3054;
  position: sticky;
  border-radius: 20px;
  margin-bottom: 2rem;
  z-index : 999;

  @media screen and (max-width: 760px) {
    display: flex;
    flex: 100;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    position: absolute;
    left: -125px;
    margin-bottom: 2rem;
    z-index : 0;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  font-size: 18px;
  width: 668px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    display: flex;
    width: 90%;
    left: 2px;
    top: 1rem;
    flex: 100;
    order: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2.3rem;
  right: 2rem;
  @media screen and (max-width: 760px) {
    display: flex;
    width: 100%;
    flex: 100;
    order: 2;
    top: 100px;
    left: 11px;
    padding-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
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
  @media screen and (max-width: 760px) {
    display: flex;
    height: 40px;
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

export const LinkList = styled.div`
  display: flex;
  background-color: #EFF1F7;
  border-radius: 8px;
  margin-left: 9rem;
  margin-right: 12rem;
  margin-bottom: 2rem;
  height: 60px;
  align-items: center;
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
  right: 14.1rem;
  text-decoration: none;
//   display: none;
  // @media screen and (max-width : 760px) {
  //     display : flex;
  //     height : 40px;
  //     width : 240px;
  //     align-items : center;
  //     justify-content : center;
  // }
`;

export const CopiedBtn = styled.button`
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
  text-decoration: none;
  right: 14.1rem;
  // display : none;


  // @media screen and (max-width : 760px) {
  //     display : flex;
  //     height : 40px;
  //     width : 240px;
  //     align-items : center;
  //     justify-content : center;
  // }
`;
export const Paragraph = styled.p`
margin-left: 2em;
`;