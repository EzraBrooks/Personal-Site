import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: inherit;
  background-color: #2e95e8;
  color: white;
  padding-top: 1rem;
`;

const Inner = styled.div`
  width: 60ch;
  margin: auto;
`;

const Navigation = styled.div`
  width: inherit;
  background-color: #13578f;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      width: 20%;
      text-align: center;
      display: inline-block;
      :hover {
        background-color: #14456e;
      }
    }
  }
`;

const Header: React.FC<{}> = ({ children }) => (
  <Wrapper>
    <Inner>{children}</Inner>
    <Navigation>
      <Inner>
        <ul>
          <li>test</li>
          <li>test2</li>
        </ul>
      </Inner>
    </Navigation>
  </Wrapper>
);

export default Header;
