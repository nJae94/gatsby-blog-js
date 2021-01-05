import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout"

export default ({ location }) => {
  return (
    <Layout
      location={location}
      title={location.pathname.split("/")[1]}
    ></Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
