import { QuantityController } from './QuantityController/QuantityController'
import FavoriteStyles from './FavoriteItem.module.css'

function FavoriteItem({
  name,
  pictures,
  price,
  discount,
  id,
  stock,
  wight,
  count,
}) {
  // const cartProducts = useSelector(getAllCartProductsSelector)
  // const dispatch = useDispatch()

  // const deleteProductHandler = () => {
  //   dispatch(deleteProduct(id))
  // }

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
          <p
            style={{ textDecoration: 'line-through', color: 'gray' }}
          >
            {price}
            ₽
          </p>
        )}
        <p className={FavoriteStyles.weight}>{wight}</p>
        <div className={FavoriteStyles.btnWr}>
          <button type="button" className={FavoriteStyles.btn}>
            В избранное
          </button>
          <button type="button" className={FavoriteStyles.btn}>
            Удалить
          </button>
        </div>
      </div>
      <div className={FavoriteStyles.quantityControllerWr}>
        <QuantityController id={id} stock={stock} count={count} />
        <div className={FavoriteStyles.available}>
          В наличии
          {' '}
          {stock}
          {' '}
          штук
        </div>
      </div>
    </div>
  )
}

export default FavoriteItem
