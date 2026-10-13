import React from 'react'
import Layout from '../Components/Layout/Layout'
import Hero from '../sections/Hero'
import Immigration from '../sections/Immigration'
import Footer from '../sections/Footer'
import Gallery from '../sections/Gallery'
import VisaService from '../sections/VisaService'
import Client from '../sections/Client'
import ChooseUs from '../sections/ChooseUs'


function Home() {
  return (
    <div>
        <Layout />
        <Hero />
        <VisaService />
        <ChooseUs />
          <Gallery />
          <Client />
        <Immigration />
        <Footer />
      
        
      
    </div>
  )
}

export default Home
