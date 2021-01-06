import React from "react"
import "./index.scss"
import js from "../../styles/img/javascript.png"

export const Summary = () => {
  return (
    <setcion className="summary-wrapper">
      <div className="img-section">
        <img className="my-img" src={js} alt="test" />
      </div>
      <div className="description">
        Highly focused technologist with a multidisciplinary skill set honed
        over 10+ years in the IT industry. I strive to build great products and
        can take an initial idea, tackle it from multiple angles and take it
        from something great to something incredible. With 10+ years of
        experience in various industries, I help tech startups from idea phase
        to high volumes. I design and build scalable solutions, implement
        internal processes that fit your organization, build teams that produce
        results.
      </div>
    </setcion>
  )
}
