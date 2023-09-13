import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'

export default function Cards() {
  const [data, setData] = useState([])
  // const [fil, setFil] = useState([])
  // const [check, setCheck] = useState(false)

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log('getting data....', res.data.products)
        setData(res.data.products)
        // setFil(res.data.products)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='calls'>
      {data.map((data) => {
        return <Cards key={data.id} data={data} />
      })}
    </div>
  )
}
// {/* <button
//   onClick={() => {
//     // console.log(fil)
//     const filter = data.filter((res) => res.rating > 4.3)
//     // setFil(data)
//     setFil(filter)
//     setCheck((pre) => {
//       return !pre
//     })
//   }}>
//   Click
// </button> */}
// {/* {data.map((data) => {
//   const helloelement2 = <h1>hello</h1>
//   return check === false ? (
//     <Cards key={data.id} data={data} />
//   ) : (
//     // <h1>hello</h1>
//     <Cards key={data.id} data={fil} />
//   )
// })} */}
// {/* <button
//   onClick={() => {
//     ;<h1>Hello</h1>
//     console.log(fil?.rating)
//     {
//       const helloelement = fil.map((data) => {
//         let arr = data.rating
//         console.log(arr, data.id)
//         if (arr > 4.3) {
//           return <h1>hello</h1>
//           // console.log(arr, '4.3')
//         } else {
//           return null
//         }
//       })
//     }
//     return helloelement
//   }}>
//   Filter
// </button> */}
