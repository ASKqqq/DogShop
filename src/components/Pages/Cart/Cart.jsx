/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getQueryCartKey } from '../ProductsPage/utils'
import { dogFoodApi } from '../../../api/DogFoodApi'
import {
  clearCart,
  getAllCartProductsSelector,
  notPickAllProducts,
  pickAllProducts,
} from '../../../redux/slices/cartSlice'
import { getTokenSelector } from '../../../redux/slices/userSlise'
import CartItem from './CartItem'
import { Loader } from '../../Loader/Loader'
import CartStyles from './Cart.module.css'

function Cart() {
  const cart = useSelector(getAllCartProductsSelector)
  const token = useSelector(getTokenSelector)
  const dispatch = useDispatch()
  const {
    data: cartProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: getQueryCartKey(cart.length),
    queryFn: () => dogFoodApi.getProductsByIds(
      cart.map((product) => product.id),
      token,
    ),
    enabled: !!token,
  })
  const clearCartHandler = () => {
    dispatch(clearCart())
  }
  const isAllCardPicked = () => cart.filter((item) => item.isPicked === true).length === cart.length
  const findAllPickedProducts = () => {
    const allPickedProducts = []
    cart.forEach((item) => {
      if (item.isPicked === true) allPickedProducts.push(item)
    })
    return allPickedProducts
  }

  const getCartProductById = (idItem) => cartProducts.find((product) => product._id === idItem)
  // const getCartStateProductById = (idItem) => cart.find((product) => product.id === idItem)
  const pickAllProductsHandler = () => {
    if (!isAllCardPicked()) dispatch(pickAllProducts())
    else dispatch(notPickAllProducts())
  }
  const calculateSum = () => findAllPickedProducts().reduce((sum, product) => {
    const updatedSum = sum + product.count * getCartProductById(product.id).price
    return Math.ceil(updatedSum)
  }, 0)
  const calculateDiscount = () => findAllPickedProducts().reduce((sum, product) => {
    const updatedSum = sum
        + product.count
          * getCartProductById(product.id).price
          * (getCartProductById(product.id).discount / 100)
    return Math.ceil(updatedSum)
  }, 0)
  const calculateSumWithDiscount = () => findAllPickedProducts().reduce((sum, product) => {
    const updatedSum = sum
        + product.count
          * getCartProductById(product.id).price
          * ((100 - getCartProductById(product.id).discount) / 100)
    return Math.ceil(updatedSum)
  }, 0)
  if (isLoading) return <Loader />
  if (isError) return <p>{`${error} `}</p>

  if (!cartProducts.length) {
    return (
      <div className={CartStyles.CartPage}>
        <h1 className={CartStyles.header}>Корзина</h1>
        <div className={CartStyles.containerEmpty}>
          <h3>Здесь пока ничего нет</h3>
          <Link to="/products">Наши товары</Link>
          <Link to="/profile">Личный кабинет</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={CartStyles.CartPage}>
      <h1 className={CartStyles.header}>Корзина</h1>
      <div className={CartStyles.cartContent}>
        <div className={CartStyles.cartItems}>
          <div className={CartStyles.selectAllWr}>
            <label htmlFor="checkAll">
              <input
                type="checkbox"
                name=""
                id="checkAll"
                onChange={pickAllProductsHandler}
                checked={isAllCardPicked()}
              />
              {' '}
              {isAllCardPicked() ? 'Снять выделение' : 'Выбрать все'}
            </label>
            <button
              type="button"
              className={CartStyles.btn}
              onClick={clearCartHandler}
            >
              Удалить выбранные
            </button>
          </div>
          <div className={CartStyles.container}>
            {cartProducts.map(({ _id: id, ...restProduct }) => (
              <CartItem {...restProduct} id={id} key={id} />
            ))}
          </div>
        </div>
        <div className={CartStyles.cartTotals}>
          <h4>Условия заказа</h4>
          <div className={CartStyles.cartTotal}>
            <div>
              <span className={CartStyles.bold}>Итого: </span>
              {calculateSum}
              {' '}
              товаров
            </div>
            <div>
              <span className={CartStyles.bold}>Сумма без скидки: </span>
              {calculateSumWithDiscount}
              {' '}
              рублей
            </div>
            <div>
              <span className={CartStyles.bold}>Скидка: </span>
              {calculateDiscount}
              {' '}
              рублей
            </div>
            <div>
              <span className={CartStyles.bold}>
                Сумма заказа со скидками:
                {' '}
              </span>
              {111}
              {' '}
              рублей
            </div>
          </div>
          <button type="button" className="btn btn-action">
            Оформить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
