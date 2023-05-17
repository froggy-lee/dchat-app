import React from 'react'
import { listContact } from './data'
import Image from 'next/image'
import * as S from './styles'

function Contacts({ showCheckBox }) {
  return (
    <S.Wrapper>
      {listContact.map(contact => {
        return (
          <S.Contact key={contact.id}>
            {showCheckBox && (
              <div>
                <input type="checkbox" id={`toggle${contact.id}`} />
                <label
                  className="checkbox"
                  htmlFor={`toggle${contact.id}`}
                ></label>
              </div>
            )}
            <S.Avatar>
              <Image
                src={
                  contact.avatar
                    ? contact.avatar
                    : '/images/icons/default-avatar.png'
                }
                width={36}
                height={36}
                alt="avatar"
              />
            </S.Avatar>
            <div>
              <S.UserName>{contact.userName}</S.UserName>
              <div>{contact.online}</div>
            </div>
          </S.Contact>
        )
      })}
    </S.Wrapper>
  )
}

export default Contacts
