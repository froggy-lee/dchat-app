import React from 'react'
import * as S from './styles'
import Image from 'next/image'

const ContactItem = ({ avatar, name, onRedirectRouter }) => {
  return (
    <S.ContactInfo onClick={onRedirectRouter}>
      <S.InfoWrapper>
        <S.Avatar>
          <Image
            src={avatar || '/images/icons/default-avatar.png'}
            width={40}
            height={40}
            layout="fixed"
            alt="info-avatar"
          />
        </S.Avatar>
        <S.Info>
          <S.Name>{name || 'Default name'}</S.Name>
          <S.LastSeen>last seen 25 minutes ago</S.LastSeen>
        </S.Info>
      </S.InfoWrapper>
    </S.ContactInfo>
  )
}

export default ContactItem
