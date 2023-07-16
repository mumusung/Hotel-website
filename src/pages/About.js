import React from 'react'
import Navbar from '../components/Navbar'
import Abouthotel from '../components/Abouthotel'
import Abouthotel2 from '../components/Abouthotel2'
import Footer from '../components/Footer'

function About() {
  return (
      <div>
        <Navbar/>
        <div>
          <Abouthotel/>
        </div>
        <div>
          <Abouthotel2/>
        </div>
        <Footer/>
        </div>
  )
}

export default About