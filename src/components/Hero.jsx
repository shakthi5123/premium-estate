import React from 'react'
import bgImg from '../assets/bg-9.jpeg'

const Hero = () => {
  return (
    <>
    <section  id='home'
    className='scroll-mt-25 relative h-screen px-4 bg-cover bg-center bg-no-repeat flex justify-center text-white'
    style={{ backgroundImage: `url(${bgImg})`}}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-1"></div> */}
      <h1 className='flex items-center z-10 text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-bold '>Where Trust Meets Property</h1>
    </section>
    </>
    
  )
}

export default Hero