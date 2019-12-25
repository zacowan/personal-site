import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CTAButton from "../components/cta-button"

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  user-select: none;
  cursor: default;
`

const CTAContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`

const HeroText = styled.h1`
  font-size: 20em;
`

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  text-transform: uppercase;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <HeroContainer>
        <HeroText>ZC.</HeroText>
        <HeroSubtitle>Software Engineer</HeroSubtitle>
        <HeroSubtitle>Coming soon</HeroSubtitle>
      </HeroContainer>
      <CTAContainer>
        <CTAButton></CTAButton>
      </CTAContainer>
    </Container>
  </Layout>
)

export default IndexPage
