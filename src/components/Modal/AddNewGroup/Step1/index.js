import React, { useCallback } from 'react'
import * as S from './styles'
import Contacts from '/src/components/Contacts'
import { useDispatch } from 'react-redux'
import {
  showAddNewGroupStep1Action,
  showAddNewGroupStep2Action,
  showCreateNewAction
} from '/src/store/slice/modal'

function AddNewGroupStep1() {
  const dispatch = useDispatch()

  const handleCancel = useCallback(() => {
    dispatch(showAddNewGroupStep1Action(false))
    dispatch(showCreateNewAction(true))
  }, [dispatch])

  const handleNextStep = useCallback(() => {
    dispatch(showAddNewGroupStep2Action(true))
    dispatch(showAddNewGroupStep1Action(false))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTop>
          <S.Cancel onClick={handleCancel}>Cancel</S.Cancel>
          <S.NewGroup>New Group</S.NewGroup>
          <S.Cancel onClick={handleNextStep}>Next</S.Cancel>
        </S.HeaderTop>
        <S.Search>
          <input
            type="text"
            name=""
            id=""
            placeholder="Who would you like to add?"
          />
        </S.Search>
      </S.Header>
      <S.Title>Contacts</S.Title>
      <div className="contacts">
        <Contacts showCheckBox={true} />
      </div>
    </S.Wrapper>
  )
}

export default AddNewGroupStep1
