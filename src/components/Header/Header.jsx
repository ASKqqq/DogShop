// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import headerStayles from './Header.module.css'

export const Header = () => (
  <header>
    <div className="container">
      <div className={headerStayles.wrapper}>
        <div className={headerStayles.wraplogo}>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <nav className={headerStayles.nav}>
          <ul>
            <li>
              <Link to="/signin">Войти</Link>
            </li>
            <li>
              <Link to="/signup">Регистрация</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)
