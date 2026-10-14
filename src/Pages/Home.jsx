import React from 'react'
import Hero from '../sections/Hero'
import Immigration from '../sections/Immigration'
import Gallery from '../sections/Gallery'
import VisaService from '../sections/VisaService'
import Client from '../sections/Client'
import ChooseUs from '../sections/ChooseUs'
import Feature from '../Components/Feature/Feature'
import Vision from '../sections/Vision'


function Home() {
  return (
    <div>
       
        <Hero />
        <Feature />
        <Vision />
        <VisaService />
        <ChooseUs />
          <Gallery />
          <Client />
        <Immigration />
        
      
        
      
    </div>
  )
}

export default Home
