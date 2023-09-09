import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = <h1 className='heading'>Hello</h1>

const HeadingComp = () => <h1 className='heading'>Hello World</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render([heading, <HeadingComp />])
