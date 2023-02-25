import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut, getTokenSelector } from '../../../redux/slices/userSlise'
import { dogFoodApi } from '../../../api/DogFoodApi'
import ProfileStyles from './Profile.module.css'
import { withQuery } from '../../HOCs/withQuery'

function ProfileInner({ user, isLoading }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logOut())
    navigate('/')
  }
  const productsPageHandler = () => {
    navigate('/products')
  }
  const cartPageHandler = () => {
    navigate('/cart')
  }
  return (
    <div className={ProfileStyles.Profile}>
      <h1>Личный кабинет</h1>
      <div className={ProfileStyles.container}>
        <p>
          <img
            src={user.avatar}
            alt="аватар"
            width="200"
          />
        </p>
        <p>{user.name}</p>
        <p>
          Группа:
          {' '}
          {user.group}
        </p>
        <p>
          Статус:
          {' '}
          {user.about}
        </p>
        <p>
          Email:
          {' '}
          {user.email}
        </p>
        <div className={ProfileStyles.btnWr}>
          <button
            type="button"
            className={ProfileStyles.btn}
            onClick={productsPageHandler}
          >
            В каталог
          </button>
          <button
            type="button"
            className={ProfileStyles.btn}
          >
            В избранное
          </button>
          <button
            type="button"
            className={ProfileStyles.btn}
            onClick={cartPageHandler}
          >
            В корзину
          </button>
        </div>
        <button
          className={ProfileStyles.btnExit}
          disabled={isLoading}
          type="button"
          // className={ProfileStyles.btn}
          onClick={logoutHandler}
        >
          Выйти
        </button>
      </div>
    </div>
  )
}

const ProfileInnerWithQuery = withQuery(ProfileInner)

export function Profile() {
  const token = useSelector(getTokenSelector)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])
  const {
    data: user,
    isError,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['currentUser', token],
    queryFn: () => dogFoodApi.getUser(token),
  })

  return (
    <ProfileInnerWithQuery
      user={user}
      refetch={refetch}
      isError={isError}
      isLoading={isLoading}
      error={error}
      isFetching={isFetching}
    />
  )
}
