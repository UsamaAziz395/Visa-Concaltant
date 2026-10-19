
import React from 'react'
import { Link } from 'react-router-dom'
import Travel from '../assets/Video/Travel.mp4'

function Hero() {
  return (
    <div className="relative isolate mx-auto min-h-[520px] sm:min-h-[580px] md:min-h-[600px] flex items-center px-5 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      >
        <source src={Travel} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full space-y-5">
        <h2 className="text-amber-300 font-semibold text-sm sm:text-base">
          Immigo Visa Solution
        </h2>

        <div className="space-y-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-full md:max-w-2xl font-medium leading-tight">
            Unlock Your Global Journey with ImmiGo Visa Solutions
          </h1>

          <p className="max-w-full md:max-w-2xl text-sm sm:text-base leading-relaxed">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem. Ultrices adipiscing dictumst purus
            convallis. Convallis imperdiet risus turpis turpis molestie
            erat viverra. Amet turpis nunc facilisis turpis dui cras nunc.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-5 text-white">
          <Link
            to="/contact"
            className="border border-blue-500 rounded-2xl bg-blue-500 py-3 px-4 sm:px-5 font-medium hover:bg-transparent transition duration-300"
          >
            Apply Now
          </Link>

          <Link
            to="/about"
            className="border border-blue-500 rounded-2xl py-3 px-4 sm:px-5 hover:bg-blue-500 transition duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
