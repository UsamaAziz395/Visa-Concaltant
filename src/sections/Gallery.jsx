// import React from 'react'
// import Gallerydata from '../data/Gallerydata'

// function Gallery() {
//   return (

//     <>
//     <div>
//         <h2 className='text-amber-300 uppercase font-bold'>Our Gallery</h2>

//         <div className='flex justify-between'>
//             <div className=''>
//             <h1 className='text-2xl '>ImmiGo's Photo Gallery</h1>
//             <p>At nullam leo consectetur euismod enim. Orci donec sapien et semper <br/> fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.</p>
//         </div>

//         <button className='py-3 px-5 bg-purple-600 '>See All Gallery </button>
// </div>

// {Gallerydata.map((data) => (
//     <div key={data.id}
//     className='flex '
//     >
//     <img className='h-60 w-100 border border-amber-400'
//      src={data.image} alt= "Gallery" />
//      </div>
// ))}

      
//     </div>

//     </>
//   )
// }

// export default Gallery

import React from 'react'
import Gallerydata from '../data/Gallerydata'

function Gallery() {
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

        <button className='py-3 px-5 bg-purple-600 text-white rounded-lg'>
          See All Gallery
        </button>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        {Gallerydata.map((data) => (
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
