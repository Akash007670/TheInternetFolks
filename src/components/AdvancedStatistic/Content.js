import React from "react";
import BrandRecognition from "../assets/images/icon-brand-recognition.svg";
import DetailedRecord from "../assets/images/icon-detailed-records.svg";
import FullyCustom from "../assets/images/icon-fully-customizable.svg";
import {
  Div,
  Heading,
  Para,
  Modal1,
  Modal2,
  Modal3,
  Heading1,
  Heading2,
  Heading3,
  Para1,
  Para2,
  Para3,
  Circle,
  Line,
} from "../AdvancedStatistic/ContentElement";

const Content = () => {
  return (
    <>
      <Div>
        <Heading>Advanced Statistics</Heading>
        <Para>
          Track how your links are working performing accross the web with our
          advance statistics dashboard.
        </Para>
        <Modal1>
          <Heading1>Brand Recognition</Heading1>
          <Circle>
          <img src={BrandRecognition} alt="brand-recognition" height={45} />
          </Circle>
          <Para1>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </Para1>
        </Modal1>
        <Line />
        <Modal2>
          <Heading2>Detailed Records</Heading2>
          <Circle>
          <img src={DetailedRecord} alt="detailed-record" height={45} />
            </Circle>
          <Para2>
            Gain insights into who is clicking your links.Knowing when and where
            people engage with your content helps inform better decisions.
          </Para2>
        </Modal2>
        <Modal3>
          <Circle>
            <img src={FullyCustom} alt="fully-custom" height={45} />
          </Circle>
          <Heading3>Fully Customizable</Heading3>
          <Para3>
            Improve brand awareness and content discoverability through
            customizable links.Supercharging audience engagement.
          </Para3>
        </Modal3>
      </Div>
    </>
  );
};

export default Content;
