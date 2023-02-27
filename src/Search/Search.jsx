import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../components/hooks/useDebounce'
import { changeSearchFilter } from '../redux/slices/filterSlice'
import searchStayles from './Search.module.css'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(() => {
    const searchValueFromQuery = searchParams.get('q')
    return searchValueFromQuery ?? ''
  })

  const dispatch = useDispatch()

  const debouncedSearchValue = useDebounce(search, 1000)

  const searchHandler = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
    setSearchParams({
      q: searchValue,
    })
  }

  useEffect(() => {
    dispatch(changeSearchFilter(debouncedSearchValue))
  }, [dispatch, debouncedSearchValue])

  return (
    <input
      placeholder="Найти товар..."
      type="search"
      className={`form-control ${searchStayles.border}`}
      style={{ width: '500px' }}
      value={search}
      onChange={searchHandler}
    />
  )
}

export default Search
