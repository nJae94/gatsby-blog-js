import React from "react";
import { Link, graphql } from "gatsby";
import PostLayout from "../layout/postLayout";


const BlogPostTemplate = ({ data, pageContext,location }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, siteUrl, author, sponsor } = metaData
  const { title: postTitle, date } = post.frontmatter

  return (
    <PostLayout location={location} title={postTitle}>
      {/* <div className="post-Wapper" dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <div className="post-Wapper">
        <div className="content">
          <div className="header=wrapper">
            <h1>{postTitle}</h1>
            <div className="summary-wrapper">
              <div className="summary">
                <div className="info">
                  <div>1.fjfjfjf</div>
                </div>
              </div>
            </div>
          </div>

          <div className="post" dangerouslySetInnerHTML={{ __html: post.html }}>

          </div>

        </div>
      </div>
    </PostLayout>
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
