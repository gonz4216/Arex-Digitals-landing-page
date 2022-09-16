import React from 'react'
import HeroImg from './images/about.png'
import arrow from './images/arrow.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="row">
        <div className="hero--container">
          <div className="hero-col1">
            <h1 className='hero-header'>Everything you needed to grow your bussiness is one click away</h1>

            <a href='#' className='btns-hero'>Start Your Project <img src={arrow} alt="" className='arrow' /></a>
       

          </div>
          <div className="hero-col2">
            <div className="whitebg"></div>
            <img src={HeroImg} alt="" className='hero-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero