import React from 'react'
import Header from '../../Components/Header'
import Products from '../../Components/Products'
import SlickSlider from '../../Components/Slick-Slider'
import './Home.css'

const Home = () => {
  
  return (
    <div>
      <Header />
      <SlickSlider />
      <Products />
    </div>
  )
}

export default Home