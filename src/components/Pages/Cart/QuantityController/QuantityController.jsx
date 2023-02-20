import { useDispatch } from 'react-redux'
import { productDecrement, productIncrement } from '../../../../redux/slices/cartSlice'
import QuantityControllerStyles from './QuantityController.module.css'

export function QuantityController({ id, stock, count }) {
  const dispatch = useDispatch()
  // const cart = useSelector(getAllCartProductsSelector)
  const incrementCountHandler = () => {
    dispatch(productIncrement(id))
  }
  const decrementCountHandler = () => {
    dispatch(productDecrement(id))
  }
  return (
    <div className={QuantityControllerStyles.container}>
      <div className={QuantityControllerStyles.btnWr}>
        <button
          type="button"
          className={QuantityControllerStyles.btn}
          onClick={decrementCountHandler}
          disabled={count === 1}
        >
          -
        </button>
        <p className={QuantityControllerStyles.count}>{count}</p>
        <button
          type="button"
          className={QuantityControllerStyles.btn}
          onClick={incrementCountHandler}
          disabled={count === stock}
        >
          +
        </button>
      </div>
    </div>
  )
}
