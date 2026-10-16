import React from 'react'
import Stat from '../Components/Stat/Stat'
import Story from '../Components/Story/Story'
import Video from '../Components/Video/Video'
import Immigration from '../sections/Immigration'
import Gallery from '../sections/Gallery'
import Gallerybg from '../assets/images/Gallerybg.jpg'
function Gallerydetail() {
  return (
    <div>
         <div className="relative w-full h-50 sm:h-60 md:h-80 overflow-hidden">
                <img
                  src={Gallerybg}
                  alt="About ImmiGo"
                  className="w-full h-full object-cover object-center"
                />
              
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                    Gallery
                  </h1>
                </div>
                </div>
       <Gallery />
        <Stat />
        <Story />
        <Video />
        <Immigration />
      
    </div>
  )
}

export default Gallerydetail
