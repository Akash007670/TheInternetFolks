import React from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

import {
  FooterContainer,
  Background,
  MainFooter,
  Btn,
  Head,
  Logo,
  FooterItems,
  FooterHead,
  FooterMenu1,
  FooterMenu2,
  FooterMenu3,
  FooterList,
  FooterLinks,
  FaceBookLogo,
  TwitterLogo,
  PinterestLogo,
  InstaLogo,
} from "../Footer/FooterElement";
import BgBoost from "../assets/images/bg-boost-desktop.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Background>
          <img src={BgBoost} alt="bg-boost" />
        </Background>
        <Head>Boost your links today</Head>
        <Btn>Get Started</Btn>
      </FooterContainer>
      <MainFooter>
        <Logo>Shortly</Logo>
        <FooterItems>
          <FooterMenu1>
            <FooterHead>Features</FooterHead>
            <FooterList>Link Shortning</FooterList>
            <FooterList>Branded Links</FooterList>
            <FooterList>Analytics</FooterList>
          </FooterMenu1>
          <FooterMenu2>
            <FooterHead>Resources</FooterHead>
            <FooterList>Blog</FooterList>
            <FooterList>Developers</FooterList>
            <FooterList>Support</FooterList>
          </FooterMenu2>
          <FooterMenu3>
            <FooterHead>Company</FooterHead>
            <FooterList>About</FooterList>
            <FooterList>Our Team</FooterList>
            <FooterList>Carrers</FooterList>
            <FooterList>Contacts</FooterList>
          </FooterMenu3>
        </FooterItems>
        <FooterLinks>
          <FaceBookLogo>
            <img src={Facebook} alt="facbook" />
          </FaceBookLogo>
          <TwitterLogo>
            <img src={Twitter} alt="twitter" />
          </TwitterLogo>
          <PinterestLogo>
            <img src={Pinterest} alt="pinterest" />
          </PinterestLogo>
          <InstaLogo>
            <img src={Instagram} alt="instagram" />
          </InstaLogo>
        </FooterLinks>
      </MainFooter>
    </>
  );
};

export default Footer;
