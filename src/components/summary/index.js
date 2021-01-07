import React from "react"
import "./index.scss"
import js from "../../styles/img/profile3.jpg"

export const Summary = () => {
  return (
    <setcion className="summary-wrapper">
      <div className="img-section">
        <img className="my-img" src={js} alt="test" />
      </div>
      <div className="description">
        2년 차 junior frontend-engineer 정선재 입니다.
        <br /> 1년이 조금 넘는 시간동안 PHP를 사용한 금융 솔루션 <br />
        업체에서 근무하다 뒤늦게 front의 매력에 빠져 전향한 풋내기 주니어
        입니다. 하루하루 변해가는 트렌드 속에서 기본이되는 지식을 습득하며, 항상
        더 나은 방법을 고민하는 개발자로 성장하고 싶습니다. 단순히 구현을 잘하는
        개발자가 아닌 좋은 서비스를 고민하고 설계하여 엔지니어링 할 수 있는
        개발자를 지향하고 하루하루 노력하고 있습니다.
      </div>
    </setcion>
  )
}
