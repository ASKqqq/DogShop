/* eslint-disable react/jsx-no-constructed-context-values */
// import {
//   createContext, useCallback, useContext, useEffect, useState,
// } from 'react'
// import { dogFoodApi } from '../api/DogFoodApi'

// export const QueryContext = createContext()

// const DF_TOKEN_KEY = 'DF_TOKEN_KEY'

// export function QueryContextProvider({ children }) {
//   const [token, setToken] = useState(() => {
//     const takeToken = localStorage.getItem(DF_TOKEN_KEY)
//     console.log(takeToken)
//     return takeToken ?? ''
//   })
//   useEffect(() => {
//     localStorage.setItem(DF_TOKEN_KEY, token)
//     dogFoodApi.setToken(token)
//     console.log(token)
//   }, [token])

//   const deleteToken = useCallback(() => setToken(''), [setToken])

//   return (
//     <QueryContext.Provider
//       value={{ token, setToken, deleteToken }}
//     >
//       {children}
//     </QueryContext.Provider>
//   )
// }

// export const useQueryContext = () => useContext(QueryContext)
