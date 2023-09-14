import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Shimmer from './Shimmer'

export default function Cards() {
  const [data, setData] = useState([])
  const filterData = () => {
    const filterResponse = data.filter((data) => data.rating > 4.3)
    console.log('filterResponse::::', filterResponse)
    setData(filterResponse)
  }

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

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='calls'>
      <div>
        <button onClick={filterData}>click to filter</button>
      </div>

      {data.map((data) => {
        return <Cards key={data.id} data={data} />
      })}
    </div>
  )
}
