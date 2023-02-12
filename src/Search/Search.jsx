import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeSearchFilter } from '../redux/slices/filterSlice'

export const Search = () => {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const searchHandler = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
    dispatch(changeSearchFilter(searchValue))
  }

  return <input placeholder="Найти товар..." type="text" value={search} onChange={searchHandler} />
}
