import React from "react";
import styled from "styled-components";
import ExpandingBox from "../components/ExpandingBox";

const Wrapper = styled.div`
  width: 60ch;
  margin: auto;
`;

const Portfolio: React.FC<{}> = () => (
  <Wrapper>
    <ExpandingBox></ExpandingBox>
  </Wrapper>
);

export default Portfolio;
