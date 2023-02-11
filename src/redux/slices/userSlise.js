// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../ininState'

const userSlice = createSlice({
  name: 'user',
  initialState: initState.user,
  reducers: {
    setUserToken(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.token = action.payload
    },
    logOut() {
      return initState.user
    },
  },
})

export const { setUserToken, logOut } = userSlice.actions
export const getUserSelector = (state) => state.user
export const userReducer = userSlice.reducer
