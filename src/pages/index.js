import React from "react"
//import { Link } from "gatsby"
import img from '../images/nickel-foam.png';

import Layout from "../components/layout"
import styled from 'styled-components'

const BackImage = styled.div`
  height: 400px;
  background-image: url(${img});
  grid-area: hero;
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

const TextBoxDiv = styled.div`
  background-color: #C5C6C7;
  height: 320px;
  width: 320px;
  grid-area: ${props => props.area};
  border-radius: 30px;
`
const PhotoBoxDiv = styled.div`
  background-color: pink;
  height: 320px;
  width: 320px;
  grid-area: ${props => props.area};
  border-radius: 30px;
`
const Image = styled.img`
  height: 300px;
  width: 300px;
  padding: 10px;
  border-radius: 30px;

`



const IndexPage = () => (
  <Layout>
      <BackImage>
        <TransOver>
          Hello
        </TransOver>
      </BackImage>
      <TextBoxDiv area="words1">
        One
      </TextBoxDiv>
      <PhotoBoxDiv area="pic1">
        <Image src='https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/Anna-Ivanova-Beetroot-soup-with-mint-chia-flax-pumpkin-seeds.jpg' />
      </PhotoBoxDiv>
      <TextBoxDiv area="words2">
        Three
      </TextBoxDiv>
      <PhotoBoxDiv area="pic2">
        Four
      </PhotoBoxDiv>
      <TextBoxDiv area="words3">
        Five
      </TextBoxDiv>
      <PhotoBoxDiv area="pic3">
        Six
      </PhotoBoxDiv>
      <TextBoxDiv area="words4">
        Seven
      </TextBoxDiv>
      <PhotoBoxDiv area="pic4">
        Eight
      </PhotoBoxDiv>
  </Layout>
)

export default IndexPage
