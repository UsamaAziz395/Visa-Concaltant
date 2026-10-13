import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home'
function Navigation() {
  return (
    <div>
        <h1 className='text-white'>Navigation</h1>
        <div className='flex flex-col gap-3 text-gray-600 mt-5'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact us</Link>
        </div>
      
    </div>
  )
}

export default Navigation
