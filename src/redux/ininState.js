import { DF_TOKEN_KEY } from './constats'

export const initState = {
  user: {
    group: '',
    name: '',
    email: '',
    token: '',
  },
  // cart: [],
  // filter: {
  //   search: '',
  // },
}

export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(DF_TOKEN_KEY)

  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
