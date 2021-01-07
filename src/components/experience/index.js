import React from 'react'
import {Article} from './article'

export const Experience = () => {

  let experiences = [
    {
      name : 'Fitpet',
      position: '프론트 엔지니어 | 09 / 2020 ~ ',
      info : 'I consult startups to take their concept to the next level.'
    },
    {
      name : '웨인테크놀로지',
      position: '개발팀 | 04 / 2019 ~ 09 / 2020 ',
      info : 'I consult startups to take their concept to the next level.'
    },
  ]
  return (
    <section className="experience-wrapper">
      <h1 className="h1-title">Experience</h1>

      {
        experiences.map(experience => (
          <Article experience={experience}/>
        ))
      }
    </section>
  )
}
