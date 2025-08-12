import React from 'react'
import BImgOne from '../assets/BImgOne.jpg'

const MultiBanner = () => {
  return (
    <div className='max-w-6xl mx-auto border-2 border-solid border-slate-500 mt-16 mb-12 flex'>
      
         <div className="w-12 h-80 grow-3 border-2 border-solid border-amber-700 m-0.5 grid place-items-center relative">
           <img src={BImgOne} className="w-[100%] h-[100%] object-cover" alt="alt" />
           <div className="border-2 border-solid border-green-400">
            <h1 className='my-1 text-white font-bold'>Just Arrived</h1>
            <button>Lorem, ipsum.</button>
            
           </div>
           
           <div className="bg-amber-900 opacity-20 absolute top-0 left-0 w-[100%] h-[100%]"></div>
         </div>
      
      
         <div className="w-18 h-60  grow-4 border-2 border-solid border-amber-700 m-0.5"></div>
      
      
         <div className="w-18 h-60  grow-5 border-2 border-solid border-amber-700 m-0.5"></div>
      
    </div>
  )
}

export default MultiBanner