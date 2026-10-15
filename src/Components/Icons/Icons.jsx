
import React from 'react'

import Ultra from '../../assets/images/Icons/Ultra.png'
import Power from '../../assets/images/Icons/Power.png'
import Mega from '../../assets/images/Icons/Mega.png'
import logopisum from '../../assets/images/Icons/logopisum.png'
import Winner from '../../assets/images/Icons/Winner.png'

function Icons() {
  return (
    <div className='flex flex-wrap items-center justify-evenly gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-10 mt-8 sm:mt-10'>

      <img
        src={Winner}
        alt="winner"
        className='w-24 sm:w-28 md:w-32 h-auto object-contain'
      />

      <img
        src={Ultra}
        alt="ultra"
        className='w-24 sm:w-28 md:w-32 h-auto object-contain'
      />

      <img
        src={Power}
        alt="power"
        className='w-24 sm:w-28 md:w-32 h-auto object-contain'
      />

      <img
        src={Mega}
        alt="mega"
        className='w-24 sm:w-28 md:w-32 h-auto object-contain'
      />

      <img
        src={logopisum}
        alt="logopisum"
        className='w-24 sm:w-28 md:w-32 h-auto object-contain'
      />

    </div>
  )
}

export default Icons
