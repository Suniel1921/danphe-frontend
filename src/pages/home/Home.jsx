import React from 'react'
import HomeSlider from '../../components/slider/HomeSlider'
import Front_page from '../Front_page'

const Home = () => {
  return (
    <div>
      <div className='homeContainer'>
            <HomeSlider/>
            <Front_page/>
      </div>
    </div>
  )
}

export default Home
