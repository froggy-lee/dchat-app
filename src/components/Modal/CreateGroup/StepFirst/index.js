import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import Contact from '/src/components/Contact'
import {
  showCreateGroupStep1Action,
  showCreateGroupStep2Action
} from '/src/store/slice/modal'
import { useDispatch } from 'react-redux'
import { USERS } from '/src/constants/data'

const CreateStepFirst = () => {
  const dispatch = useDispatch()

  const [users, setUsers] = useState([])
  const [selectUsers, setSelectUsers] = useState([])

  const getListUsers = useCallback(async () => {
    setUsers(USERS)
  }, [])

  const usersLenght = users.length
  const selectUsersLenght = selectUsers.length

  const onChange = useCallback(
    e => {
      let newArray = [...selectUsers, e.target.id]
      if (selectUsers.includes(e.target.id)) {
        newArray = newArray.filter(item => item !== e.target.id)
      }
      setSelectUsers([...newArray])
    },
    [selectUsers]
  )

  useEffect(() => {
    getListUsers()
  }, [getListUsers])

  const HandleCloseStep1 = () => {
    dispatch(showCreateGroupStep1Action(false))
  }

  const handleOpenStep2 = useCallback(() => {
    dispatch(showCreateGroupStep2Action(true))
  }, [dispatch])

  return (
    <S.StepFirst>
      <S.Header>
        <S.Back onClick={HandleCloseStep1}>
          <S.IconBack>
            <Image
              src="/images/icons/back-chat.png"
              width="8"
              height="18"
              alt="back"
            />
          </S.IconBack>
          Back
        </S.Back>
        <S.TitleWrapper>
          <S.Title>New Group</S.Title>
          <S.Amount>
            {selectUsersLenght}/{usersLenght}
          </S.Amount>
        </S.TitleWrapper>
        {selectUsersLenght > 0 ? (
          <S.Next className="next" onClick={handleOpenStep2}>
            Next
          </S.Next>
        ) : (
          <S.Next>Next</S.Next>
        )}
      </S.Header>

      <S.AddMemberSection>
        <Contact isChecked data={users} onChange={onChange} />
      </S.AddMemberSection>
    </S.StepFirst>
  )
}

export default CreateStepFirst
