import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styles'

const PreLoading = () => {
  const textRef = useRef(null)
  let indexRef = useRef(-1)
  const change = useCallback(() => {
    indexRef.current++
    const listNode = Array.from(textRef.current.children)
    if (indexRef.current > listNode.length - 1) {
      indexRef.current = -1
      listNode.forEach(child => {
        if (child.classList.contains('active')) {
          child.classList.remove('active')
        }
      })
    }
    listNode.forEach((child, id) => {
      if (indexRef.current === id) {
        child.classList.add('active')
      }
    })
  }, [])
  useEffect(() => {
    let intervalId = setInterval(() => {
      change()
    }, 100)
    return () => {
      clearInterval(intervalId)
    }
  }, [change])
  return (
    <>
      <S.PreLoading>
        <S.LoadingText ref={textRef}>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </S.LoadingText>
        <S.LoadingBar>
          <S.LoadingProgress></S.LoadingProgress>
        </S.LoadingBar>
      </S.PreLoading>
    </>
  )
}

export default PreLoading
