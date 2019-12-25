import React from "react"
import styled from "styled-components"

// Animations
import UpDown from "../animations/up-down"

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
  transition: transform 0.2s;
  ${"" /* filter: drop-shadow(0px 4px 4px var(--black)); */}
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const Arrow = styled.svg`
  fill: var(--white);
  width: 60%;
  animation: ${UpDown} 2s ease-in-out 0s infinite;
`

const CTAButton = () => {
  return (
    <RootContainer>
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
