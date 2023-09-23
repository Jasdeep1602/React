import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <img
          className='logo'
          src='https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png'
          alt='logo'
        />
      </div>

      <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button>Hello</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
