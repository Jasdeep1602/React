import React from 'react'
import ReactDOM from 'react-dom/client'
import Calls from './components/Calls'
import Header from './components/Header'

import Cart from './components/Cart'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Calls />
      <Cart />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
