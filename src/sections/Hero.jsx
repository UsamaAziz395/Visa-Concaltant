import React from 'react'
import { Link } from 'react-router-dom'
import HeroBg from "../assets/images/Hero/Herobg.jpg";


function Hero() {
  return (

    <>
    <div   style={{ backgroundImage: `url(${HeroBg})` }}
      className="mx-auto px-20 space-y-5 py-20  bg-cover bg-center bg-no-repeat ">
        <h2 className='text-amber-300'>Immigo Visa Solution</h2>
        <div className=' space-y-5  text-white'>
            <h1 className='text-5xl w-2xl  font-medium '>Unlock Your Global Journey with  ImmiGo Visa Solutions</h1>
        <p className='w-2xl'>Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices adipiscing dictumst purus convallis. Convallis imperdiet risus turpis turpis molestie erat viverra. Amet turpis nunc facilisis turpis dui cras nunc.</p>
        </div>
        <div className='flex gap-5  text-white'>
            <button className='border rounded-2xl bg-blue-500 py-3 px-5 font-medium'>Apply Now</button>
            <Link className='border border-blue-500 rounded-2xl  py-3 px-5'>About Us</Link>
        </div>
      
    </div>
    </>
  )
}

export default Hero
