/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getQueryCartKey } from '../ProductsPage/utils'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { getTokenSelector } from '../../../redux/slices/userSlise'
import { Loader } from '../../Loader/Loader'
import FavoriteStyles from './Favorite.module.css'
import { getAllFavoriteProductsSelector } from '../../../redux/slices/favoriteSlice'
import FavoriteItem from './FavoriteItem'

function Favorites() {
  const favorites = useSelector(getAllFavoriteProductsSelector)
  const token = useSelector(getTokenSelector)
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])
  const {
    data: favoriteProducts, isLoading, isError, error,
  } = useQuery({
    queryKey: getQueryCartKey(favorites.length),
    queryFn: () => dogFoodApi.getProductsByIds(favorites, token),
    enabled: !!(token),
  })
  if (isLoading) return <Loader />
  if (isError) return <p>{`${error} `}</p>

  if (!favoriteProducts.length) {
    return (
      <div className={FavoriteStyles.CartPage}>
        <h1 className={FavoriteStyles.header}>Избранное</h1>
        <div className={FavoriteStyles.containerEmpty}>
          <h3>Здесь пока ничего нет</h3>
          <Link to="/products">Наши товары</Link>
          <Link to="/profile">Личный кабинет</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={FavoriteStyles.CartPage}>
      {/* <div className={FavoriteStyles.cartContent}>
   <div className={FavoriteStyles.cartItems}> */}

      {favoriteProducts.map((item) => (
        <FavoriteItem
          key={item._id}
          id={item._id}
          name={item.name}
          price={item.price}
          pictures={item.pictures}
          stock={item.stock}
          discount={item.discount}
          description={item.description}
        />
      ))}
    </div>
  //   </div>
  // </div>
  )
}

export default Favorites
