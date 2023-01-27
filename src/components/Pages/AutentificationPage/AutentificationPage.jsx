import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { useQueryContext } from '../../../context/QueryContextProvider'
import regStyles from './Autentification.module.css'
import { validatorSingIp } from './validatorSingIn'

const initialValues = {
  email: '',
  password: '',
}

export const AutentificationPage = () => {
  const navigate = useNavigate()

  const { setToken } = useQueryContext()

  const { mutateAsync, isLoading } = useMutation({ mutationFn: (data) => dogFoodApi.signIn(data) })

  const submitHandler = async (values) => {
    const response = await mutateAsync(values)
    const { token } = response
    setToken(token)
    setTimeout(() => {
      navigate('/products')
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validatorSingIp}
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
            <Field name="password" placeholder="password here" />
            <ErrorMessage name="password" />
            <span className={regStyles.highlight} />
            <span className="bar" />
          </div>
          <button
            disabled={isLoading}
            type="submit"
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
}
