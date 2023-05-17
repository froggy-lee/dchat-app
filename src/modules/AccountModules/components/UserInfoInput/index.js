import React from 'react'
import * as S from './styles'

const UserInfoInput = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange
}) => {
  return (
    <S.Input className={className}>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </S.Input>
  )
}

export default UserInfoInput
