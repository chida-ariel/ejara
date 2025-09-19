import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className='top'>
      <h1>Your financial partner</h1>&nbsp;
      <p>Where every transaction counts: Investing, saving and paying with Ejara</p>&nbsp;
      <img className='ap' src="/ej-im/AppStore.png"/>
      <img className='pla' src="/ej-im/play.png"/>
    </div>
  )
}

export default Hero;
