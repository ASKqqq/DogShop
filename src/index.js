import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux'
import App from './App'
import { ProductsPage } from './components/Pages/ProductsPage/ProductsPage'
import { RegistrationPage } from './components/Pages/RegistrationPage/RegistrationPage'
import { AutentificationPage } from './components/Pages/AutentificationPage/AutentificationPage'
import { Main } from './components/Main/Main'
import { store } from './redux/store'
import Cart from './components/Pages/Cart/Cart'
import { Profile } from './components/Pages/Profile/Profile'
import Favorites from './components/Pages/Favorite/Favorite'

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
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
