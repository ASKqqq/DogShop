/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, useEffect, useState,
} from 'react'
import { dogFoodApi } from '../api/DogFoodApi'

export const QueryContext = createContext()

const DF_TOKEN_KEY = 'DF_TOKEN_KEY'

export function QueryContextProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem(DF_TOKEN_KEY) ? localStorage.getItem(DF_TOKEN_KEY) : '',
  )
  useEffect(() => {
    localStorage.setItem(DF_TOKEN_KEY, token)
    dogFoodApi.setToken(token)
  }, [token])

  return (
    <QueryContext.Provider
      value={{ token, setToken }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export const useQueryContext = () => useContext(QueryContext)
