
import React from 'react'
import { Link } from 'react-router-dom'

function Facilities() {
  return (
    <div className='w-full min-w-0'>

      {/* Heading */}
      <h1 className='text-white text-lg sm:text-xl font-semibold'>
        Services
      </h1>

      {/* Service Links */}
      <div className='flex flex-col items-start gap-3 text-gray-400 mt-4 sm:mt-5'>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Student Visa
        </Link>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Visa Consultation
        </Link>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Document Preparation
        </Link>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Visa Application
        </Link>

      </div>

    </div>
  )
}

export default Facilities
