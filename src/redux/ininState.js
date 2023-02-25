import { DF_TOKEN_KEY } from './constats'

export const initState = {
  user: {
    group: '',
    email: '',
    token: '',
  },
  cart: [],
  filter: {
    search: '',
  },
  favorites: [],
}

export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(DF_TOKEN_KEY)

  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
