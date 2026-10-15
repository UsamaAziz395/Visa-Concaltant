import React, { useState } from 'react'
import Herobg from '../../assets/images/Hero/Herobg.jpg'
import Faqsdata from '../../data/FAQsdata'
import { FaArrowUp, FaArrowRight } from 'react-icons/fa'

function FAQs() {
  const [showtext, setShowText] = useState(null)

  const handleFAQ = (id) => {
    setShowText(showtext === id ? null : id)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">

        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={Herobg}
            alt="ImmiGo Frequently Asked Questions"
            className="w-full h-[260px] sm:h-[350px] lg:h-[480px] object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">

          <h3 className="text-amber-400 text-base sm:text-lg font-semibold tracking-tighter">
            Frequently Asked Questions
          </h3>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black">
            Everything You Need to Know About ImmiGo
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-7">
            At nullam leo consectetur euismod enim. Orci donec sapien et
            semper fringilla pellentesque in diam mi. Pulvinar ante sed
            velit ac nibh. Amet duis orci nibh nullam. Phasellus suspendisse
            ornare arcu eu orci urna justo.
          </p>

          {/* FAQ Accordion */}
          <div className="mt-2 sm:mt-4 flex flex-col gap-2">

            {Faqsdata.map((data) => {
              const isOpen = showtext === data.id

              return (
                <div
                  key={data.id}
                  className="border-b border-gray-200 py-4"
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => handleFAQ(data.id)}
                    className={`flex w-full items-start justify-start gap-3 text-left text-base sm:text-lg font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-blue-600' : 'text-black'
                    }`}
                    aria-expanded={isOpen}
                  >

                    {/* Icon before question */}
                    {isOpen ? (
                      <FaArrowUp className="shrink-0 mt-1 text-blue-600" />
                    ) : (
                      <FaArrowRight className="shrink-0 mt-1 text-black" />
                    )}

                    <span className="flex-1">
                      {data.message}
                    </span>

                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <p className="mt-3 pl-7 text-gray-500 text-sm sm:text-base leading-7">
                      {data.answer}
                    </p>
                  )}

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}

export default FAQs