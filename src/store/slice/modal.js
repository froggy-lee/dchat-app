import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showCreateMessage: false,
  showCreateGroupStep1: false,
  showCreateGroupStep2: false,
  showInstructionsModal: true,
  showEditChat: false,
  showCreateNew: false,
  showAddNewContact: false,
  showAddNewGroupStep1: false,
  showAddNewGroupStep2: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showCreateMessageAction: (state, { payload }) => {
      state.showCreateMessage = payload
    },
    showCreateGroupStep1Action: (state, { payload }) => {
      state.showCreateGroupStep1 = payload
    },
    showCreateGroupStep2Action: (state, { payload }) => {
      state.showCreateGroupStep2 = payload
    },
    showshowInstructionsModalAction: (state, { payload }) => {
      state.showInstructionsModal = payload
    },
    showEditChatAction: (state, { payload }) => {
      state.showEditChat = payload
    },
    showCreateNewAction: (state, { payload }) => {
      state.showCreateNew = payload
    },
    showAddNewContactAction: (state, { payload }) => {
      state.showAddNewContact = payload
    },
    showAddNewGroupStep1Action: (state, { payload }) => {
      state.showAddNewGroupStep1 = payload
    },
    showAddNewGroupStep2Action: (state, { payload }) => {
      state.showAddNewGroupStep2 = payload
    }
  }
})

export const selectShowCreateMessage = state => state.modal.showCreateMessage

export const selectShowCreateGroupStep1 = state =>
  state.modal.showCreateGroupStep1

export const selectShowCreateGroupStep2 = state =>
  state.modal.showCreateGroupStep2

export const selectshowInstructionsModal = state =>
  state.modal.showInstructionsModal

export const selectshowEditChat = state => state.modal.showEditChat

export const selectshowCreateNew = state => state.modal.showCreateNew

export const selectshowAddNewContact = state => state.modal.showAddNewContact

export const selectshowAddNewGroupStep1 = state =>
  state.modal.showAddNewGroupStep1

export const selectshowAddNewGroupStep2 = state =>
  state.modal.showAddNewGroupStep2

export const {
  showCreateMessageAction,
  showCreateGroupStep1Action,
  showCreateGroupStep2Action,
  showshowInstructionsModalAction,
  showEditChatAction,
  showCreateNewAction,
  showAddNewContactAction,
  showAddNewGroupStep1Action,
  showAddNewGroupStep2Action
} = modalSlice.actions

export default modalSlice.reducer
