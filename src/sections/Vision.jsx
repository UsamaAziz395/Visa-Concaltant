
import React, { useState } from 'react'
import Visionimg from '../assets/images/FeatureCard/Visionimg.jpg'
import { FaArrowUp, FaArrowRight } from 'react-icons/fa'
import Icons from '../Components/Icons/Icons'

function Vision() {
  const [changeicon, setChangeIcon] = useState(null)

  return (

    <>
    <div className='px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16'>

      {/* About Us */}
      <h1 className='text-amber-400 uppercase font-medium text-sm mb-5'>
        About Us
      </h1>

      {/* Content */}
      <div className='flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12'>

        {/* Left Side: Text */}
        <div className='w-full md:w-1/2'>

          <h2 className='text-xl sm:text-4xl font-bold leading-tight text-gray-950 mb-5'>
            Unveiling the Vision and Values of ImmiGo
          </h2>

          <p className='text-gray-500 text-sm sm:text-base leading-[1.6] mb-6'>
            At nullam leo consectetur euismod enim. Orci donec sapien et semper
            fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
            Amet duis orci nibh nullam. Phasellus suspendisse ornare arcu eu orci
            urna justo.
          </p>

          {/* Our Vision */}
          <div className='border-b border-gray-200 pb-5 mb-5'>

            <button
              onClick={() =>
                setChangeIcon(changeicon === 1 ? null : 1)
              }
              className='flex items-center gap-3 text-lg sm:text-xl font-semibold mb-3'
            >
              {changeicon === 1 ? <FaArrowUp /> : <FaArrowRight />}
              Our Vision
            </button>

            {changeicon === 1 && (
              <p className='text-gray-500 text-sm sm:text-base leading-6'>
                At nullam leo consectetur euismod enim. Orci donec sapien et semper
                fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
              </p>
            )}

          </div>

          {/* Our Value */}
          <div className='border-b border-gray-200 pb-5'>

            <button
              onClick={() =>
                setChangeIcon(changeicon === 2 ? null : 2)
              }
              className='flex items-center gap-3 text-gray-950 text-lg sm:text-xl font-semibold mb-3'
            >
              {changeicon === 2 ? <FaArrowUp /> : <FaArrowRight />}
              Our Value
            </button>

            {changeicon === 2 && (
              <p className='text-gray-500 text-sm sm:text-base leading-6'>
                At nullam leo consectetur euismod enim. Orci donec sapien et semper
                fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
              </p>
            )}

          </div>

        </div>

        {/* Right Side: Image */}
        <div className='w-full md:w-[46%]'>
          <img
            src={Visionimg}
            alt='ImmiGo vision'
            className='w-full h-64 sm:h-80 md:h-[360px] lg:h-[420px] object-cover object-center'
          />
        </div>

      </div>

      <Icons />

    </div>
    </>
  )
}

export default Vision
