import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components'
import GlobalStyle from './globalStyles'


const StyledLink = styled(props => <Link {...props} />)`
  color: #66FCF1;
  text-decoration: none;
  padding-right: 20px;
`;

const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #1f2833;
  z-index: 1;
  position: fixed;
  width: 100%;
`;

const NavLeft = styled.div`
  align-content: left;
  align-items: center;
  margin-left: 20px;
`;
const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;


const Header = ({ siteTitle }) => (
  <Container>
    <GlobalStyle />
    <NavLeft>    
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
    </NavLeft>
    <NavRight>
      <StyledLink to="about">
        About Me
      </StyledLink>
      <StyledLink to="recipes">
        Recipes
      </StyledLink>
      <StyledLink to="photos">
        Photos
      </StyledLink>
      <StyledLink to="contact">
        Contact
      </StyledLink>
    </NavRight>
  </Container>
)

export default Header
