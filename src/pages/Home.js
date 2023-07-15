import React from 'react'
import Navbar from '../components/Navbar'
import Welcometext from '../components/Welcometext'
import Aboutus from '../components/Aboutus'
import Roomsbooking from '../components/Roomsbooking'
function Home() {
  return (
    <>
    <Navbar/>
    <div>Home</div>
    <div>
          <Welcometext/>
        </div>
        <div>
          <Aboutus/>
        </div>
        <div>
          <Roomsbooking/>
        </div>
    </>
  )
}

export default Home