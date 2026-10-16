
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import Timmer from '../Components/Timmer/Timmer'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <Timmer />

      <nav className='bg-purple-700 py-5 px-5 md:px-10 lg:px-20 text-white'>
        <div className='flex justify-between items-center'>
          <Link
            to='/'
            onClick={closeMobileMenu}
            className='text-xl font-bold'
          >
            ImmiGo
          </Link>

          <div className='hidden md:flex items-center gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/pricing'>Pricing</Link>

            <div
              className='relative'
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type='button'
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className='flex items-center gap-2'
              >
                Services
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className='absolute left-0 top-full z-50 w-48 pt-3'>
                  <div className='overflow-hidden rounded-lg bg-white py-2 text-gray-700 shadow-lg'>
                    <Link
                      to='/servicedetail'
                      onClick={() => setServicesOpen(false)}
                      className='block px-4 py-3 hover:bg-purple-50 hover:text-purple-700'
                    >
                      Services Detail
                    </Link>

                    <Link
                      to='/team'
                      onClick={() => setServicesOpen(false)}
                      className='block px-4 py-3 hover:bg-purple-50 hover:text-purple-700'
                    >
                      Team
                    </Link>

                    <Link
                      to='/gallerydetail'
                      onClick={() => setServicesOpen(false)}
                      className='block px-4 py-3 hover:bg-purple-50 hover:text-purple-700'
                    >
                      Gallery
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to='/Contact'>Contact Us</Link>

            <Link
              to='/apply-visa'
              className='rounded-lg bg-white px-4 py-2 text-purple-700'
            >
              GET Started
            </Link>
          </div>

          <button
            type='button'
            className='text-2xl md:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className='flex flex-col gap-4 pt-5 md:hidden'>
            <Link to='/' onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to='/about' onClick={closeMobileMenu}>
              About Us
            </Link>

            <Link to='/pricing' onClick={closeMobileMenu}>
              Pricing
            </Link>

            <div>
              <button
                type='button'
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                className='flex w-full items-center justify-between'
              >
                Services
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className='mt-3 flex flex-col gap-3 border-l-2 border-purple-300 pl-4'>
                  <Link
                    to='/servicedetail'
                    onClick={closeMobileMenu}
                  >
                    Services Detail
                  </Link>

                  <Link to='/team' onClick={closeMobileMenu}>
                    Team
                  </Link>

                  <Link to='/gallerydetail' onClick={closeMobileMenu}>
                    Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link to='/Contact' onClick={closeMobileMenu}>
              Contact Us
            </Link>

            <Link
              to='/apply-visa'
              onClick={closeMobileMenu}
              className='w-fit rounded-lg bg-white px-4 py-2 text-purple-700'
            >
              GET Started
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
