import React from 'react'
import Clientdata from '../data/Clientdata'
import Herobg1 from '../assets/images/Hero/Herobg1.jpg'

function Client() {
  return (
    <div className='bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-16'>

      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8'>
        What Our Clients Say
      </h1>

      {/* Main Image */}
      <div className='w-full mb-8 sm:mb-10 overflow-hidden rounded-xl bg-gray-100'>
        <img
          src={Herobg1}
          alt="Client testimonials"
          className='w-full h-auto max-h-[420px] object-cover '
        />
      </div>

      {/* Client Reviews */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>

        {Clientdata.map((data) => (
          <div
            key={data.id}
            className='flex items-start gap-3 sm:gap-4 p-4 rounded-xl border border-gray-100 shadow-sm'
          >

            {/* Client Image */}
            <div className='shrink-0'>
              <img
                src={data.image}
                alt={data.name}
                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover'
                loading='lazy'
              />
            </div>

            {/* Review Content */}
            <div className='flex-1 min-w-0'>

              {/* Stars */}
              <div className='text-yellow-400 text-base sm:text-lg mb-2'>
                {data.rating}
              </div>

              {/* Description */}
              <p className='text-gray-500 text-sm sm:text-base leading-6 mb-3 break-words'>
                {data.description}
              </p>

              {/* Client Name */}
              <h2 className='text-blue-600 text-sm sm:text-base font-semibold break-words'>
                {data.name}
              </h2>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Client


