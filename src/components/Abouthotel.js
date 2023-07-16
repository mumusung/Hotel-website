import React from 'react'
import logo from '../images/mumu.jpg'
import './Abouthotel.css'

function Abouthotel() {
  return (
    <div className='backgroundabout'>
    <div className='abouthotel'>
      <img src={logo} className='mumulogo3' alt='mumulgo' width={200} height={200}/>
      <div className='abouttext1'>
      <h1>Mumuhouse</h1>
      <h2>About</h2>
    </div>
    </div>
    </div>
  )
}

export default Abouthotel