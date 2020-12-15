import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext,location }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, siteUrl, author, sponsor } = metaData
  const { title: postTitle, date } = post.frontmatter

  console.log(pageContext);

  return (
    <Layout location={location} title={title}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author {
        name
      }
      siteUrl
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    excerpt(pruneLength: 280)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`
