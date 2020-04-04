import React from "react";
import styled from "styled-components";
import CardTitle from "../components/CardTitle";
import ExpandingBox from "../components/ExpandingBox";

const Wrapper = styled.div`
  width: 60ch;
  margin: auto;
  margin-top: 1rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1ch;
  }
`;

const CardSection = styled.div`
  /* margin-top: 2rem; */
`;

const Portfolio: React.FC<{}> = () => (
  <Wrapper>
    <h2>Projects</h2>
    <CardSection>
      <ExpandingBox
        expandedWidth="50vw"
        imageSrc={require("../assets/scan-now.jpg")}
        fullscreenContent={
          <>
            <h2 style={{ marginBottom: 0 }}>SCaN Now</h2>
            <p>Real-time telemetry visualization for space communications</p>
            <p>
              Space Communications and Navigation (SCaN) Now is a situational
              awareness dashboard for NASA's Near Earth Network and Space
              Network. It was inspired by a similar project at the Jet
              Propulsion Laboratory, Deep Space Network (DSN) Now, and developed
              by an agile team of software development interns.
            </p>
            <p>
              I joined the SCaN Now team at a critical point in its development,
              when it was going from being a concept outlining the possibility
              of its existence to it being a real project.
            </p>
          </>
        }
      >
        <CardTitle>
          <h4>SCaN Now</h4>
        </CardTitle>
      </ExpandingBox>
    </CardSection>
  </Wrapper>
);

export default Portfolio;
