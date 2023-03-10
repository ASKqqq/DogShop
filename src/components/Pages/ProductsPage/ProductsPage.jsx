import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { getSearchSelector } from '../../../redux/slices/filterSlice'
import { getTokenSelector } from '../../../redux/slices/userSlise'
import Search from '../../../Search/Search'
import { withQuery } from '../../HOCs/withQuery'
import { Product } from '../Product/Product'
import productPageStyles from './ProductsPage.module.css'
import { getQueryKey } from './utils'

function ProductsInner({ data }) {
  if (data) {
    return (
      <>
        <div className={productPageStyles.searchBtn}>
          <Search />
          <button type="button">Добавить товар</button>
        </div>
        <div className={productPageStyles.productsContainer}>
          {data.products.map(({ _id: id, ...restProduct }) => (
            <Product {...restProduct} id={id} key={id} />
          ))}
        </div>
      </>
    )
  }
}
const ProductsInnerWithQuery = withQuery(ProductsInner)

export const ProductsPage = () => {
  const token = useSelector(getTokenSelector)
  const navigate = useNavigate()
  const search = useSelector(getSearchSelector)

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])

  const {
    data, isError, error, isLoading, refetch, isFetching,
  } = useQuery({
    queryKey: getQueryKey(search),
    queryFn: () => dogFoodApi.getAllProducts(search, token),
    enabled: !!token,
    keepPreviousData: true,
  })

  return (
    <ProductsInnerWithQuery
      data={data}
      isError={isError}
      isLoading={isLoading}
      error={error}
      refetch={refetch}
      isFetching={isFetching}
    />
  )
}
