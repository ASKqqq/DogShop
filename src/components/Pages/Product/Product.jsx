import productsStyles from './Product.module.css'

export function Product({
  pictures, wight, price, name,
}) {
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
          <button type="submit">В корзину</button>
          {/* <button type="submit">Купить</button> */}
        </div>
      </div>
    </div>
  )
}
