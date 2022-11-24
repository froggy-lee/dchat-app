import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { showCreateMessageAction } from '/src/store/slice/modal'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch()

  const HandleCreateMessage = () => {
    dispatch(showCreateMessageAction(true))
  }
  return (
    <S.Wrapper>
      <div>Edit</div>
      <div onClick={HandleCreateMessage}>
        <Image src="/images/icons/edit.png" width={23} height={23} alt="edit" />
      </div>
    </S.Wrapper>
  )
}

export default Header
