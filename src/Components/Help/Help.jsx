import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
  return (
    <div>
        <h1 className='text-white'>Help</h1>

        <div  className='flex flex-col gap-3 text-gray-600 mt-5'>
            <Link>Customer Support</Link>
            <Link>How It Works</Link>
            <Link>Term & Condition</Link>
            <Link>Privacy Policy</Link>
        </div>
      
    </div>
  )
}

export default Help
