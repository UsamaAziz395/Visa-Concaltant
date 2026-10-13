
import React, { useState } from 'react'
import Gallerydata from '../data/Gallerydata'

function Gallery() {

  const [allimages,setAllImages] = useState(false)
  return (
    <div className='py-12 px-10'>

      <h2 className='text-amber-300 uppercase font-bold mb-3'>
        Our Gallery
      </h2>

      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-2xl font-bold'>
            ImmiGo's Photo Gallery
          </h1>

          <p>
            At nullam leo consectetur euismod enim. Orci donec sapien et semper
            <br />
            fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
          </p>
        </div>

       <button
  onClick={() => setAllImages(!allimages)}
  className='py-3 px-5 bg-purple-600 text-white rounded-lg'
>
  {allimages ? "Hide Images" : "See All Gallery"}
</button>
      </div>

      <div className='grid grid-cols-3 gap-5'>

        {Gallerydata
        .slice(0, allimages ? Gallerydata.length : 3)
        .map((data) => (
          <div key={data.id}>
            <img
              className='h-60 w-full object-cover rounded-lg'
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
