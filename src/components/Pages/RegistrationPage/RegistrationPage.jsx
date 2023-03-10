import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { Loader } from '../../Loader/Loader'
import regStyles from './Registration.module.css'
import { validatorSingUp } from './validatorSingUp'

const initialValues = {
  email: '',
  group: '',
  password: '',
}

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const {
    mutateAsync, isError, error, isLoading,
  } = useMutation({
    mutationFn: (values) => dogFoodApi.signUp(values),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    navigate('/signin')
  }

  if (isError) {
    return (
      <p>
        Произошла ошибка:
        {' '}
        {error.message}
      </p>
    )
  }

  if (isLoading) {
    return <p><Loader /></p>
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validatorSingUp}
      onSubmit={submitHandler}
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
            <Field name="password" placeholder="password here" type="password" />
            <ErrorMessage name="password" />
            <span className={regStyles.highlight} />
            <span className="bar" />
          </div>
          <button
            disabled={isLoading}
            type="submit"
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
}
