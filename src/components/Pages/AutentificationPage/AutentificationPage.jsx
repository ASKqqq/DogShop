import classNames from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import regStyles from './Autentification.module.css'
import { validatorSingIp } from './validatorSingIn'

const initialValues = {
  email: '',
  password: '',
}

export const AutentificationPage = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validatorSingIp}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    <Form>
      <div className="container">
        <div className={regStyles.group}>
          <Field name="email" type="email" placeholder="name@example.com" />
          <ErrorMessage name="email" />
          <span className={regStyles.highlight} />
          <span className="bar" />
        </div>
        <div className={regStyles.group}>
          <Field name="password" placeholder="password here" />
          <ErrorMessage name="password" />
          <span className={regStyles.highlight} />
          <span className="bar" />
        </div>
        <button
          type="button"
          className={classNames(regStyles.button, regStyles.buttonBlue)}
        >
          Sign Ip
          <div
            className={classNames(regStyles.ripples, regStyles.buttonRipples)}
          >
            <span className={regStyles.ripplesCircle} />
          </div>
        </button>
      </div>
    </Form>
  </Formik>
)
