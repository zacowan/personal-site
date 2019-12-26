import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Styled Components
const RootContainer = styled.div`
  width: 100%;
  height: 280px;
  padding: 20px;
  background-color: var(--white);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  -webkit-box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  cursor: default;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

const Title = styled.h5`
  font-size: 1.35em;
  font-family: Glacial Indifference;
`

const Subtitle = styled.h6`
  font-size: 1.15em;
  font-family: Glacial Indifference;
  font-weight: normal;
`

const Content = styled.p`
  font-size: 0.8em;
`

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--dark);
  font-family: Glacial Indifference;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  margin: 0 0 0 auto;
  border-radius: 4px;
  font-size: 0.8em;
  transition: transform 0.2s, background-color 0.2s;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    -webkit-transform: translate(0px, -0.25em);
    transform: translate(0px, -0.25em);
    background-color: var(--black);
  }
  &:active {
    background-color: var(--dark);
  }
`

const Card = ({ title, subtitle, content }) => (
  <RootContainer>
    <ContentContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Content>{content}</Content>
    </ContentContainer>
    <Button>Insight</Button>
  </RootContainer>
)

export default Card
