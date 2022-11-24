import React from 'react'
import { useSelector } from 'react-redux'
import CreateMessage from '/src/components/Modal/CreateMessage'
import CreateStepFirst from '/src/components/Modal/CreateGroup/StepFirst'
import CreateStepSecond from '/src/components/Modal/CreateGroup/StepSecond'
import EditChat from '/src/components/Modal/EditChat'
import CreateNew from '/src/components/Modal/CreateNew'
import AddNewContact from '/src/components/Modal/AddNewContact'
import AddNewGroupStep1 from '/src/components/Modal/AddNewGroup/Step1'
import AddNewGroupStep2 from '/src/components/Modal/AddNewGroup/Step2'

import {
  selectShowCreateMessage,
  selectShowCreateGroupStep1,
  selectShowCreateGroupStep2,
  selectshowEditChat,
  selectshowCreateNew,
  selectshowAddNewContact,
  selectshowAddNewGroupStep1,
  selectshowAddNewGroupStep2
} from '/src/store/slice/modal'

const ModalPage = () => {
  const showCreateMessage = useSelector(selectShowCreateMessage)
  const showCreateGroupStep1 = useSelector(selectShowCreateGroupStep1)
  const showCreateGroupStep2 = useSelector(selectShowCreateGroupStep2)
  const showEditChat = useSelector(selectshowEditChat)
  const showCreateNew = useSelector(selectshowCreateNew)
  const showAddNewContact = useSelector(selectshowAddNewContact)
  const showAddNewGroupStep1 = useSelector(selectshowAddNewGroupStep1)
  const showAddNewGroupStep2 = useSelector(selectshowAddNewGroupStep2)
  return (
    <>
      {!!showCreateMessage && <CreateMessage />}
      {!!showCreateGroupStep1 && <CreateStepFirst />}
      {!!showCreateGroupStep2 && <CreateStepSecond />}
      {!!showEditChat && <EditChat />}
      {!!showCreateNew && <CreateNew />}
      {!!showAddNewContact && <AddNewContact />}
      {!!showAddNewGroupStep1 && <AddNewGroupStep1 />}
      {!!showAddNewGroupStep2 && <AddNewGroupStep2 />}
    </>
  )
}

export default ModalPage
