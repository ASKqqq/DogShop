import classNames from 'classnames'
import autStyles from './Autentification.module.css'

export const AutentificationPage = () => (
  <div className="container">
    <form>
      <div className={autStyles.group}>
        <input type="email" placeholder="name@example.com" />
        <span className={autStyles.highlight} />
        <span className="bar" />
      </div>
      <div className={autStyles.group}>
        <input type="password" placeholder="password here" />
        <span className={autStyles.highlight} />
        <span className="bar" />
      </div>
      <button
        type="button"
        className={classNames(autStyles.button, autStyles.buttonBlue)}
      >
        Sign In
        <div className={classNames(autStyles.ripples, autStyles.buttonRipples)}>
          <span className={autStyles.ripplesCircle} />
        </div>
      </button>
    </form>
  </div>
)
