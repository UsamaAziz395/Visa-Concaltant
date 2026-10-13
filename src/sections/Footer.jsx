import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import Help from '../Components/Help/Help'
import Facilities from '../Components/Facilities/Facilities'
import FooterAbout from '../Components/FooterAbout/FooterAbout'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";



function Footer() {
  return (
    <div className='bg-black py-15'>
    <div className=' flex justify-evenly px-10  py-10'>
        <FooterAbout />
      <Navigation />
      <Facilities />
      <Help/>
      </div>


    <div className='flex justify-between mx-auto px-15'>
      <div className='text-white flex gap-3'>
        <FaFacebook />
        <FaTwitter />
        <IoLogoLinkedin />
        <AiFillInstagram />
      </div>
          <h1 className='text-white'>Copyright © 2024 ImmiGo Designed by TokoTema</h1>
    </div>
  
    </div>
  )
}

export default Footer
