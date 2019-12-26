import React from "react"
import styled from "styled-components"
import { Container as Grid, Row, Col, Hidden } from "react-grid-system"

import Layout, { TextLayout } from "../components/layout"
import SEO from "../components/seo"
import CTAButton from "../components/cta-button"
import HomeHero from "../components/home-hero"
import BondOverlay from "../components/bond-overlay"
import AboutIllustration from "../components/about-illustration"
import Card from "../components/card"

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

const HeroSubtitle = styled.h2`
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: Glacial Indifference;
  font-weight: normal;
`

const About = styled.div`
  min-height: 100vh;
  padding: 4em;
`

const AboutTitle = styled.h3`
  font-size: 4em;
`

const AboutSubtitle = styled.h4`
  font-size: 2.7em;
`

const AboutIllustrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
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
    <About id="about">
      <TextLayout>
        <AboutTitle>About Me</AboutTitle>
        <AboutIllustrationContainer>
          <Hidden xs sm>
            <AboutIllustration
              style={{
                width: "80em",
                margin: 40,
                marginLeft: 0,
                marginBottom: 80,
              }}
            />
          </Hidden>

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
        <Grid>
          <Row>
            <Col style={{ marginTop: 30 }} sm={12} md={6} lg={4}>
              <Card
                title="American Express"
                subtitle="Software Engineer"
                content="Internship - Summer 2020"
              />
            </Col>
            <Col style={{ marginTop: 30 }} sm={12} md={6} lg={4}>
              <Card
                title="Lockheed Martin"
                subtitle="Software Engineer"
                content="Internship - Summer 2019"
              />
            </Col>
          </Row>
        </Grid>
      </TextLayout>
    </About>
  </Layout>
)

export default IndexPage
