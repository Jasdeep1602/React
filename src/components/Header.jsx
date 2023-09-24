import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <img
          className='logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGETzMKxVh4NoO4_b8512HKGnn0Fnumefxmg&usqp=CAU'
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
