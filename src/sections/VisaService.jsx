import React from 'react'
import VisaServicesdata from '../data/VisaServicesdata'
import { FaArrowRight } from "react-icons/fa6"

function VisaService() {
  return (
    <div className='bg-slate-300 py-12 sm:py-16 md:py-20'>

      <h1 className='text-amber-400 font-bold text-center mb-5'>
        OUR SERVICES
      </h1>

      <div className='text-center mb-10 px-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          Our Comprehensive Visa and
          <br className='hidden sm:block' />
          {' '}Immigration Solutions
        </h2>

        <p className='mt-5 text-sm sm:text-base max-w-2xl mx-auto'>
          Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
          Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-4 sm:px-6 lg:px-10'>
        {VisaServicesdata.map((data) => (
          <div
            key={data.id}
            className='relative h-60 sm:h-64 overflow-hidden rounded-lg'
          >
            <img
              src={data.image}
              alt={data.title}
              className='w-full h-full object-cover'
            />

            <div className='absolute bottom-0 left-0 w-full flex justify-between items-center gap-3 bg-black/60 text-white p-3 sm:p-4'>
              <h2 className='text-lg sm:text-xl font-bold'>
                {data.title}
              </h2>

              <FaArrowRight className='shrink-0' />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default VisaService