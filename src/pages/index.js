import React from "react"
//import { Link } from "gatsby"
import img from '../images/nickel-foam.png';

import Layout from "../components/layout"
import styled from 'styled-components'

const BackImage = styled.div`
  height: 400px;
  background-image: url(${img});
`
const TransOver = styled.div`
  background-color: #1F2833;
  opacity: 0.95;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #66FCF1;
  font-size: 96px;
`

const MyDiv2 = styled.div`
  background-color: #C5C6C7;
  padding-left: 5px;
  height: 1000px;
`



const IndexPage = () => (
  <Layout>
    <section>
      <BackImage>
        <TransOver>
          Hello
        </TransOver>
      </BackImage>
    </section>
    <section>
      <MyDiv2>
        Hello
      </MyDiv2>
    </section>
  </Layout>
)

export default IndexPage
