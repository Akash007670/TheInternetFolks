import React from "react";
import Workingperson from "../assets/images/illustration-working.svg";

import {
  Description,
  Heading,
  Para,
  Person,
  BtnWrapper,
  Button,
  ContentWrapper,
} from "../GetStarted/GetStartedElement";

const Start = () => {
  return (
    <>
      <Description>
        <ContentWrapper>
          <Heading>More than just shorter links</Heading>
          <Para>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Para>
          <BtnWrapper>
            <Button to="Signup">Get Started</Button>
          </BtnWrapper>
        </ContentWrapper>
        <Person>
          <img src={Workingperson} alt="working-person" />
        </Person>
      </Description>
    </>
  );
};

export default Start;
