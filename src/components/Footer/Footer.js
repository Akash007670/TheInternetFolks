import React from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

import {
  FooterTitle,
  FooterContainer,
  MainFooter,
  Btn,
  Head,
  Logo,
  FooterItems,
  FooterHead,
  FooterMenu1,
  FooterList,
  FooterLinks,
  LinksLogo,
} from "../Footer/FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>
        <Head>Boost your links today</Head>
        <Btn>Get Started</Btn>
      </FooterTitle>
      <MainFooter>
        <Logo>Shortly</Logo>
        <FooterItems>
          <FooterMenu1>
            <FooterHead>Features</FooterHead>
            <FooterList>Link Shortning</FooterList>
            <FooterList>Branded Links</FooterList>
            <FooterList>Analytics</FooterList>
          </FooterMenu1>
          <FooterMenu1>
            <FooterHead>Resources</FooterHead>
            <FooterList>Blog</FooterList>
            <FooterList>Developers</FooterList>
            <FooterList>Support</FooterList>
          </FooterMenu1>
          <FooterMenu1>
            <FooterHead>Company</FooterHead>
            <FooterList>About</FooterList>
            <FooterList>Our Team</FooterList>
            <FooterList>Carrers</FooterList>
            <FooterList>Contacts</FooterList>
          </FooterMenu1>
        </FooterItems>
        <FooterLinks>
          <LinksLogo>
            <img src={Facebook} alt="facbook" />
          </LinksLogo>
          <LinksLogo>
            <img src={Twitter} alt="twitter" />
          </LinksLogo>
          <LinksLogo>
            <img src={Pinterest} alt="pinterest" />
          </LinksLogo>
          <LinksLogo>
            <img src={Instagram} alt="instagram" />
          </LinksLogo>
        </FooterLinks>
      </MainFooter>
    </FooterContainer>
  );
};

export default Footer;
