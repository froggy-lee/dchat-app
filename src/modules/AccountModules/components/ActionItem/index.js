import React from 'react'
import * as S from './styles'

const ActionItem = ({ icon, title, onClick }) => {
  return (
    <S.ActionItem onClick={onClick}>
      <S.Action>
        <div className="action__icon">{icon}</div>
        <div className="active__title">{title}</div>
      </S.Action>
    </S.ActionItem>
  )
}

export default ActionItem
