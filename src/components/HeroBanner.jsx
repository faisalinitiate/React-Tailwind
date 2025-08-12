import React from 'react'
import Banner from '../assets/HeroBanner.png'


const HeroBanner = () => {
  return (
    <div className='max-w-4xl mx-auto h-120 bg-gray-400 md:rounded-2xl mt-20 flex justify-center items-center'>
        <div className="w-3xl bg-green-300 h-100 md:rounded-2xl" style={{backgroundImage: `url(${Banner})`}}></div>
    </div>
  )
}

export default HeroBanner