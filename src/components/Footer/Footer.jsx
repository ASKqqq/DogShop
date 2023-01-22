/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import footerStyles from './Footer.module.css'
import logo from '../../img/logo.png'
import telegramm from '../../img/telegramm.png'
import vk from '../../img/vk.png'

export const Footer = () => (
  <footer>
    <div className="container">
      <div className={footerStyles.footer__container}>
        <div className={footerStyles.footer__group}>
          <img src={logo} alt="logo" />
          <h3>DOG SHOP</h3>
        </div>

        <div className={footerStyles.footer__group}>
          <div className={footerStyles.footer__links}>
            <nav className={footerStyles.nav}>
              <ul>
                <li>
                  <Link to="/products">Каталог</Link>
                </li>
                <li>
                  <Link to="#">Акции</Link>
                </li>
                <li>
                  <Link to="#">Новости</Link>
                </li>
                <li>
                  <Link to="#">Отзывы</Link>
                </li>
                <li>
                  <Link to="#">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={footerStyles.footer__group}>
          <h3>Мы на связи</h3>
          <div className={footerStyles.tel}>
            <a href="tel:74959999999">+7 (495) 999-99-99</a>
          </div>
          <div className={footerStyles.footer__links}>
            <div className={footerStyles.mess}>
              <Link to="#">
                <img src={telegramm} alt="logo" />
              </Link>
              <Link to="#">
                <img src={vk} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
