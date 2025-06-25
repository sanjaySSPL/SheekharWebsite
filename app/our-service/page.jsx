import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import Footer from "../(pages)/Footer"
import OurServices from "../(pages)/Our-Services/OurServices"

function page() {
  return (
    <div className='w-full h-full relative'>
      <SecondHeroSection />
      <OurServices />
      <Footer />
    </div>
  )
}

export default page