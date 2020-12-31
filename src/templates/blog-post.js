import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/"
import TableOfContents from "../components/tableOfContents"
import styled from 'styled-components'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, siteUrl, author, sponsor } = metaData
  const { title: postTitle, date } = post.frontmatter

  const [currentUrl, setCurrentUrl] = useState(undefined)

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl

      const currentOffsetY = window.pageYOffset

      const headerElements = document.querySelectorAll(`.anchor-header`)

      for (const el of headerElements) {
        const { top } = el.getBoundingClientRect()

        const elTop = top + currentOffsetY

        const isLast = el === headerElements[headerElements.length - 1]

        if (currentOffsetY < elTop - 100) {
          aboveHeaderUrl &&
            setCurrentUrl(aboveHeaderUrl.split(location.origin)[1])
          !aboveHeaderUrl && setCurrentUrl(undefined)
          break
        } else {
          isLast && setCurrentUrl(el.href.split(location.origin)[1])
          !isLast && (aboveHeaderUrl = el.href)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Layout location={location} title={postTitle}>
      <div className="post-Wrapper">
        <div className="content">
          <div className="header-wrapper">
            <h1>{postTitle}</h1>
            <div className="summary-wrapper">
              <div className="summary">
                <div className="info">
                  <TableOfContents
                    item={data.markdownRemark.tableOfContents}
                    currentHeaderUrl={currentUrl}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
      </div>
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
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
