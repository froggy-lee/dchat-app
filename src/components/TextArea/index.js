import React, { useCallback, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'

function TextArea() {
  const [text, setText] = useState('')

  const handleChange = useCallback(e => setText(e.target.value), [])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
  }, [])

  return (
    <S.Wrapper>
      <div>
        <Image
          src="/images/icons/post-file.png"
          width={25}
          height={28}
          alt="post"
        />
      </div>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          name=""
          id=""
          value={text}
          onChange={handleChange}
        />
        <S.Button onClick={handleSubmit}>
          <Image
            src="/images/icons/send.png"
            width={31}
            height={31}
            alt="send"
          />
        </S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default TextArea
