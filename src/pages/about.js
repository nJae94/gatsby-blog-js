import React from 'react';
import { graphql } from 'gatsby';
import Bio from "../components/bio";
import Layout from "../layout";

export default ({data}) => {

    console.log(data);

    return (
      <div>테스트</div>

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