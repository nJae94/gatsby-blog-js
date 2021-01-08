import React from "react"
import "./index.scss"
import { SkillInfo } from "./skill"

export const Skill = () => {
  let skill = [
    {
      name: "react",
      info:
        "리액트의 기본 개념을 이해하고 있으며 주로 Hooks를 사용하며 리덕스, 리덕스 사가등을 함께 사용합니다.  ",
      color: "#6BC9E2",
      progress: "60",
    },
  ]
  return (
    <section className="skill-wrapper">
      <h1 className="h1-title">Skill</h1>

      {skill.map(s => (
        <SkillInfo skill={s} />
      ))}
    </section>
  )
}
