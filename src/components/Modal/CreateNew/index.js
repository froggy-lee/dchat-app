import React, { useCallback } from 'react'
import Image from 'next/image'
import * as S from './styles'
import Contacts from '/src/components/Contacts'
import { useDispatch } from 'react-redux'
import {
  showCreateNewAction,
  showAddNewContactAction,
  showAddNewGroupStep1Action
} from '/src/store/slice/modal'

function CreateNew() {
  const dispatch = useDispatch()

  const handleCancel = useCallback(() => {
    dispatch(showCreateNewAction(false))
  }, [dispatch])

  const handleAddNewContact = useCallback(() => {
    dispatch(showAddNewContactAction(true))
    dispatch(showCreateNewAction(false))
  }, [dispatch])

  const handleAddNewGroup = useCallback(() => {
    dispatch(showAddNewGroupStep1Action(true))
    dispatch(showCreateNewAction(false))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Cancel onClick={handleCancel}>Cancel</S.Cancel>
        <S.Create>Create new</S.Create>
        <S.Cancel className="hide">Cancel</S.Cancel>
      </S.Header>
      <S.ListAction>
        <S.Action onClick={handleAddNewContact}>
          <S.Icon>
            <Image
              src="/images/icons/contact.png"
              width={25}
              height={25}
              alt="contact"
            />
          </S.Icon>
          <div>Contact</div>
          <S.Next>
            <Image
              src="/images/icons/next-chat.png"
              width={6}
              height={10}
              alt="next"
            />
          </S.Next>
        </S.Action>
        <S.Action onClick={handleAddNewGroup}>
          <S.Icon>
            <Image
              src="/images/icons/group.png"
              width={25}
              height={25}
              alt="contact"
            />
          </S.Icon>
          <div>Group</div>
          <S.Next>
            <Image
              src="/images/icons/next-chat.png"
              width={6}
              height={10}
              alt="next"
            />
          </S.Next>
        </S.Action>
        <S.Action>
          <S.Icon>
            <Image
              src="/images/icons/newpost.png"
              width={25}
              height={25}
              alt="contact"
            />
          </S.Icon>
          <div>New Post</div>
          <S.Next>
            <Image
              src="/images/icons/next-chat.png"
              width={6}
              height={10}
              alt="next"
            />
          </S.Next>
        </S.Action>
      </S.ListAction>
      <div>
        <S.ContactTitle>Contacts</S.ContactTitle>
        <div className="contacts">
          <Contacts />
        </div>
      </div>
    </S.Wrapper>
  )
}

export default CreateNew
