import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% { width: 0}
  100% {width: 100%}
`

export const PreLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 2rem;
  background: url('/images/background.png') no-repeat;
  background-size: cover;
`

export const LoadingBar = styled.div`
  display: flex;
  position: relative;
  max-width: 850px;
  width: 100%;
  height: 61px;
  border: 5px solid #eeb729;
  padding: 7px;

  @media (max-width: 600px) {
    max-width: 500px;
    height: 28px;
    padding: 3px;
  }
`
export const LoadingText = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 4rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 2rem;
  span {
    transition: all 1s ${loading} ease-in-out;
    &.active {
      color: #faff00;
    }
  }
`

export const LoadingProgress = styled.div`
  background: #faff00;
  width: 100%;
  height: 100%;
  animation: 3s ${loading} ease-in-out;
`
