import React from "react"
import react from "../../styles/img/ReactIcon.png"
import { ProgressBar } from "./progressBar"
import "./index.scss"

export const SkillInfo = ({ skill }) => {
  return (
    <div className="skill-container">
      <img className="skill-img" src={react} alt="tjejj" />

      <div className="skill-info-wrapper">
        <label>{skill.name}</label>
        <label>{skill.info}</label>
        <ProgressBar color={skill.color} progress={skill.progress} />
      </div>
    </div>
  )
}
