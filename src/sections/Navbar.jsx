import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Timmer from '../Components/Timmer/Timmer'
function Navbar() {
  return (
    <>
    <Timmer/>
    <div className='bg-purple-700 py-5 flex justify-between px-20 text-white'>
      <div>LOGO</div>
      <div className='space-x-5'>
        <Link to='/' >Home</Link>
        <Link to='/about' >About Us</Link>
        <Link to='/page' >Pages</Link>
        <Link to='/services' >Services</Link>
        <Link to='/Contact' >Contact Us</Link>
        <button>GET Started</button>
      </div>
    </div>
      
    </>
  )
}

export default Navbar
