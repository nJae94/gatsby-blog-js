import React from "react"
import { Article } from "./article"

export const Experience = () => {
  let experiences = [
    {
      name: "Fitpet",
      position: "프론트 엔지니어 | 09 / 2020 ~ ",
      info:
        "Fitpet에서 프론트 엔지니어로 병원찾기의 반려동물 추가 기능 및 리뷰 관리를 담당하여 개발하였으며 React, Redux, Redux-toolkit등을 활용하여 정기배송 서비스의 초기 개발을 담당해 개발을 했습니다. 현재에는 핏펫몰 v2 팀으로 이동하여 몰v2 작업을 진행중에 있습니다.",
    },
    {
      name: "웨인테크놀로지",
      position: "개발팀 | 04 / 2019 ~ 09 / 2020 ",
      info:
        "웨인 테크놀로지의 개발팀으로 NPL 업체용 솔루션을 개발 및 유지보수를 담당하였으며 법원 사이트의 나의 사건조회를 이용한 사건조회 스크래핑 서비스 및 전문개발을 진행해본 경험이 있습니다. 또한 진영자산관리대부, 휴테크 두 가지의 업체의 PL로써 추가 견적 개발 및 일정관리를 진행해본 경험이 있습니다.",
    },
  ]
  return (
    <section className="experience-wrapper">
      <h1 className="h1-title">Experience</h1>

      {experiences.map(experience => (
        <Article experience={experience} />
      ))}
    </section>
  )
}
