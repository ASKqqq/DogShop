// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup'

export const validatorSingIp = Yup.object({
  email: Yup.string().email('Введите корректный адрес почты').required('Обязателоьное поле.'),
  password: Yup.string()
    .required('Введите пароль.')
    .min(8, 'Пароль слишком короткий - минимум 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.'),
})
