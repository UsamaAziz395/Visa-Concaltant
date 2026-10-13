
import React from 'react'
import immigration from '../assets/images/Immigration/immigration.jpg'
import { Link } from 'react-router-dom'

function Immigration() {
  return (
    <div
      style={{ backgroundImage: `url(${immigration})` }}
      className='relative w-full bg-center bg-cover bg-no-repeat py-25 px-30 text-center'
    >
      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 flex flex-col items-center'>
        <h2 className='text-amber-400 font-bold mb-4'>
          Unlock Your Immigration Potential
        </h2>

        <h1 className='text-4xl font-bold text-white mb-5'>
          Take the First Step Towards Your Immigration Goals
        </h1>

        <p className='text-white w-2xl mb-8'>
          Posuere sed eu proin elementum nulla. Sed non blandit auctor
          consequat sit orci sem. Ultrices adipiscing dictumst purus
          convallis convallis imperdiet.
        </p>

        <Link
          to='/contact'
          className='inline-block py-4 px-10 text-white bg-purple-600 border-2 border-purple-600 rounded-2xl hover:bg-transparent hover:border-purple-700 transition duration-300'
        >
          Get Started Now
        </Link>
      </div>
    </div>
  )
}

export default Immigration

