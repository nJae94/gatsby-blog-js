import React from "react"
import styled from "styled-components"
import Front from "../../styles/img/Front.png"
import Algorithm from "../../styles/img/Algorithm.png"
import TIL from "../../styles/img/TIL.png"
import Essay from "../../styles/img/Essay.png"
import { Link } from "gatsby"

export default function MainContent({ title, post }) {
  return (
    <ThumbnailLink to={post.fields.slug}>
      <div className="thumbnail">
        {post.frontmatter.category === "TIL" ? (
          <ThumbnailImg src={TIL} alt={post.fields.slug} />
        ) : post.frontmatter.category === "front" ? (
          <ThumbnailImg src={Front} alt={post.fields.slug} />
        ) : post.frontmatter.category === "algorithm" ? (
          <ThumbnailImg src={Algorithm} alt={post.fields.slug} />
        ) : post.frontmatter.category === "essay" ? (
          <ThumbnailImg src={Essay} alt={post.fields.slug} />
        ) : null}
        <Thumbnail>
          <h3>{title}</h3>
          <div className="content">{post.excerpt}</div>
          <div className="date">{post.frontmatter.date}</div>
        </Thumbnail>
      </div>
    </ThumbnailLink>
  )
}

const ThumbnailLink = styled(Link)`
  text-decoration: none;
`

const ThumbnailImg = styled.img`
  width: 30%;
  height: 100%;
  margin-right: 1rem;
`

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  h3 {
    font-size: 1.4em;
    margin: 0 0 0.3rem 0;
    padding-bottom: 0.2rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .content {
    color: #7d7d7d;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  .date {
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`
