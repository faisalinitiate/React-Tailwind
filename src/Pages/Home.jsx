import React from 'react'
import MultiBanner from '../components/MultiBanner.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ShopItems from '../components/ShopItems.jsx'





const Home = () => {
  return (
    <div>
       <HeroBanner/>
        <MultiBanner/>
        <ShopItems/>
    </div>
  )
}

export default Home