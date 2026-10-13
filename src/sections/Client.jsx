
import React from 'react'
import Clientdata from '../data/Clientdata'
import Herobg1 from '../assets/images/Hero/Herobg1.jpg'

function Client() {
  return (
    <div className='bg-white px-20 py-16'>

    

      
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>
        What Our Clients Say
      </h1>

      <div className='w-full h-[360px] mb-10 overflow-hidden'>
  <img
    src={Herobg1}
    alt="Client testimonials"
    className='w-full h-full object-cover object-center'
  />
</div>

     
      <div className='grid grid-cols-3 gap-8'>

        {Clientdata.map((data) => (
          <div
            key={data.id}
            className='flex items-start gap-3'
          >

            
            <div className='shrink-0'>
              <img
                src={data.image}
                alt={data.name}
                className='w-12 h-12 rounded-full object-cover'
              />
            </div>

            {/* Review Content */}
            <div className='flex-1'>

              {/* Stars */}
              <div className='text-yellow-400 text-lg mb-2'>
                {data.rating}
              </div>

              {/* Description */}
              <p className='text-gray-500 text-sm leading-6 mb-2'>
                {data.description}
              </p>

              {/* Client Name */}
              <h2 className='text-blue-600 text-base font-semibold'>
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
