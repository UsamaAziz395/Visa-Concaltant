
import React from 'react'
import Featuredata from '../../data/Featuredata'

function Feature() {
  return (
    <div className='relative z-10 -mt-8 sm:-mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 grid grid-cols-1 md:grid-cols-3 gap-3'>

      {Featuredata.map((data) => (
        <div
          key={data.id}
          className='bg-gray-300 p-6 sm:p-8 text-center transition-all duration-300 hover:bg-black hover:border-b-3 hover:border-b-blue-500 group cursor-pointer'
        >

          <img
            src={data.image}
            alt={data.title}
            className='w-8 h-8 object-contain mx-auto mb-4'
          />

          <div>
            <h1 className='text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300'>
              {data.title}
            </h1>

            <p className='text-sm text-gray-500 leading-6 mt-3 group-hover:text-gray-300 transition-colors duration-300'>
              {data.text}
            </p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Feature
