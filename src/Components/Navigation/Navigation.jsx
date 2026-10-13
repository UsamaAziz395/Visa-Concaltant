
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='w-full min-w-0'>

      {/* Heading */}
      <h1 className='text-white text-lg sm:text-xl font-semibold'>
        Navigation
      </h1>

      {/* Navigation Links */}
      <div className='flex flex-col items-start gap-3 text-gray-400 mt-4 sm:mt-5'>

        <Link
          to='/'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Home
        </Link>

        <Link
          to='/about'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          About Us
        </Link>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Services
        </Link>

        <Link
          to='/contact'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Contact Us
        </Link>

      </div>

    </div>
  )
}

export default Navigation