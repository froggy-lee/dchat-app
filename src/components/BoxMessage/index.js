import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
// import useLongPress from '/src/components/LongPressEvent'
import ActionMessage from './ActionMessage'

function BoxMessage({ message }) {
  const [actionMessage, setActionMessage] = useState(false)
  const [text, setText] = useState({})

  const showActionMessage = item => {
    setText(item)
    setActionMessage(!actionMessage)
  }

  const toggleActionMessage = () => setActionMessage(!actionMessage)

  //const backspaceLongPress = useLongPress(() => test(), 500)

  return (
    <S.Wrapper>
      {message?.textMessage.map((messageItem, index) => {
        return (
          <S.BoxWrapper key={index} type={messageItem.type}>
            {messageItem.type == 'user' && (
              <S.Avatar>
                <Image
                  src={
                    message?.avatar
                      ? message.avatar
                      : '/images/icons/default-avatar.png'
                  }
                  width={36}
                  height={36}
                  layout="fixed"
                  alt="avatar"
                />
              </S.Avatar>
            )}

            <S.BoxMessage
              type={messageItem.type}
              className={messageItem.type == 'user' ? 'user' : 'me'}
              onClick={() => showActionMessage(messageItem)}
            >
              <div>{messageItem.text}</div>
              <S.Time type={messageItem.type}>10:10</S.Time>
            </S.BoxMessage>
          </S.BoxWrapper>
        )
      })}
      {actionMessage && (
        <ActionMessage message={text} toggle={toggleActionMessage} />
      )}
    </S.Wrapper>
  )
}

export default BoxMessage
