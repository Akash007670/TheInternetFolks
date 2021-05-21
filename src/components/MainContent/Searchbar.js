import React from "react";
import bgshorten from "../assets/images/bg-shorten-desktop.svg";
import {
  Background,
  SearchBar,
  ButtonWrapper,
  Button,
} from "../MainContent/SearchbarElement";

const Searchbar = () => {
  return (
    <>
      <Background>
          <img src={bgshorten} alt="bg-short" height = {130} width = '100%'/>
           <SearchBar input type="text"  placeholder = "Shorten a link here..." />
          <ButtonWrapper>
            <Button to="/">Shorten It!</Button>
          </ButtonWrapper> 
      </Background>
    </>
  );
};

export default Searchbar;
