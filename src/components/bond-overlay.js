import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BondOverlay = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "007.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        width: "25vh",
        position: "absolute",
        zIndex: -1,
        opacity: 0.02,
        left: "calc(50% - 25vh / 2)",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default BondOverlay
