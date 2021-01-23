import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import "./index.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile3.jpg/" }) {
        childImageSharp {
          fixed(width: 72, height: 72, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          introduction
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  const avatar = data?.avatar?.childImageSharp?.fixed

  const introduction = data.site.siteMetadata?.introduction

  return (
    <div className="bio">
      <div className="author">
        <div className="author-description">
          <div className="profile-img">
            <Image
              className="author-image"
              fixed={avatar}
              alt={author.name}
              style={{
                borderRadius: `30%`,
              }}
            />
          </div>

          <div className="description">
            <div className="author-name">
              <span className="name">Written by</span>
              <Link to={"https://github.com/nJae94"} className="content">
                <span>@{author.name}</span>
              </Link>
            </div>

            <div className="introduction">{introduction}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
