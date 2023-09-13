import React from 'react'

export default function Cards({ data /*helloelement*/ }) {
  return (
    <>
      <div className='cards'>
        <img src={data?.images[0]} alt='data.img' />
        <div className='data'>
          <h3>{data.title}</h3>
          <h3 className='description'>Description: {data.description}</h3>
          <div className='price'>
            <p>Price: {data.price}</p>
            <p>Rating: {data.rating}</p>
          </div>
        </div>
      </div>
      {/* {helloelement} */}
    </>
  )
}
