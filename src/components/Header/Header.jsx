// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/signin">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Регистрация</Link>
        </li>
      </ul>
    </nav>
  </header>
)
