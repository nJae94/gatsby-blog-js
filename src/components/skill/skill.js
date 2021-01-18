import React from "react"
import { ProgressBar } from "./progressBar"
import "./index.scss"

export const SkillInfo = ({ skill }) => {
  return (
    <div className="skill-container">
      <img
        className="skill-img"
        src={require(`../../styles/img/${skill.icon}`)}
        alt={skill.name}
      />

      <div className="skill-info-wrapper">
        <label>{skill.name}</label>
        <label>{skill.info}</label>
        <ProgressBar color={skill.color} progress={skill.progress} />
      </div>
    </div>
  )
}
