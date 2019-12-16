import React from "react";
import styled from "styled-components";
import CardTitle from "../components/CardTitle";
import ExpandingBox from "../components/ExpandingBox";

const Wrapper = styled.div`
  width: 60ch;
  margin: auto;
`;

const ScanNowBox = styled(ExpandingBox)`
  background-image: url(${require("../assets/scan-now.jpg")});
  background-size: cover;
`;

const Portfolio: React.FC<{}> = () => (
  <Wrapper>
    <ScanNowBox>
      <CardTitle>
        <h4>SCaN Now</h4>
      </CardTitle>
    </ScanNowBox>
  </Wrapper>
);

export default Portfolio;
