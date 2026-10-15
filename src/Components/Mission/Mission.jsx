import React from 'react'
import OurMissiondata from '../../data/Missiondata'
import MissionImage from '../../assets/images/Hero/Herobg.jpg'

function Mission() {
  return (
    <section className="bg-[#0D132E] py-12 px-4 sm:px-8 lg:px-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-amber-400 font-bold text-sm tracking-widest mb-4">
          OUR MISSION
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          ImmiGo's Mission to Simplify <br className="hidden sm:block" />
          Immigration
        </h2>

        <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto text-gray-400 leading-7">
          Posuere sed eu proin elementum nulla. Sed non blandit auctor
          consequat sit orci sem. Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>

      {/* Image + Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Left Image - Smaller */}
        <div className="w-full max-w-md mx-auto h-[280px] sm:h-[350px] overflow-hidden rounded-xl border border-gray-700">
          <img
            src={MissionImage}
            alt="ImmiGo mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {OurMissiondata.map((data) => (
            <div
              key={data.id}
              className="border border-gray-700 rounded-lg p-4 sm:p-5 flex flex-col items-start hover:border-amber-400/70 transition-colors duration-300"
            >
              <span className="text-amber-400 text-xl font-bold ">
                {data.number}
              </span>

              <h3 className="text-white text-lg font-bold ">
                {data.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                {data.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Mission