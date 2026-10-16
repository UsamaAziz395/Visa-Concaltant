import React from 'react'
import Teambg from '../../assets/images/Teambg.jpg'
import Story from '../Story/Story'
import Stat from '../Stat/Stat'
import FAQs from '../../Components/FAQs/FAQs'
import Video from '../../Components/Video/Video'
import Family from '../Family/Family'

function Team() {
  return (

    <>
    <div>
           <div className="relative w-full h-50 sm:h-60 md:h-80 overflow-hidden">
          <img
            src={Teambg}
            alt="About ImmiGo"
            className="w-full h-full object-cover object-center"
          />
        
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Team
            </h1>
          </div>
          </div>

          <Family />
          <Story />
          <Video />
          <Stat />
          <FAQs />
      
    </div>
    </>
  )
}

export default Team
