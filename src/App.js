import React from 'react'
import ReactDOM from 'react-dom/client'
import Calls from './components/Calls'
import New from './components/New'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='app'>
      <Calls />
      <New />
      <Cart />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
