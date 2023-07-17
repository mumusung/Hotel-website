import React from 'react'
import logo from '../images/mumu.jpg'
import './Navbar.css'


function Navbar() {

  return (<div>
  <div className='background-image'></div>
    <div className='navbar'>
      <img src={logo} className='circle' alt='mumu'/>
        <ul className='nav'>
        <a className='navbar-item' href="/home">Home</a>
        <a className='navbar-item' href="/about">About</a>
        <div className='dropdown'>
          <button className='dropdown-toggle'>Room&suite</button>
          <div className='dropdown-menu'>
            <a className='navroom2' href="/room1">Room1</a>
        <a className='navroom2' href="/room2">Room2</a>
        </div>
        </div>
        </ul>
    </div>
    </div>
  )
}

export default Navbar