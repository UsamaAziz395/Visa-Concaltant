import React from 'react'
import Hero from '../sections/Hero'
import Immigration from '../sections/Immigration'
import Gallery from '../sections/Gallery'
import VisaService from '../sections/VisaService'
import Client from '../sections/Client'
import ChooseUs from '../sections/ChooseUs'


function Home() {
  return (
    <div>
       
        <Hero />
        <VisaService />
        <ChooseUs />
          <Gallery />
          <Client />
        <Immigration />
        
      
        
      
    </div>
  )
}

export default Home
