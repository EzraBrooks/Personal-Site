import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: inherit;
  color: white;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`;

const CardTitle: React.FC<{}> = ({ children }) => (
  <Background>{children}</Background>
);

export default CardTitle;
