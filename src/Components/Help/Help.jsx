
import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
  return (
    <div className='w-full min-w-0'>

      {/* Heading */}
      <h1 className='text-white text-lg sm:text-xl font-semibold'>
        Help
      </h1>

      {/* Help Links */}
      <div className='flex flex-col items-start gap-3 text-gray-400 mt-4 sm:mt-5'>

        <Link
          to='/contact'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Customer Support
        </Link>

        <Link
          to='/services'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          How It Works
        </Link>

        <Link
          to='/terms'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Terms & Conditions
        </Link>

        <Link
          to='/privacy-policy'
          className='text-sm sm:text-base hover:text-amber-400 transition duration-300'
        >
          Privacy Policy
        </Link>

      </div>

    </div>
  )
}

export default Help