import React from "react"
import "./index.scss"
export const Info = () => {
  return (
    <header className="info-header">
      <div className="left">
        <div className="name">정선재</div>
        <div className="job">Front-end</div>
      </div>

      <div className="right">
        <span>010-3048-1970</span>
        <span>azuretic94@naver.com</span>
        <span>
          <a href="https://github.com/nJae94">nJae's Repo</a>
        </span>
        <span>FitPet</span>
      </div>
    </header>
  )
}
