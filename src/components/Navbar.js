import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/mumu.jpg'
import './Navbar.css'


function Navbar() {
  return (<div>
  <div className='background-image'></div>
    <div className='navbar'>
      <img src={logo} className='circle' alt='mumu'/>
        <ul className='nav'>
        <Link className='navbar-item' to="/home">Home</Link>
        <Link className='navbar-item' to="/about">About</Link>
        <Link className='navbar-item' to="/contact">Contact</Link>
        <Link className='navbar-item' to="/rooms">Room&suite</Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar