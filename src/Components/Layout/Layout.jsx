import React from 'react'
import Navbar from '../../sections/Navbar'
import Footer from '../../sections/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar />
        <main>

          <Outlet />
        </main>
        
        <Footer />
      
    </div>
  )
}

export default Layout
