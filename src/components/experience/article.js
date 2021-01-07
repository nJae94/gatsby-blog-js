import React from 'react'
import './index.scss'
export const Article = ({experience}) => {
  return (
      <article className="experience-article">
        <h2 className="h2-title">
          {experience.name}
        </h2>
        <h3 className="h3-title">
          {experience.position}
        </h3>
        <div className="experience-info">
          {experience.info}
        </div>
      </article>
  )
}
