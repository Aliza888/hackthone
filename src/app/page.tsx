import React from 'react'
import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import LatestProducts from '@/components/LatestProduct'
const Home = () => {
  return (
    <div>
      <Navbar />
     <Hero />
     <Product />
     <LatestProducts />
    </div>
  )
}

export default Home
