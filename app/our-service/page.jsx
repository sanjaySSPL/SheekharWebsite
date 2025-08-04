import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
// import Footer from "../(pages)/Footer"
import OurServices from "../(pages)/Our-Services/OurServices"
import Footer2 from '../(pages)/Footer2'

function page() {
  return (
    <div className='w-full h-full relative'>
      <SecondHeroSection />
      <OurServices />
      {/* <Footer /> */}
      <Footer2 />
    </div>
  )
}

export default page