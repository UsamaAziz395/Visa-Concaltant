import React from 'react'
import Client from '../../sections/Client'
import ChooseUs from '../../sections/ChooseUs'
import Gallery from '../../sections/Gallery'
import GetTouch from '../../sections/GetTouch'
import Servicedetailbg from '../../assets/images/Servicedetailbg.jpg'
import TourVisa from '../TourVisa/TourVisa'

function Servicedetail() {
  return (
    <div>

<div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
  <img
    src={Servicedetailbg}
    alt="Service Detail"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
      Service Detail
    </h1>
  </div>
</div>
        <TourVisa />
        <Client />
        <ChooseUs />
        <Gallery />
        <GetTouch />
      
    </div>
  )
}

export default Servicedetail

