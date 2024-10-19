import React from 'react'
import Hero from '../components/Hero section/Hero'
import WhatWeDo from '../components/what we do/WhatWeDo'
import About from '../components/About us/About'
import Getintouch from '../components/get in touch/Getintouch'
import OurWork from '../components/OurWork'

function Home() {
  return (
    <div className=' text-white '>
      <Hero />
      <WhatWeDo />
      <About />
      <Getintouch />
      <OurWork />
    </div>
  )
}

export default Home