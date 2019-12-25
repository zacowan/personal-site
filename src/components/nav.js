import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const RootContainer = styled.div`
  padding: 2em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
`

const NavLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Glacial Indifference;
  margin: 0.25em 0;
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

const paths = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/",
  },
]

const Nav = () => {
  return (
    <RootContainer>
      {paths.map(path => (
        <NavLink to={path.path}>{path.label}</NavLink>
      ))}
    </RootContainer>
  )
}

export default Nav
