
import React from 'react'
import immigration from '../assets/images/Immigration/immigration.jpg'
import { Link } from 'react-router-dom'

function Immigration() {
  return (
    <div
      style={{ backgroundImage: `url(${immigration})` }}
      className='relative w-full bg-center bg-cover bg-no-repeat py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-center'
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center'>

        <h2 className='text-amber-400 text-sm sm:text-base font-bold mb-3 sm:mb-4'>
          Unlock Your Immigration Potential
        </h2>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl font-bold text-white mb-4 sm:mb-5 leading-tight'>
          Take the First Step Towards Your Immigration Goals
        </h1>

        <p className='text-white text-sm sm:text-base leading-6 sm:leading-7 w-full max-w-2xl mb-6 sm:mb-8'>
          Posuere sed eu proin elementum nulla. Sed non blandit auctor
          consequat sit orci sem. Ultrices adipiscing dictumst purus
          convallis convallis imperdiet.
        </p>

        <Link
          to='/contact'
          className='inline-block py-3 sm:py-4 px-7 sm:px-10 text-sm sm:text-base text-white bg-purple-600 border-2 border-purple-600 rounded-xl sm:rounded-2xl hover:bg-transparent hover:border-purple-700 transition duration-300'
        >
          Get Started Now
        </Link>

      </div>
    </div>
  )
}

export default Immigration
