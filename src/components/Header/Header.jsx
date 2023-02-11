// eslint-disable-next-line import/no-extraneous-dependencies
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
// import { useQueryContext } from '../../context/QueryContextProvider'
import logo from '../../img/logo.png'
import { getUserSelector, logOut } from '../../redux/slices/userSlise'
import headerStayles from './Header.module.css'

export const Header = () => {
  // const { deleteToken, token } = useQueryContext()
  const token = useSelector(getUserSelector)
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
          <div className={headerStayles.inputfind}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="find..."
            />
          </div>
          <nav className={headerStayles.nav}>
            <li>
              <div className={headerStayles.counter}>
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                <span
                  className="top-0 start-100
              translate-middle badge rounded-pill bg-danger"
                >
                  4
                </span>
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
            <li>
              <Link to="/signup">Регистрация</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  )
}
