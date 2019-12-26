import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

// Styled Components
const RootContainer = styled.div`
  background-color: var(--black);
  border-radius: 1em;
  width: 2.5em;
  height: 5em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: -webkit-transform 0.2s, -webkit-box-shadow 0.2s;
  transition: -webkit-transform 0.2s, -webkit-box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s,
    -webkit-box-shadow 0.2s;
  -webkit-box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
    -webkit-transform: translate(0px, -0.25em);
    transform: translate(0px, -0.25em);
  }
  &:active {
    -webkit-box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.4);
  }
`

const Arrow = styled.svg`
  fill: var(--white);
  width: 60%;
  @-webkit-keyframes cta-button-updown {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    100% {
      -webkit-transform: translate(0px, 0.5em);
      transform: translate(0px, 0.5em);
    }
  }
  @keyframes cta-button-updown {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    100% {
      -webkit-transform: translate(0px, 0.5em);
      transform: translate(0px, 0.5em);
    }
  }
  animation: cta-button-updown 1.5s ease-out 0s infinite alternate;
  -webkit-animation: cta-button-updown 1.5s ease-out 0s infinite alternate;
`

const CTAButton = () => {
  return (
    <RootContainer onClick={() => scrollTo("#about")}>
      <Arrow
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </Arrow>
    </RootContainer>
  )
}

export default CTAButton
