import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Shimmer from './Shimmer'

export default function Cards() {
  const [data, setData] = useState([])
  const [datatwo, setDataTwo] = useState([])
  // const filterData = () => {
  //   const filterResponse = data.filter((data) => data.rating > 4.3)
  //   console.log('filterResponse::::', filterResponse)
  //   setData(filterResponse)
  // }

  useEffect(() => {
    axios
      .get(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      .then((res) => {
        console.log('getting data....', res)
        setData(
          res.data.data.cards[2].card.card.gridElements.infoWithStyle
            .restaurants
        )
        setDataTwo(
          res.data.data.cards[5].card.card.gridElements.infoWithStyle
            .restaurants
        )
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='calls'>
      {console.log(data)}
      {console.log(datatwo)}
      {data.map((data, key) => {
        return <Cards key={key} data={data} />
      })}
      {datatwo.map((data, key) => {
        return <Cards key={key} data={data} />
      })}
    </div>
  )
}
