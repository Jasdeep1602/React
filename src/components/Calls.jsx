import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Shimmer from './Shimmer'

export default function Cards() {
  const [data, setData] = useState([])
  const [filterRestaurant, setFilterRestaurant] = useState([])
  const [searchText, setSearchText] = useState([])

  const filterData = () => {
    const filterResponse = data.map((index) => {
      return index.filter((data) => data.info.avgRating > 4.3)
    })

    setData(filterResponse)
    console.log('filterResponse::::', filterResponse)
    return filterResponse
  }

  const filterSearch = () => {
    const filterSearchResponse = data.map((index) => {
      return index.filter((data) =>
        data.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    console.log(searchText)
    setFilterRestaurant(filterSearchResponse)
    console.log('filterSerachResponse::::', filterSearchResponse)
    return filterSearchResponse
  }
  useEffect(() => {
    axios
      .get(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      .then((res) => {
        console.log('getting data....', res)
        setData([
          res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ])
        setFilterRestaurant([
          res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          res?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ])
      })
      .catch((err) => console.log(err))
  }, [])

  return data.length === 0 ? (
    <>
      {console.log('hello')}
      <Shimmer />
    </>
  ) : (
    <>
      <input
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button onClick={filterSearch}>Search</button>
      <button className='filter' onClick={filterData}>
        Filter
      </button>
      <div className='calls'>
        {console.log(data)}

        {filterRestaurant.map((index) => {
          return index.map((data, key) => {
            return <Cards key={key} data={data} />
          })
        })}
      </div>
    </>
  )
}
