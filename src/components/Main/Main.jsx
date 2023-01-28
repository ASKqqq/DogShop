import { Link, Outlet } from 'react-router-dom'
import mainStyles from './Main.module.css'

export const Main = () => (
  <div className={mainStyles.main}>
    <h1>Добро пожаловать в наш магазин</h1>
    <Link to="./products">Наши товары</Link>
    <Outlet />
  </div>
)
