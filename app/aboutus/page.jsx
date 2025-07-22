import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import AboutSheekharr from '../(pages)/AboutUs/AboutSheekharr'
import WhatWeDo from '../(pages)/AboutUs/WhatWeDo'
// import OurOffice from "../(pages)/AboutUs/OurOffice"
import Footer from "../(pages)/Footer"

function page() {
  return (
    <div className='w-full h-full relative'>
      <SecondHeroSection />
      <AboutSheekharr />
      <WhatWeDo />
      {/* <OurOffice /> */}
      <Footer />
    </div>
  )
}

export default page