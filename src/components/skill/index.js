import React from "react"
import "./index.scss"
import { SkillInfo } from "./skill"

export const Skill = () => {
  let skill = [
    {
      name: "React",
      info:
        "리액트의 기본 개념을 이해하고 있으며 주로 Hooks를 사용하며 리덕스, 리덕스 사가등을 함께 사용합니다.  ",
      color: "#6BC9E2",
      progress: "60",
      icon: "ReactIcon.png",
    },
    {
      name: "NextJS",
      info:
        "Next.js를 이용한 서버사이드 렌더링을 토이 프로젝트 및 데모 프로젝트에 적용한 경험이 있습니다.",
      color: "#0395ba",
      progress: "20",
      icon: "nextjs.svg",
    },
    {
      name: "Javascript",
      info:
        "Javascript 기본 문법과 기초지식이 있으며 해당 언어를 통한 개발 및 유지보수 경력이 있습니다.",
      color: "#F7DF1E",
      progress: "70",
      icon: "javascript.png",
    },
    {
      name: "PHP",
      info:
        "PHP를 통해 웨인테크놀로지에서 솔루션 개발 및 유지보수 업무를 수행하였습니다.",
      color: "#7281B4",
      progress: "70",
      icon: "PHP.png",
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
