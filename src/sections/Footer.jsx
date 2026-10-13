
import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import Help from '../Components/Help/Help'
import Facilities from '../Components/Facilities/Facilities'
import FooterAbout from '../Components/FooterAbout/FooterAbout'

import { FaFacebook, FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io"

function Footer() {
  return (
    <footer className='bg-black py-10 sm:py-12 md:py-15'>

      {/* Footer Sections */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-8'>

        <FooterAbout />

        <Navigation />

        <Facilities />

        <Help />

      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 mx-5 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-16'></div>

      {/* Bottom Footer */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 mx-5 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-16 pt-6'>

        {/* Social Icons */}
        <div className='text-white flex items-center gap-5 text-xl'>
          <FaFacebook className='cursor-pointer hover:text-amber-400 transition duration-300' />
          <FaTwitter className='cursor-pointer hover:text-amber-400 transition duration-300' />
          <IoLogoLinkedin className='cursor-pointer hover:text-amber-400 transition duration-300' />
          <AiFillInstagram className='cursor-pointer hover:text-amber-400 transition duration-300' />
        </div>

        {/* Copyright */}
        <p className='text-white text-xs sm:text-sm text-center leading-6'>
          Copyright © 2024 ImmiGo Designed by TokoTema
        </p>

      </div>

    </footer>
  )
}

export default Footer
