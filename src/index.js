import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ProductsPage } from './components/Pages/ProductsPage/ProductsPage'
import { RegistrationPage } from './components/Pages/RegistrationPage/RegistrationPage'
import { AutentificationPage } from './components/Pages/AutentificationPage/AutentificationPage'
import { Main } from './components/Main/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'signup',
        element: <RegistrationPage />,
      },
      {
        path: 'signin',
        element: <AutentificationPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
