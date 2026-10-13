import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"

function Timmer() {
  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-25 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-3'>

      {/* Phone Information */}
      <div className='text-purple-700 flex gap-3 items-center'>
        <FaPhoneAlt className='shrink-0' />

        <h1 className='text-sm sm:text-base'>
          Need Quick Response? Call US +1 (333) 000-0000
        </h1>
      </div>

      {/* Working Hours */}
      <div className='text-sm sm:text-base'>
        Monday - Friday / 8AM to 5PM
      </div>

    </div>
  )
}

export default Timmer