import classNames from 'classnames'
import regStyles from './Registration.module.css'

export const RegistrationPage = () => (
  <div className="container">
    <form>
      <div className={regStyles.group}>
        <input type="email" placeholder="name@example.com" />
        <span className={regStyles.highlight} />
        <span className="bar" />
      </div>
      <div className={regStyles.group}>
        <input type="text" placeholder="sm9" />
        <span className={regStyles.highlight} />
        <span className="bar" />
      </div>
      <div className={regStyles.group}>
        <input type="password" placeholder="password here" />
        <span className={regStyles.highlight} />
        <span className="bar" />
      </div>
      <button
        type="button"
        className={classNames(regStyles.button, regStyles.buttonBlue)}
      >
        Sign Up
        <div className={classNames(regStyles.ripples, regStyles.buttonRipples)}>
          <span className={regStyles.ripplesCircle} />
        </div>
      </button>
    </form>
  </div>
)
