/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

// Custom Components
import Nav from "./nav"

// Styles
import "./layout.css"

// Theme
const theme = {
  breakpoints: {
    xs: `@media only screen and (max-width: 600px)`,
    sm: `@media only screen and (min-width: 600px)`,
    md: `@media only screen and (min-width: 768px)`,
    lg: `@media only screen and (min-width: 992px)`,
    xl: `@media only screen and (min-width: 1200px)`,
  },
  colors: {
    black: "#1a1a1a",
    white: "#f7f7f7",
    dark: "#454955",
    light: "#f3eff5",
    accent: "#a09abc",
  },
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          overflowX: "hidden",
        }}
      >
        <Nav />
        <main>{children}</main>
        <footer>
          <TextLayout>© {new Date().getFullYear()}, Zachary Cowan.</TextLayout>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const TextLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: "0 1.5em",
          maxWidth: 720,
        }}
      >
        {children}
      </div>
    </>
  )
}

TextLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export { TextLayout }
