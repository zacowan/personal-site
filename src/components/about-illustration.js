import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutIllustration = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "man-notes.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img {...props} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AboutIllustration
