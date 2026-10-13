import React from 'react'
import { Link } from 'react-router-dom'

function Facilities() {
  return (
    <div>
        <h1 className='text-white'>Services</h1>

        <div  className='flex flex-col gap-3 text-gray-600 mt-5'>
            <Link>Student visa</Link>
            <Link>Visa Consultation</Link>
            <Link>Document Preparation</Link>
            <Link>Visa Application</Link>


        </div>
      
    </div>
  )
}

export default Facilities
