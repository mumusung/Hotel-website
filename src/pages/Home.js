import React from 'react'
import Navbar from '../components/Navbar'
import Welcometext from '../components/Welcometext'
import Aboutus from '../components/Aboutus'
import Roomsbooking from '../components/Roomsbooking'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <div><br></br></div>
    <div>
          <Welcometext/>
        </div>
        <div>
          <Aboutus/>
        </div>
        <div>
          <Roomsbooking/>
        </div>
        <div>
          <Footer/>
        </div>
    </>
  )
}

export default Home