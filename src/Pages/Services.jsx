import React from 'react'
import Immigration from '../sections/Immigration'
import VisaService from '../sections/VisaService'
import FAQs from '../Components/FAQs/FAQs'
import HowItWork from '../Components/HowItWork/HowItWork'
import Servicebg from '../assets/images/Servicebg.jpg'

function Services() {
  return (
    <div>
       <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              
             
              <img 
                src={Servicebg} 
                alt="Contact Background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
      
              <div className="absolute inset-0 bg-black/50"></div>
      
              {/* Center Text*/}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                  Services
                </h1>
              </div>
      
            </div>

      <VisaService />
      <HowItWork />
      <FAQs />
      <Immigration />
      
    </div>
  )
}

export default Services
