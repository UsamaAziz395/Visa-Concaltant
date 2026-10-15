import React from 'react'
import HowItWorksData from '../../data/HowITWorkdata'
import Herobg from '../../assets/images/Hero/Herobg.jpg'

function HowItWork() {
  return (
    <section className="bg-[#0D132F] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

        {/* Left Side Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="uppercase text-amber-300 font-semibold tracking-wider mb-3 text-sm sm:text-base">
            How It Works
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl text-white font-bold mb-6">
            How ImmiGo Works
          </h2>

          {/* Steps */}
          <div className="flex flex-col">

            {HowItWorksData.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 sm:gap-6 py-5 border-b border-gray-700"
              >

                {/* Number */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white w-12 sm:w-14 shrink-0">
                  {item.number}
                </h3>

                {/* Title and Description */}
                <div className="flex-1 min-w-0">

                  <h4 className="text-white font-semibold text-base sm:text-lg">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm mt-2 leading-6">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Button */}
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 rounded-lg transition-colors duration-300">
            Learn More
          </button>

        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">

          <img
            src={Herobg}
            alt="ImmiGo Visa Process"
            className="w-full h-[260px] sm:h-[350px] lg:h-[430px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
          />

        </div>

      </div>

    </section>
  )
}

export default HowItWork