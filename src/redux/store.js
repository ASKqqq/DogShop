// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import { DF_TOKEN_KEY } from './constats'
import { getInitState } from './ininState'
import { filterReducer } from './slices/filterSlice'
import { userReducer } from './slices/userSlise'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitState(),
})

store.subscribe(() => window.localStorage.setItem(DF_TOKEN_KEY, JSON.stringify(store.getState())))
