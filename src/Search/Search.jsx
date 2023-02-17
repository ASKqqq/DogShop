import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from '../components/hooks/useDebounce'
import { changeSearchFilter } from '../redux/slices/filterSlice'
import searchStayles from './Search.module.css'

function Search() {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const debouncedSearchValue = useDebounce(search, 1000)

  const searchHandler = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
  }

  useEffect(() => {
    dispatch(changeSearchFilter(debouncedSearchValue))
  }, [dispatch, debouncedSearchValue])

  return (
    <input
      placeholder="Найти товар..."
      type="search"
      className={`form-control ${searchStayles.border}`}
      style={{ width: '500px', margin: '24px auto' }}
      value={search}
      onChange={searchHandler}
    />
  )
}

export default Search
