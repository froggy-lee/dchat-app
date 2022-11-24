import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import TextArea from '/src/components/TextArea'
import * as S from './styles'
import BoxMessage from '/src/components/BoxMessage'
import { listMessage } from './data'
import { useRouter } from 'next/router'
import ViewGroup from './ViewGroup'

function DetailMessage() {
  const router = useRouter()
  const bottomRef = useRef(null)
  const [id, setId] = useState()
  const [showViewGroup, setShowViewGroup] = useState(false)

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [id])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    setId(router.query.id)
  }, [router])

  const handleBack = useCallback(() => {
    router.push('/chat')
  }, [router])

  const handleShowViewGroup = useCallback(() => {
    setShowViewGroup(!showViewGroup)
  }, [showViewGroup])

  return (
    <>
      {!showViewGroup ? (
        <S.Wrapper>
          <S.Header>
            <S.Back onClick={handleBack}>
              <Image
                src="/images/icons/back-chat.png"
                width={8}
                height={18}
                alt="back"
              />
              Back
            </S.Back>
            <div>
              <S.Name>{listMessage[id - 1]?.user}</S.Name>
              <S.Infor>21000 users. 8876 online</S.Infor>
            </div>
            <div onClick={handleShowViewGroup}>
              <Image
                src={
                  listMessage[id - 1]?.avatar
                    ? listMessage[id - 1]?.avatar
                    : '/images/icons/default-avatar.png'
                }
                width={36}
                height={36}
                alt="logo"
              />
            </div>
          </S.Header>
          <S.PinMessage>Pin Message</S.PinMessage>
          <S.ChatScreen>
            <div>
              <BoxMessage message={listMessage[id - 1]} />
            </div>
            <div ref={bottomRef} className="bottom" />
          </S.ChatScreen>
          <S.TextInput>
            <TextArea />
          </S.TextInput>
        </S.Wrapper>
      ) : (
        <S.ViewGroup>
          <ViewGroup toggle={handleShowViewGroup} id={id} />
        </S.ViewGroup>
      )}
    </>
  )
}

export default DetailMessage
