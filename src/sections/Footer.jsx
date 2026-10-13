import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import Help from '../Components/Help/Help'
import Facilities from '../Components/Facilities/Facilities'
import FooterAbout from '../Components/FooterAbout/FooterAbout'

function Footer() {
  return (
    <div className='bg-black'>
    <div className=' flex justify-evenly px-10  py-10'>
        <FooterAbout />
      <Navigation />
      <Facilities />
      <Help/>
      </div>
      {/* <hr className='text-white py-3' /> */}
      <h1 className='text-white'>Copyright © 2024 ImmiGo Designed by TokoTema</h1>
    </div>
  )
}

export default Footer
