import React from 'react'
import Storydata from '../../data/Storydata'

function Story() {
  return (
    <div className='bg-gray-200 py-10'>

        <h1 className='text-amber-400 font-bold text-center mb-5'>
        OUR STORY
      </h1>

      <div className='text-center mb-10 px-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          The ImmiGo Story Unfolded
        </h2>

        <p className='mt-5 text-sm sm:text-base max-w-2xl mx-auto'>
     Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[1000px] mx-auto px-4">
  {Storydata.map((data) => (
    <div
      key={data.id}
      className="bg-white p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Year */}
      <span className="text-amber-400 text-xs font-medium mb-2">
        {data.year}
      </span>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2">
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-5 mb-3">
        {data.description}
      </p>

      {/* Read More Button */}
      <button
        type="button"
        className="text-blue-600 text-xs font-semibold hover:text-blue-800 transition-colors duration-300 mt-auto"
      >
        {data.buttonText}
      </button>
    </div>
  ))}
</div>

      
    </div>
  )
}

export default Story
