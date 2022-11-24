import React, { useCallback } from 'react'
import * as S from './styles'
import Contacts from '/src/components/Contacts'
import { useDispatch } from 'react-redux'
import {
  showAddNewContactAction,
  showCreateNewAction
} from '/src/store/slice/modal'

function AddNewContact() {
  const dispatch = useDispatch()

  const handleCancel = useCallback(() => {
    dispatch(showAddNewContactAction(false))
    dispatch(showCreateNewAction(true))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Cancel onClick={handleCancel}>Cancel</S.Cancel>
        <S.Contacts>Contacts</S.Contacts>
        <S.Cancel className="hide">Cancel</S.Cancel>
      </S.Header>
      <S.Title>Add New</S.Title>
      <S.Form>
        <S.Input>
          First Name <input type="text" maxLength={15} />
        </S.Input>
        <S.Input>
          Last Name <input type="text" maxLength={15} />
        </S.Input>
        <S.Input>
          Mobile <input type="number" />
        </S.Input>
      </S.Form>
      <S.Create>Create</S.Create>

      <S.Title>Contacts</S.Title>
      <div className="contacts">
        <Contacts />
      </div>
    </S.Wrapper>
  )
}

export default AddNewContact
