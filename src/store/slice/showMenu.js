import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMenu: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    showMenuAction: (state, { payload }) => {
      state.showMenu = payload
    }
  }
})

export const selectshowMenu = state => state.menu.showMenu

export const { showMenuAction } = menuSlice.actions

export default menuSlice.reducer
