import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components'

const MyDiv = styled.div`
  background-color: green;
`



const IndexPage = () => (
  <Layout>
    <section>
      <MyDiv>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
      </MyDiv>

    </section>
  </Layout>
)

export default IndexPage
