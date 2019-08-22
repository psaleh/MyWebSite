import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components'

const MyDiv = styled.div`
  background-color: #1f2833;
  padding-left: 5px;
  color: #66FCF1;
  text-align: center;
  font-size: 150px;
  
`
const MyDiv2 = styled.div`
  background-color: #C5C6C7;
  padding-left: 5px;
`



const IndexPage = () => (
  <Layout>
    <section>
      <MyDiv>
        Hello
      </MyDiv>
    </section>
    <section>
      <MyDiv2>
        Hello
      </MyDiv2>
    </section>
  </Layout>
)

export default IndexPage
