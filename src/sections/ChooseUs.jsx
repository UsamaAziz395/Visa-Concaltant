
import React from 'react'
import Expert from '../assets/images/Immigration/Expert.jpg'

function ChooseUs() {
  return (
    <div className='bg-[#0D132F] px-20 py-14'>

      <div className='flex items-center justify-center gap-30'>

        {/* Left Image */}
        <div className='w-[400px] h-[300px]  shrink-0'>
          <img
            src={Expert}
            alt="Immigration Expert"
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        {/* Right Content */}
        <div className='w-[560px]'>

          <h2 className='text-xs text-amber-400 uppercase font-bold mb-3'>
            Why Choose Us
          </h2>

          <h1 className='text-3xl font-semibold text-white mb-3 w-md'>
            The Benefits of ImmiGo's Expertise
          </h1>

          <p className='text-gray-400 text-sm leading-6 mb-6 w-md'>
            At nullam leo consectetur euismod enim. Orci donec sapien et semper
            fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
            Amet duis orci nibh nullam. Phasellus suspendisse ornare arcu eu
            orci urna justo.
          </p>

          {/* Personalized Service */}
          <div className='mb-5'>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-white text-xs font-medium'>
                Personalized Service
              </h3>
              <span className='text-white text-xs'>98%</span>
            </div>

            <div className='w-full h-2 bg-[#080D20]'>
              <div className='w-[98%] h-full bg-[#4965F5]'></div>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-white text-xs font-medium'>
                Customer Satisfaction
              </h3>
              <span className='text-white text-xs'>90%</span>
            </div>

            <div className='w-full h-2 bg-[#080D20]'>
              <div className='w-[90%] h-full bg-[#4965F5]'></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChooseUs
