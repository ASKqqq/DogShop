import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../ininState'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initState.favorites,
  reducers: {
    addFavorite(state, action) {
      state.push(action.payload)
    },
    removeFavorite(state, action) {
      return state.filter((id) => id !== action.payload)
    },
    clearFavorites() {
      return []
    },
  },
})

export const { removeFavorite, addFavorite, clearFavorites } = favoriteSlice.actions
export const getAllFavoriteProductsSelector = (state) => state.favorites
export const favoriteReducer = favoriteSlice.reducer
