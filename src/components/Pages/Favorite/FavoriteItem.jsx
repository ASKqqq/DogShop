import { useDispatch, useSelector } from 'react-redux'
import {
  addNewProduct,
  deleteProduct,
  getAllCartProductsSelector,
} from '../../../redux/slices/cartSlice'
import { removeFavorite } from '../../../redux/slices/favoriteSlice'
import FavoriteStyles from './FavoriteItem.module.css'

function FavoriteItem({
  name, pictures, price, discount, wight, id, description, stock,
}) {
  const cartProducts = useSelector(getAllCartProductsSelector)
  const dispatch = useDispatch()

  const removeFromFavoriteHandler = () => {
    dispatch(removeFavorite(id))
  }
  const moveToCartHandler = () => {
    dispatch(addNewProduct(id))
  }
  const removeFromCartHandler = () => {
    dispatch(deleteProduct(id))
  }

  const isInCart = (productListId) => cartProducts.find((product) => product.id === productListId)

  return (
    <div className={FavoriteStyles.card}>
      <div className={FavoriteStyles.imageWr}>
        <img src={pictures} alt="Фото товара" />
      </div>
      <div className={FavoriteStyles.cardContent}>
        <p className={FavoriteStyles.name}>{name}</p>
        <p className={FavoriteStyles.price}>
          {discount > 0 && `${(price * (100 - discount)) / 100} ₽`}
          {discount === 0 && `${price} ₽`}
        </p>
        {discount > 0 && (
          <p style={{ textDecoration: 'line-through', color: 'gray' }}>
            {price}
            ₽
          </p>
        )}
        <p className={FavoriteStyles.weight}>{wight}</p>
        <p>
          В наличии
          {' '}
          {stock}
          {' '}
          штук
        </p>
        <p>{description}</p>
        <div className={FavoriteStyles.btnWr}>
          <button
            type="submit"
            className={FavoriteStyles.btn}
            onClick={isInCart(id) ? removeFromCartHandler : moveToCartHandler}
          >
            {isInCart(id) ? 'В корзине' : 'В корзину'}
          </button>
          <button
            type="button"
            className={FavoriteStyles.btn}
            onClick={removeFromFavoriteHandler}
          >
            Удалить
          </button>
        </div>
      </div>
      {/* <div className={FavoriteStyles.quantityControllerWr}>
        <QuantityController id={id} stock={stock} count={count} />
        <div className={FavoriteStyles.available}>
          В наличии
          {' '}
          {stock}
          {' '}
          штук
        </div>
      </div> */}
    </div>
  )
}

export default FavoriteItem
