import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { setNewUser } from '../../../redux/slices/userSlise'
import { Loader } from '../../Loader/Loader'
// import { Loader } from '../../Loader/Loader'
import regStyles from './Autentification.module.css'
import { validatorSingIp } from './validatorSingIn'

const initialValues = {
  email: '',
  password: '',
}

export const AutentificationPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    mutateAsync, isLoading, isError, error,
  } = useMutation({
    mutationFn: (values) => dogFoodApi.signIn(values).then((user) => {
      // eslint-disable-next-line no-underscore-dangle
      dispatch(setNewUser(user.data._id, user.token, user.data.email))
    }),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => {
      navigate('/products')
    })
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
            Sign In
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
