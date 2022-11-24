import React, { useCallback, useState } from 'react'
import { listMessageFake } from './data'
import Message from './Message'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { showEditChatAction } from '/src/store/slice/modal'

function EditChat() {
  const dispatch = useDispatch()
  const [showAllMessage, setShowAllMessage] = useState(true)

  const handleShowAllMessage = useCallback(() => {
    setShowAllMessage(!showAllMessage)
  }, [showAllMessage])

  const handleEdit = useCallback(() => {
    dispatch(showEditChatAction(false))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Edit onClick={handleEdit}>Edit</S.Edit>
        <S.EditChat>Edit Chat</S.EditChat>
        <S.Edit className="hide">Edit</S.Edit>
      </S.Header>
      <S.GroupMessage>
        <S.All onClick={showAllMessage ? () => {} : handleShowAllMessage}>
          <S.Name className={showAllMessage ? 'active' : ''}>All</S.Name>
          <S.Total>235</S.Total>
        </S.All>
        <div onClick={!showAllMessage ? () => {} : handleShowAllMessage}>
          <S.Name className={!showAllMessage ? 'active' : ''}>Groups</S.Name>
          <S.Total>125</S.Total>
        </div>
      </S.GroupMessage>
      <div>
        {listMessageFake.map(message => (
          <S.Message key={message.id}>
            <Message message={message} />
          </S.Message>
        ))}
      </div>
      <S.Footer>
        <div>Read all</div>
        <div>Delete</div>
      </S.Footer>
    </S.Wrapper>
  )
}

export default EditChat
