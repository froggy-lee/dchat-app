import React from 'react'
import * as S from './styles'
import Image from 'next/image'

const listAction = [
  {
    action: 'Reply',
    icon: '/images/icons/reply.png',
    width: 16,
    height: 14
  },
  {
    action: 'Copy',
    icon: '/images/icons/copy-message.png',
    width: 17,
    height: 19
  },
  {
    action: 'Forward',
    icon: '/images/icons/forward.png',
    width: 16,
    height: 14
  },
  {
    action: 'Pin',
    icon: '/images/icons/pin.png',
    width: 12,
    height: 16
  },
  {
    action: 'Delete',
    icon: '/images/icons/delete.png',
    width: 15,
    height: 17
  }
]

function ActionMessage({ message, toggle }) {
  return (
    <S.Wrapper>
      <div className="back-drop" onClick={toggle}></div>
      <S.BoxMessage
        type={message?.type}
        className={message?.type == 'user' ? 'user' : 'me'}
      >
        <div>{message?.text}</div>
        <S.Time type={message?.type}>10:10</S.Time>
        <S.ListAction>
          {listAction.map(item => {
            return (
              <S.Action key={item.action}>
                <div>{item.action}</div>
                <div>
                  <Image
                    src={item.icon}
                    width={item.width}
                    height={item.height}
                    alt={item.action}
                  />
                </div>
              </S.Action>
            )
          })}
          <S.Action>
            <div>Select</div>
            <div>
              <Image
                src="/images/icons/select.png"
                width={16}
                height={16}
                alt="select"
              />
            </div>
          </S.Action>
        </S.ListAction>
      </S.BoxMessage>
    </S.Wrapper>
  )
}

export default ActionMessage
