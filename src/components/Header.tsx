import React from "react";
import { NavLink } from "react-router-dom";
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
  .active {
    background-color: #2279bf;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      color: white;
      display: inline;
    }
  }
`;

const NavigationLink = styled(NavLink)`
  &,
  &:hover,
  &:active,
  &:visited {
    color: white;
  }
  &:hover {
    background-color: #14456e;
    color: #ccc;
  }
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  width: 20%;
  text-align: center;
  display: inline-block;
`;

const Header: React.FC<{}> = ({ children }) => (
  <Wrapper>
    <Inner>{children}</Inner>
    <Navigation>
      <Inner>
        <ul>
          <li>
            <NavigationLink exact to="/" activeClassName="active">
              Portfolio
            </NavigationLink>
          </li>
          <li>
            <NavigationLink exact to="/resume" activeClassName="active">
              Resume/CV
            </NavigationLink>
          </li>
        </ul>
      </Inner>
    </Navigation>
  </Wrapper>
);

export default Header;
