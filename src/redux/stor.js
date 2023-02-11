// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import { DF_TOKEN_KEY } from './constats'
import { getInitState } from './ininState'

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line no-undef
    user: userReducer,
    // eslint-disable-next-line no-undef
    cart: cartReducer,
    // eslint-disable-next-line no-undef
    filter: filterReducer,
  },
  preloadedState: getInitState,
})

store.subscribe(() => {
  window.localStorage.setItem(DF_TOKEN_KEY, JSON.stringify(store.getState()))
})
