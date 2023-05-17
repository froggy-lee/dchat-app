import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '/src/store/slice/modal'
import menuReducer from '/src/store/slice/showMenu'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    menu: menuReducer
  }
})
