import React from 'react'
import immigration from '../assets/images/Immigration/immigration.jpg'
import { Link } from 'react-router-dom'

function Immigration() {
  return (

    <>
    <div  style={{ backgroundImage: `url(${immigration})` }}
      className='text-center w-full bg-center bg-cover bg-no-repeat py-25 mx-auto px-30 '>

        <h2 className='text-amber-400 font-bold  '>Unlock Your Immigration Potential</h2>
        <div className='text-white w-2xl '>

        <h1 className='text-4xl font-bold '>Take the First Step Towards Your Immigration Goals</h1>

        <p>Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices adipiscing dictumst purus convallis convallis imperdiet</p>
      </div>

      <Link className='py-5 px-10 text-white hover:bg-transparent hover:border-purple-700 hover:border-2 bg-purple-600 rounded-2xl '>Get Started Now</Link>

    </div>

    </>
  )
}

export default Immigration
