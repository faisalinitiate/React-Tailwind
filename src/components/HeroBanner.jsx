import React from 'react'
import Banner from '../assets/heroBanner.png'


const HeroBanner = () => {
  return (
    <div className='max-w-4xl mx-auto h-120 bg-gray-400 md:rounded-2xl mt-20 flex justify-center items-center'>
        <div className="w-3xl bg-green-300 h-100 md:rounded-2xl" style={{backgroundImage: `url(${Banner})`}}></div>
    </div>
  )
}

export default HeroBanner

// import React from 'react'
// import Newbanner from '../assets/herobannernew.png'


// const HeroBanner = () => {
//   return (
//     <div className='max-w-4xl mx-auto h-120 bg-gray-400 md:rounded-2xl mt-20 flex justify-center items-center'>
//         <div className="w-3xl  h-100 mix-blend-multiply bg-linear-to-bl from-indigo-500 to-purple-400 border-solid border-2 border-slate-500 md:rounded-2xl bg-no-repeat" style={{backgroundImage: `url(${Newbanner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
//     </div>
//   )
// }

// export default HeroBanner