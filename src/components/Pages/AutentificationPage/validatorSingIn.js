// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup'

export const validatorSingIp = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})
