import React, { useCallback } from 'react'
import SearchComponent from '/src/components/Search'
import Image from 'next/image'
import * as S from './styles'
import {
  showCreateMessageAction,
  showCreateGroupStep1Action
} from '/src/store/slice/modal'
import { selectshowMenu } from '/src/store/slice/showMenu'
import { useDispatch, useSelector } from 'react-redux'

function CreateMessage() {
  const dispatch = useDispatch()
  const showMenu = useSelector(selectshowMenu)

  const HandleCloseCreateMessage = () => {
    dispatch(showCreateMessageAction(false))
  }

  const handleShowCreateGroup = useCallback(() => {
    dispatch(showCreateGroupStep1Action(true))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Header show={showMenu}>
        <div className="none">Cancel</div>
        <S.Title>New Message</S.Title>
        <div onClick={HandleCloseCreateMessage}>Cancel</div>
      </S.Header>
      <div className="search">
        <SearchComponent />
      </div>
      <S.ListAction>
        <S.Action onClick={handleShowCreateGroup}>
          <div>
            <Image
              src="/images/icons/newGroup-icon.png"
              width={25}
              height={18}
              alt="icon"
            />
          </div>
          <div className="name">New Group</div>
        </S.Action>
        <S.Action>
          <div>
            <Image
              src="/images/icons/newContact-icon.png"
              width={20}
              height={22}
              alt="icon"
            />
          </div>
          <div className="name1">New Contact</div>
        </S.Action>
        <S.Action>
          <div>
            <Image
              src="/images/icons/newChannel-icon.png"
              width={25}
              height={20}
              alt="icon"
            />
          </div>
          <div className="name">New Channel</div>
        </S.Action>
      </S.ListAction>
    </S.Wrapper>
  )
}

export default CreateMessage
