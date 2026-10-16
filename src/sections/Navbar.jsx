import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Timmer from '../Components/Timmer/Timmer'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<>
 <Timmer />
    <nav className='bg-purple-700 py-5 px-5 md:px-10 lg:px-20 text-white'>

      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='text-xl font-bold'>
         ImmiGo
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-5'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/services'>Services</Link>
          <Link to='/Contact'>Contact Us</Link>

          <button className='bg-white text-purple-700 px-4 py-2 rounded-lg'>
            GET Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-2xl'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-4 pt-5'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to='/about' onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          <Link to='/pricing' onClick={() => setIsOpen(false)}>
            Pricing
          </Link>

          <Link to='/services' onClick={() => setIsOpen(false)}>
            Services
          </Link>

          <Link to='/Contact' onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <button className='bg-white text-purple-700 px-4 py-2 rounded-lg w-fit'>
            GET Started
          </button>
        </div>
      )}

    </nav>

    </>
  )
}

export default Navbar