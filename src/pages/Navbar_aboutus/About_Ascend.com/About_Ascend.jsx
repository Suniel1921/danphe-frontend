import React from 'react'
import "./About_Ascend.css";
import img_hero from "../../../../public/About_us/incorporate_homepage_hero.jpg"
import Tab from "./Tabs/Tab"
import About_Testomonial from './About_Testomonial/About_Testomonial';
const About_Ascend = () => {
  return (
    <div className='main_about_ascend'>
      <div className='top_about_ascend'>
        <img src={img_hero} alt="" className='top_ascend_image' />
        <p className='image_over_paragraph'>
        We've stayed true to our mission for one hundred years and counting.
        </p>
      </div>


      {/* tab section */}
      <Tab />
      <About_Testomonial/>



    </div>
  )
}

export default About_Ascend
