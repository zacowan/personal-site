import React from "react"
import styled from "styled-components"

import Layout, { TextLayout } from "../components/layout"
import SEO from "../components/seo"
import CTAButton from "../components/cta-button"
import HomeHero from "../components/home-hero"
import BondOverlay from "../components/bond-overlay"
import AboutIllustration from "../components/about-illustration"
import Card from "../components/card"

// Styled Components
const Hero = styled.div`
  display: grid;
  grid-template-columns: 1 auto;
  grid-gap: 100px;
  justify-items: center;
  align-items: center;
  ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, auto);
  }
  min-height: 100vh;
`

const SubHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  user-select: none;
  cursor: default;
`

const CTAContainer = styled.div`
  align-self: start;
  ${props => props.theme.breakpoints.lg} {
    align-self: center;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 1.25em;
  transition: font-size 1s;
  text-transform: uppercase;
  font-family: Glacial Indifference;
  font-weight: normal;
  ${props => props.theme.breakpoints.md} {
    font-size: 1.5em;
  }
`

const About = styled.div`
  min-height: 100vh;
  padding: 4em 0;
`

const AboutTitle = styled.h3`
  font-size: 4em;
`

const AboutSubtitle = styled.h4`
  font-size: 2.7em;
`

const AIImage = styled(AboutIllustration)`
  ${props => props.theme.breakpoints.xs} {
    display: none;
  }
  ${props => props.theme.breakpoints.sm} {
    display: none;
  }
  ${props => props.theme.breakpoints.md} {
    display: inherit;
  }
`

const AboutIllustrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1 auto;
  grid-gap: 30px;
  justify-items: center;
  ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, auto);
  }
  ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 33%);
  }
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
      <CTAContainer>
        <CTAButton />
      </CTAContainer>
    </Hero>
    <About id="about">
      <TextLayout>
        <AboutTitle>About Me</AboutTitle>
        <AboutIllustrationContainer>
          <AIImage
            style={{
              width: "80em",
              margin: 40,
              marginLeft: 0,
              marginBottom: 80,
            }}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutIllustrationContainer>
        <AboutSubtitle>Work Experience</AboutSubtitle>
        <AboutGrid>
          <Card
            title="American Express"
            subtitle="Software Engineer"
            content="Internship - Summer 2020"
          />
          <Card
            title="Lockheed Martin"
            subtitle="Software Engineer"
            content="Internship - Summer 2019"
          />
          <Card
            title="Lockheed Martin"
            subtitle="Software Engineer"
            content="Internship - Summer 2019"
          />
        </AboutGrid>
      </TextLayout>
    </About>
  </Layout>
)

export default IndexPage
