import React from 'react'
import * as S from './styles'

const ConnectButton = ({ connectSocial, label, onClick }) => {
  return (
    <S.ConnectButton onClick={onClick} connectSocial={connectSocial}>
      {label}
    </S.ConnectButton>
  )
}

export default ConnectButton
