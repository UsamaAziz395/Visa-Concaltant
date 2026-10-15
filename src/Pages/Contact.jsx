import React from 'react'

import FAQs from '../Components/FAQs/FAQs'
import Stat from '../Components/Stat/Stat'
import Contactbg from '../assets/images/Contactbg.jpg'

import GetTouch from '../sections/GetTouch'

function Contact() {
  return (
    <div>
      
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        
        {/* Background Image - absolute lagaya taaki ye peeche chali jaye */}
        <img 
          src={Contactbg} 
          alt="Contact Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay - taaki text image par clear nazar aaye */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Text - relative aur z-10 lagaya taaki ye image ke upar aaye */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Contact US
          </h1>
        </div>

      </div>
     
      <Stat />
  
      <GetTouch />
      <FAQs />
      
    </div>
  )
}

export default Contact