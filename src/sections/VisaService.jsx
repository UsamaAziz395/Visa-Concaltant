import React from 'react'
import VisaServicesdata from '../data/VisaServicesdata'
import { FaArrowRight } from "react-icons/fa6";

function VisaService() {
  return (
    <div className='bg-slate-300 py-20'>

      <h1 className='text-amber-400 font-bold text-center mb-5'>
        OUR SERVICES
      </h1>

      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold'>
          Our Comprehensive Visa and <br />
          Immigration Solutions
        </h2>

        <p className='mt-5'>
          Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
          <br />
          Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-6 px-10'>
        {VisaServicesdata.map((data) => (
          <div
            key={data.id}
            className='relative h-60 overflow-hidden rounded-lg'
          >
            <img
              src={data.image}
              alt={data.title}
              className='w-full h-full object-cover'
            />

            <div className='absolute bottom-0 left-0 w-full flex justify-between items-center bg-black/60 text-white p-4'>
              <h2 className='text-xl font-bold'>
                {data.title}
              </h2>

              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default VisaService

