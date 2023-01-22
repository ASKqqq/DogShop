import classNames from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import regStyles from './Registration.module.css'
import { validatorSingUp } from './validatorSingUp'

const initialValues = {
  email: '',
  group: '',
  password: '',
}

export const RegistrationPage = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validatorSingUp}
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
          <Field name="group" placeholder="sm9" />
          <ErrorMessage name="group" />
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
          Sign Up
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
// <div className="container">
//   <form>
//     <div className={regStyles.group}>
//       <input type="email" placeholder="name@example.com" />
//       <span className={regStyles.highlight} />
//       <span className="bar" />
//     </div>
//     <div className={regStyles.group}>
//       <input type="text" placeholder="sm9" />
//       <span className={regStyles.highlight} />
//       <span className="bar" />
//     </div>
//     <div className={regStyles.group}>
//       <input type="password" placeholder="password here" />
//       <span className={regStyles.highlight} />
//       <span className="bar" />
//     </div>
//     <button
//       type="button"
//       className={classNames(regStyles.button, regStyles.buttonBlue)}
//     >
//       Sign Up
//       <div className={classNames(regStyles.ripples, regStyles.buttonRipples)}>
//         <span className={regStyles.ripplesCircle} />
//       </div>
//     </button>
//   </form>
// </div>