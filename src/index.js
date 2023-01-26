import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
