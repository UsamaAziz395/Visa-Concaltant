import React from 'react'
import Gallery from '../sections/Gallery'
import ChooseUs from '../sections/ChooseUs'
import Client from '../sections/Client'
import GetTouch from '../sections/GetTouch'
import HowItWork from '../Components/HowItWork/HowItWork'
import Plan from '../Components/Plan/Plan'
import Pricingbg from '../assets/images/Pricingbg.jpg'


function Pricing() {
  return (

    <div>
      <div className="relative w-full h-48 sm:h-60 md:h-80 overflow-hidden">
      <img
        src={Pricingbg}
        alt="Pricing"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Pricing
        </h1>
      </div>
    </div>
      <Plan />
        <ChooseUs />
       <Client />
      <HowItWork />
      <GetTouch />
     
      
    </div>
  )
}

export default Pricing
