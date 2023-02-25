// eslint-disable-next-line import/no-extraneous-dependencies
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
// import { useQueryContext } from '../../context/QueryContextProvider'
import logo from '../../img/logo.png'
import { getAllCartProductsSelector } from '../../redux/slices/cartSlice'
import { getAllFavoriteProductsSelector } from '../../redux/slices/favoriteSlice'
import { getTokenSelector, logOut } from '../../redux/slices/userSlise'
import { Counter } from './Counter/Counter'
import headerStayles from './Header.module.css'

export const Header = () => {
  const token = useSelector(getTokenSelector)
  const cart = useSelector(getAllCartProductsSelector)
  const favorites = useSelector(getAllFavoriteProductsSelector)
  const dispatch = useDispatch()
  const deleteToken = () => {
    dispatch(logOut())
  }
  return (
    <header>
      <div className="container">
        <div className={headerStayles.wrapper}>
          <div className={headerStayles.wraplogo}>
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <nav className={headerStayles.nav}>
            <li>
              {/* <div className={headerStayles.like}> */}
              {!favorites.length ? (
                <NavLink to="/favorites">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="xl"
                    className={headerStayles.like}
                  />
                </NavLink>
              ) : ''}
              {favorites.length ? (
                <NavLink to="/favorites">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="xl"
                    style={{ color: 'red' }}
                  />
                </NavLink>
              ) : ''}
              {/* </div> */}
            </li>
            <li>
              <div className={headerStayles.counter}>
                <NavLink to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} size="xl" />
                  {cart.length ? <Counter count={cart.length} /> : null}
                </NavLink>
              </div>
            </li>
            <div>
              {token ? (
                <li>
                  <NavLink to="/signin" onClick={deleteToken}>
                    Выйти
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/signin">Войти</NavLink>
                </li>
              )}
            </div>
            {token ? (
              <li>
                <NavLink to="/profile">Профиль</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/signup">Регистрация</NavLink>
              </li>
            )}
            {/* <li>
              <Link to="/signup">Регистрация</Link>
            </li> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
