import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNewProduct,
  deleteProduct,
  getAllCartProductsSelector,
} from '../../../redux/slices/cartSlice'
import {
  addFavorite, getAllFavoriteProductsSelector, removeFavorite,
} from '../../../redux/slices/favoriteSlice'
import productsStyles from './Product.module.css'

export function Product({
  pictures, wight, price, name, id, discount,
}) {
  const cartProducts = useSelector(getAllCartProductsSelector)
  const favorites = useSelector(getAllFavoriteProductsSelector)
  const dispatch = useDispatch()
  const moveToCartHandler = () => {
    dispatch(addNewProduct(id))
  }
  const removeFromCartHandler = () => {
    dispatch(deleteProduct(id))
  }

  const addFavoriteHandler = () => {
    dispatch(addFavorite(id))
  }

  const removeFromFavoriteHandler = () => {
    dispatch(removeFavorite(id))
  }

  const isInCart = (productListId) => cartProducts.find((product) => product.id === productListId)

  return (
    <div className={productsStyles.prodactContainerCard}>
      <div className={productsStyles.styleForm}>
        {/* <li> */}
        <div className={productsStyles.like}>
          {favorites.includes(id) && (
          <FontAwesomeIcon
            icon={faHeart}
            size="xl"
            style={{ color: 'red' }}
            onClick={removeFromFavoriteHandler}
          />
          )}
          {!favorites.includes(id) && (
          <FontAwesomeIcon
            icon={faHeart}
            size="xl"
            style={{ color: 'yellow' }}
            onClick={addFavoriteHandler}
          />
          )}
        </div>
        {/* </li> */}
        <div className={productsStyles.productImg}>
          <img src={pictures} alt="" />
        </div>
        <div className={productsStyles.price}>
          <h4 className={productsStyles.h4}>
            {price}
          &nbsp;&#8381;
          </h4>
          {discount > 0 && (
          <p className={productsStyles.discount}>
            -
            {' '}
            {discount}
            {' '}
            %
          </p>
          )}
        </div>
        <p>{wight}</p>
        <h6 className={productsStyles.h4Name}>{name}</h6>
        {/* <p>{likes}</p> */}
        {/* <p className={productsStyles.descriptionCardPorduct}>{description}</p> */}
        <div className={productsStyles.styleButtonCardProduct}>
          <button type="submit" onClick={isInCart(id) ? removeFromCartHandler : moveToCartHandler}>
            {isInCart(id) ? 'В корзине' : 'В корзину'}
          </button>
          <button type="submit">
            Подробнее
          </button>
          {/* <button type="submit">В корзину</button> */}
          {/* <button type="submit">Купить</button> */}
        </div>
      </div>
    </div>
  )
}

// {isInCart(id) ? (
//   <button type="submit" onClick={moveToCartHandler}>
//     В корзине
//   </button>
// ) : (
//   <button type="submit" onClick={removeFromCartHandler}>
//     В корзину
//   </button>
// )}
