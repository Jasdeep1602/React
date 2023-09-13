import React from 'react'
import ReactDOM from 'react-dom/client'
import Calls from './components/Calls'
import New from './components/New'

const App = () => {
  return (
    <div className='app'>
      <Calls />
      <New />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
