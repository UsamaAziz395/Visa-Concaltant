import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function Timmer() {
  return (
    < div  className='px-25 flex justify-between py-3'>
     
      <div className='text-purple-700 flex gap-3 items-center'> <FaPhoneAlt />
        <h1>Need Quick Response? Call US +1 (333) 000-0000  </h1>
      </div>
      <div>Monday - Friday / 8AM to 5PM</div>
      
    </div>
  )
}

export default Timmer
