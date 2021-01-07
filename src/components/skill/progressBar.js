import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  position: relative;
  background-color: #dce0e3;
  width: 100%;
  height: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  @media (max-width: 1024px) {
    width: initial;
  }
`

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 70%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1.5rem 1.5rem;
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
  ${({ progress }) =>
    progress &&
    css`
      width: ${progress}%;
    `}
`

export const ProgressBar = props => {
  return (
    <div>
      <Container>
        <Bar color={props.color} progress={props.progress} />
      </Container>
    </div>
  )
}
