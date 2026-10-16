
import React from 'react'
import Vision from '../sections/Vision'
import GetTouch from '../sections/GetTouch'
import Story from '../Components/Story/Story'
import Mission from '../Components/Mission/Mission'
import Video from '../Components/Video/Video'
import Aboutbg from '../assets/images/Aboutbg.jpg'

function About() {
  return (
    <div>
    <div className="relative w-full h-50 sm:h-60 md:h-80 overflow-hidden">
  <img
    src={Aboutbg}
    alt="About ImmiGo"
    className="w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
      About Us
    </h1>
  </div>
 </div>

      <Vision />
      <Story />
      <Video />
      <Mission />
      <GetTouch />
    </div>
  )
}

export default About



