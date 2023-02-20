import { useDispatch } from 'react-redux'
import {
  changeIsPickProduct,
  deleteProduct,
} from '../../../redux/slices/cartSlice'
import { QuantityController } from './QuantityController/QuantityController'
import CartItemStyles from './CartItem.module.css'

function CartItem({
  name,
  pictures,
  price,
  discount,
  id,
  stock,
  wight,
  isPicked,
  count,
}) {
  const dispatch = useDispatch()
  const deleteProductHandler = () => {
    dispatch(deleteProduct(id))
  }
  const selectProductHandler = () => {
    dispatch(changeIsPickProduct(id))
  }
  return (
    <div className={CartItemStyles.card}>
      <div className={CartItemStyles.selectWr}>
        <input
          type="checkbox"
          name="select"
          id=""
          checked={isPicked}
          onChange={selectProductHandler}
        />
      </div>
      <div className={CartItemStyles.imageWr}>
        <img src={pictures} alt="Фото товара" />
      </div>
      <div className={CartItemStyles.cardContent}>
        <p className={CartItemStyles.name}>{name}</p>
        <p className={CartItemStyles.price}>
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
        <p className={CartItemStyles.weight}>{wight}</p>
        <div className={CartItemStyles.btnWr}>
          <button type="button" className={CartItemStyles.btn}>
            В избранное
          </button>
          <button type="button" className={CartItemStyles.btn} onClick={deleteProductHandler}>
            Удалить
          </button>
        </div>
      </div>
      <div className={CartItemStyles.quantityControllerWr}>
        <QuantityController id={id} stock={stock} count={count} />
        <div className={CartItemStyles.available}>
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

export default CartItem
