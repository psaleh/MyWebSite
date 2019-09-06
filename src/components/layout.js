import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

//import styled from 'styled-components'
import Header from "./header"
import Footer from './footer'

const MyMain = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 
    "hero hero hero hero" 
    "words1 pic1 words2 pic2" 
    "pic3 words3 pic4 words4";
  background-color: pink;

  @media(max-width: 768px) {
    grid-template-areas: 
      "hero hero" 
      "words1 pic1" 
      "pic2 words2";
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <MyMain>{children}</MyMain>
        <Footer /> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
