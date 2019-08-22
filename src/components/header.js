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
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #1f2833;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  flex: auto
`;
const NavRight = styled.div`
  width: auto;
  text-align: right;
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
