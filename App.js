import React from 'react'
import ReactDOM from 'react-dom/client'

const Main = (props) => {
  return (
    <>
      <h1>{props.data.name}</h1>
      <h1>{props.data.class}</h1>
      {/* {props.data.map((value, key) => {
        return <h1 key={key}>{[value.name, value.class]}</h1>
      })} */}
    </>
  )
}

const data = [
  {
    id: '1',
    name: 'jasdeep',
    class: 'bca',
  },
  { id: '2', name: 'singh', class: 'ba' },
]

const HeadingComp = () => {
  return (
    <>
      <h1 className='heading'>Hello World</h1>
      {data.map((data) => (
        <Main key={data.id} data={data} />
      ))}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComp />)
