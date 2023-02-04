// eslint-disable-next-line import/no-extraneous-dependencies
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { useQueryContext } from '../../context/QueryContextProvider'
import logo from '../../img/logo.png'
import headerStayles from './Header.module.css'

export const Header = () => {
  const { deleteToken, token } = useQueryContext()
  return (
    <header>
      <div className="container">
        <div className={headerStayles.wrapper}>
          <div className={headerStayles.wraplogo}>
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <p>aaaaa</p>
          <nav className={headerStayles.nav}>
            <li>
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
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
