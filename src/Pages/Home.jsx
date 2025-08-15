import React from 'react'
import MultiBanner from '../components/MultiBanner.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ShopItems from '../components/ShopItems.jsx'
import Footer from '../components/Data/Footer.jsx'





const Home = () => {
  return (
    <div>
       <HeroBanner/>
       <MultiBanner/>
       <ShopItems/>
       <Footer/>
    </div>
  )
}

export default Home