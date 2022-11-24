import Image from 'next/image'
import * as S from './styles'
import Message from './Message'
import SlideUser from './SlideUsers'
import ModalPage from '/src/modules/ModalPage'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  showEditChatAction,
  showCreateNewAction,
  selectshowEditChat,
  selectshowCreateNew,
  selectshowAddNewContact,
  selectshowAddNewGroupStep1,
  selectshowAddNewGroupStep2
} from '/src/store/slice/modal'
import { listMessageFake } from './data'
import { useRouter } from 'next/router'

function ChatModules() {
  const [showAllMessage, setShowAllMessage] = useState(true)
  const [showChat, setShowChat] = useState(true)
  const editChat = useSelector(selectshowEditChat)
  const createNew = useSelector(selectshowCreateNew)
  const addNewContact = useSelector(selectshowAddNewContact)
  const addNewGroupStep1 = useSelector(selectshowAddNewGroupStep1)
  const addNewGroupStep2 = useSelector(selectshowAddNewGroupStep2)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleShowAllMessage = useCallback(() => {
    setShowAllMessage(!showAllMessage)
  }, [showAllMessage])

  const handleEdit = useCallback(() => {
    dispatch(showEditChatAction(true))
  }, [dispatch])

  const handleCreateNew = useCallback(() => {
    dispatch(showCreateNewAction(true))
  }, [dispatch])

  useEffect(() => {
    editChat ||
    createNew ||
    addNewContact ||
    addNewGroupStep1 ||
    addNewGroupStep2
      ? setShowChat(false)
      : setShowChat(true)
  }, [addNewContact, addNewGroupStep1, addNewGroupStep2, createNew, editChat])

  const handleShowDetailChat = useCallback(
    id => {
      router.push(`/chat/${id}`)
    },
    [router]
  )

  return (
    <>
      {showChat && (
        <S.Wrapper>
          <S.Header>
            <S.Edit onClick={handleEdit}>Edit</S.Edit>
            <S.Chat>Chat</S.Chat>
            <div onClick={handleCreateNew}>
              <Image
                src="/images/icons/edit.png"
                width={20}
                height={20}
                alt="edit"
              />
            </div>
          </S.Header>
          <S.Slide>
            <SlideUser />
          </S.Slide>
          <S.GroupMessage>
            <S.All onClick={showAllMessage ? () => {} : handleShowAllMessage}>
              <S.Name className={showAllMessage ? 'active' : ''}>All</S.Name>
              <S.Total>235</S.Total>
            </S.All>
            <div onClick={!showAllMessage ? () => {} : handleShowAllMessage}>
              <S.Name className={!showAllMessage ? 'active' : ''}>
                Groups
              </S.Name>
              <S.Total>125</S.Total>
            </div>
          </S.GroupMessage>
          <div>
            {listMessageFake.map(message => (
              <S.Message
                key={message.id}
                onClick={() => handleShowDetailChat(message.id)}
              >
                <Message message={message} />
              </S.Message>
            ))}
          </div>
        </S.Wrapper>
      )}
      <ModalPage />
    </>
  )
}

export default ChatModules
