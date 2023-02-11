import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
// import { useQueryContext } from '../../../context/QueryContextProvider'
import { getUserSelector } from '../../../redux/slices/userSlise'
import { Loader } from '../../Loader/Loader'
import { Product } from '../Product/Product'
import productPageStyles from './ProductsPage.module.css'

// export const ProductsPage = () => <h1>This page will have products</h1>

export function ProductsPage() {
  // const { token } = useQueryContext()
  const { token } = useSelector(getUserSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])

  const { data, error, isLoading } = useQuery({
    queryKey: ['products', token],
    queryFn: () => dogFoodApi.getAllProducts(token),
    enabled: token !== undefined,
  })

  if (error) {
    return (
      <p>
        Произошла ошибка:
        {' '}
        {error.message}
      </p>
    )
  }

  if (isLoading) {
    return <p><Loader /></p>
  }

  // if (data === undefined) {
  //   return <p>Empty content</p>
  // }

  return (

    <div className={productPageStyles.productsContainer}>
      {data.products.map(({ _id: id, ...restProduct }) => (
        <Product {...restProduct} id={id} key={id} />
      ))}
    </div>
  )
}
