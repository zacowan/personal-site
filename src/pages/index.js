import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTAButton from "../components/cta-button"
import HomeHero from "../components/home-hero"
import BondOverlay from "../components/bond-overlay"

// Styled Components
const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`

const SubHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  user-select: none;
  cursor: default;
`

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  text-transform: uppercase;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <SubHero>
        <HomeHero />
        <HeroSubtitle>Software Engineer</HeroSubtitle>
        <HeroSubtitle>Coming soon</HeroSubtitle>
      </SubHero>
      <BondOverlay />
      <SubHero>
        <CTAButton></CTAButton>
      </SubHero>
    </Hero>
  </Layout>
)

export default IndexPage
