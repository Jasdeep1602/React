import React from 'react'
import ReactDOM from 'react-dom/client'
//    <div id='parent'>
//     <div id='child'>
//         <h1>I am h1</h1>
//         <h2>I am h2</h2>
//     </div>
// </div>

// ReactElement(object) => HTML(browser Understands)
// render converts parent to html

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am h1'),
    React.createElement('h2', {}, 'I am h2'),
  ])
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
