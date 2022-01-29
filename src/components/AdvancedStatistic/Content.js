import React from "react";
import BrandRecognition from "../assets/images/icon-brand-recognition.svg";
import DetailedRecord from "../assets/images/icon-detailed-records.svg";
import FullyCustom from "../assets/images/icon-fully-customizable.svg";
import {
  Div,
  Flex,
  Heading,
  Para,
  SubTitleWrapper,
  CardsWrapper,
  Card1,
  Card2,
  Card3,
  Heading1,
  Para1,
  Circle,
  Line,
} from "../AdvancedStatistic/ContentElement";

const Content = () => {
  return (
    <Flex>
      <Div>
        <SubTitleWrapper>
          <Heading>Advanced Statistics</Heading>
          <Para>
            Track how your links are working performing accross the web with our
            advance statistics dashboard.
          </Para>
        </SubTitleWrapper>
        <CardsWrapper>
          <Card1>
            <Circle>
              <img src={BrandRecognition} alt="brand-recognition" />
            </Circle>
            <Heading1>Brand Recognition</Heading1>
            <Para1>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </Para1>
          </Card1>
          <Line />
          <Card2>
            <Circle>
              <img src={DetailedRecord} alt="detailed-record" />
            </Circle>
            <Heading1>Detailed Records</Heading1>
            <Para1>
              Gain insights into who is clicking your links.Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Para1>
          </Card2>

          <Card3>
            <Circle>
              <img src={FullyCustom} alt="fully-custom" />
            </Circle>
            <Heading1>Fully Customizable</Heading1>
            <Para1>
              Improve brand awareness and content discoverability through
              customizable links.Supercharging audience engagement.
            </Para1>
          </Card3>
        </CardsWrapper>
      </Div>
    </Flex>
  );
};

export default Content;
