import React from 'react'
import * as S from './styles'
import { Arrow } from '/public/svgs'

const AccountHeader = ({
  back,
  title,
  rightButton,
  rightLabel,
  leftFunction,
  rightFunction
}) => {
  return (
    <S.Header>
      {back && (
        <S.BackButton onClick={leftFunction}>
          <div className="icon-back">
            <Arrow color="#0071E3" />
          </div>
          Back
        </S.BackButton>
      )}

      <S.Title>{title}</S.Title>

      {rightButton && (
        <S.RightButton onClick={rightFunction}>{rightLabel}</S.RightButton>
      )}
    </S.Header>
  )
}

export default AccountHeader
