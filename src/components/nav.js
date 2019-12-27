import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import useMediaQuery from "react-use-media-query-hook"

const NavContainer = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  background-color: ${props => props.theme.colors.white};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${props => (props.open ? 400 : -1)};
  transition: opacity 0.4s, z-index 0.4s;
  opacity: ${props => (props.open ? 1 : 0)};
  ${props => props.theme.breakpoints.lg} {
    bottom: auto;
    left: auto;
    width: auto;
    height: auto;
    align-items: flex-end;
    opacity: 1;
  }
`

const NavLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Glacial Indifference;
  :link {
    color: inherit;
    text-decoration: none;
  }
  :visited {
    color: inherit;
    text-decoration: none;
  }
  :active {
    color: inherit;
    text-decoration: underline;
  }
  :hover {
    text-decoration: underline;
  }
`

const HamburgerContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;
  transition: transform 0.2s;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 401;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

const Icon = styled.svg`
  width: 100%;
  fill: ${props => props.theme.colors.black};
`

const paths = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/",
  },
  {
    label: "projects",
    path: "/",
  },
  {
    label: "insights",
    path: "/",
  },
  {
    label: "contact",
    path: "/",
  },
]

const Nav = () => {
  const isComputer = useMediaQuery("(min-width: 992px)")
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <NavContainer open={open}>
        {paths.map(path => (
          <NavLink
            onClick={() => setOpen(false)}
            key={path.label}
            to={path.path}
          >
            {path.label}
          </NavLink>
        ))}
      </NavContainer>
      {!isComputer && (
        <HamburgerContainer onClick={() => setOpen(!open)}>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </Icon>
        </HamburgerContainer>
      )}
    </React.Fragment>
  )
}

export default Nav
