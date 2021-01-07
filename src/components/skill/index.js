import React from "react"
import "./index.scss"
import { SkillInfo } from "./skill"

export const Skill = () => {
  let skill = [
    {
      name: "react",
      info:
        "리액트의 기본 개념을 알고 있으며 Hooks를 사용한 함수형 코드를 작성하며. 상태관리는 주로 리덕스를 사용하고있습니다 ",
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
