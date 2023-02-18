import { useDispatch, useSelector } from 'react-redux'
import {
  addNewProduct,
  deleteProduct,
  getAllCartProductsSelector,
} from '../../../redux/slices/cartSlice'
import productsStyles from './Product.module.css'

export const Product = ({
  pictures, wight, price, name, id,
}) => {
  const cartProducts = useSelector(getAllCartProductsSelector)

  const dispatch = useDispatch()
  const moveToCartHandler = () => {
    dispatch(addNewProduct(id))
  }
  const removeFromCartHandler = () => {
    dispatch(deleteProduct(id))
  }
  const isInCart = (productListId) => cartProducts.find((product) => product.id === productListId)

  return (
    <div className={productsStyles.prodactContainerCard}>
      <div className={productsStyles.styleForm}>
        <div className={productsStyles.productImg}>
          <img src={pictures} alt="" />
        </div>
        <h2 className={productsStyles.h2}>
          {price}
          &nbsp;&#8381;
        </h2>
        <p>{wight}</p>
        <h4 className={productsStyles.h4Name}>{name}</h4>
        {/* <p>{likes}</p> */}
        {/* <p className={productsStyles.descriptionCardPorduct}>{description}</p> */}
        <div className={productsStyles.styleButtonCardProduct}>
          <button type="submit" onClick={isInCart(id) ? removeFromCartHandler : moveToCartHandler}>
            {isInCart(id) ? 'В корзине' : 'В корзину'}
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
