import React from 'react'
import { CiTimer } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

function FooterAbout() {
  return (
    <div>
       <div>
  <h1 className='text-3xl font-bold text-white'>limmo</h1>
  <p className='text-gray-500 w-xs'>Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139</p>
  
 
  <div className='text-white flex flex-col gap-2 mt-4'>
    <span className='flex items-center gap-2'>
      <CiTimer /> Monday - Friday / 8AM to 5PM
    </span>
    <span className='flex items-center gap-2'>
      <FaPhoneAlt /> +1 (333) 000-0000
    </span>
  </div>
</div>
      <div>


      </div>
    </div>

  )
}

export default FooterAbout
