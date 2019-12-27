import React from "react"
import styled from "styled-components"

// Styled Components
const RootContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const HeroText = styled.h1`
  transition: font-size 1s;
  font-size: 12em;
  ${props => props.theme.breakpoints.md} {
    font-size: 20em;
  }
`

const Dot = styled(HeroText)`
  position: absolute;
  right: -0.2em;
  color: var(--accent);
`

const HomeHero = () => (
  <RootContainer>
    <HeroText>ZC</HeroText>
    <Dot>.</Dot>
  </RootContainer>
)

export default HomeHero
