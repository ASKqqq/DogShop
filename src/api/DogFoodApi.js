/* eslint-disable class-methods-use-this */
class DogFoodApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl
    // this.token = ''
  }

  getAuthorizationHeader(token) {
    return `Bearer ${token}`
  }

  // setToken(token) {
  //   this.token = token
  // }

  async checkToken(token) {
    if (!token) throw new Error('Отсутствует токен')

    const res = await fetch(`${this.baseUrl}/v2/sm9/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: this.getAuthorizationHeader(token),
      },
    })

    if (res.status === 400) {
      throw new Error('Токен не передан или передан не в том формате')
    }
    if (res.status === 401) {
      throw new Error('Переданный токен некорректен')
    }
  }

  async signIn(values) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (res.status === 401) {
      throw new Error('Неверные логин или пароль')
    }
    if (res.status === 404) {
      throw new Error('Пользователь с указанным email не найден')
    }
    if (res.status >= 300) {
      throw new Error(`Ошибка, код ${res.status}`)
    }

    return res.json()
  }

  async signUp(values) {
    const res = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (res.status === 400) {
      throw new Error('Некорректно заполнено одно из полей')
    }

    if (res.status === 409) {
      throw new Error('Пользователь с указанным email уже существует')
    }
    if (res.status >= 300) {
      throw new Error(`Ошибка, код ${res.status}`)
    }

    return res.json()
  }

  async getUser(token) {
    this.checkToken(token)
    const res = await fetch(`${this.baseUrl}/v2/sm9/users/me`, {
      headers: {
        authorization: this.getAuthorizationHeader(token),
      },
    })

    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при входе в Личный кабинет. 
      Проверьте отправляемые данные. Status: ${res.status}`)
    }

    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении ответа от сервера. 
      Попробуйте сделать запрос позже. Status: ${res.status}`)
    }

    if (res.status >= 300) {
      throw new Error(`Ошибка, код ${res.status}`)
    }

    return res.json()
  }

  async getAllProducts(search, token) {
    this.checkToken(token)

    const res = await fetch(`${this.baseUrl}/products?query=${search}`, {
      headers: {
        authorization: this.getAuthorizationHeader(token),
      },
    })

    if (res.status === 401) {
      throw new Error('Ошибка авторизации')
    }

    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при входе в Личный кабинет. 
      Проверьте отправляемые данные. Status: ${res.status}`)
    }

    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении ответа от сервера. 
      Попробуйте сделать запрос позже. Status: ${res.status}`)
    }

    return res.json()
  }

  async addProduct(data, token) {
    this.checkToken(token)
    const res = await fetch(`${this.baseUrl}/products`, {
      method: 'POST',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.status >= 400) {
      // eslint-disable-next-line max-len
      throw new Error(`${res.status}: Произошла ошибка при сохранении информации о товаре. ${res.statusText}.`)
    }
    return res.json()
  }

  async getProductById(productId, token) {
    this.checkToken(token)

    const res = await fetch(`${this.baseUrl}/products/${productId}`, {
      headers: {
        authorization: this.getAuthorizationHeader(token),
      },
    })

    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при входе в Личный кабинет. 
      Проверьте отправляемые данные. Status: ${res.status}`)
    }

    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении ответа от сервера. 
      Попробуйте сделать запрос позже. Status: ${res.status}`)
    }

    return res.json()
  }

  async getProductsByIds(ids, token) {
    this.checkToken(token)
    return Promise.all(ids.map(
      (id) => fetch(`${this.baseUrl}/products/${id}`, {
        headers: {
          authorization: this.getAuthorizationHeader(token),
        },
      })
        .then((res) => res.json()),
    ))
  }
}

export const dogFoodApi = new DogFoodApi({ baseUrl: 'https://api.react-learning.ru' })
