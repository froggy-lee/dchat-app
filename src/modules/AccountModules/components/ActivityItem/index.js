import React from 'react'
import * as S from './styles'
import Image from 'next/image'

const ActivityItem = ({ status, date, address, amount, totalPrice }) => {
  return (
    <S.ActivityItem>
      <S.ActivityInfo>
        <S.Icon>
          <Image
            src={
              status === 'send'
                ? '/images/icons/send-icon.png'
                : '/images/icons/receipt-icon.png'
            }
            width={30}
            height={30}
            alt=""
          />
        </S.Icon>
        <S.Info>
          <S.StatusName>{status}</S.StatusName>

          <S.StatusDescription>
            <span className="date">{date}</span>
            <span className="from">From: {address}</span>
          </S.StatusDescription>
        </S.Info>
      </S.ActivityInfo>

      <S.AmountSection>
        <S.Amount>{amount}</S.Amount>
        <S.Price>{totalPrice}</S.Price>
      </S.AmountSection>
    </S.ActivityItem>
  )
}

export default ActivityItem
