
import React from 'react'
import { CiTimer } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"

function FooterAbout() {
  return (
    <div className='w-full min-w-0'>

      {/* Logo */}
      <h1 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
        limmo
      </h1>

      {/* Address */}
      <p className='text-gray-400 text-sm sm:text-base leading-6 w-full max-w-xs'>
        Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139
      </p>

      {/* Working Hours & Phone */}
      <div className='text-white flex flex-col gap-3 mt-5'>

        <span className='flex items-start gap-2 text-sm sm:text-base leading-6'>
          <CiTimer className='text-xl shrink-0 mt-0.5' />
          <span>Monday - Friday / 8AM to 5PM</span>
        </span>

        <span className='flex items-center gap-2 text-sm sm:text-base'>
          <FaPhoneAlt className='text-base shrink-0' />
          <span>+1 (333) 000-0000</span>
        </span>

      </div>

    </div>
  )
}

export default FooterAbout
