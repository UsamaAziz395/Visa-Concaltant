
import React, { useState } from 'react'
import Gallerydata from '../data/Gallerydata'

function Gallery({ showButton = true }) {
  const [allimages, setAllImages] = useState(false)

  const visibleImages = showButton && !allimages
    ? Gallerydata.slice(0, 3)
    : Gallerydata

  return (
    <div className='py-10 sm:py-12 px-4 sm:px-6 lg:px-10'>

      <h2 className='text-amber-300 uppercase font-bold mb-3'>
        Our Gallery
      </h2>

      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8'>

        <div>
          <h1 className='text-2xl sm:text-3xl font-bold'>
            ImmiGo's Photo Gallery
          </h1>

          <p className='mt-3 text-sm sm:text-base'>
            At nullam leo consectetur euismod enim. Orci donec sapien et semper
            <br className='hidden sm:block' />
            fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
          </p>
        </div>

        {showButton && (
          <button
            onClick={() => setAllImages(!allimages)}
            className='py-3 px-5 bg-purple-600 text-white rounded-lg w-fit'
          >
            {allimages ? 'Hide Gallery' : 'See All Gallery'}
          </button>
        )}

      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>

        {visibleImages.map((data) => (
          <div key={data.id}>
            <img
              className='h-56 sm:h-60 w-full object-cover rounded-lg'
              src={data.image}
              alt='Gallery'
            />
          </div>
        ))}

      </div>

    </div>
  )
}

export default Gallery
