/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </>
  )
}

export default App
