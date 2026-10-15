
import React from 'react'
import ContactCarddata from '../../data/ContactCarddata'
import { FaLocationDot, FaEnvelope } from 'react-icons/fa6'

function ContactCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 mt-5">
      {ContactCarddata.map((data) => (
        <div
          key={data.id}
          className="p-6"
        >
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {data.title}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-4">
            {data.subtitle}
          </p>

          {/* Location */}
          <div className="flex items-start gap-3 mb-3">
            <FaLocationDot className="text-amber-500 text-lg mt-1 shrink-0 text-sm" />
            <p className="text-gray-700">{data.location}</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-amber-500 text-lg mt-1 shrink-0" />
            <p className="text-gray-700 break-all">{data.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactCard