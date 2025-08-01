import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import AboutSheekharr from '../(pages)/AboutUs/AboutSheekharr'
import WhatWeDo from '../(pages)/AboutUs/WhatWeDo'
// import OurOffice from "../(pages)/AboutUs/OurOffice"
import Footer2 from "../(pages)/Footer2"
// import Globe  from "../(components)/Globe"
import Globe2 from "../(components)/Globe2"
import OurVision from '../(pages)/AboutUs/OurVision'
import OurMission from '../(pages)/AboutUs/OurMission'
import OurEthicsLoyalty from '../(pages)/AboutUs/OurEthicsLoyalty'

function page() {
  return (
    <div className='w-full h-full relative'>
      <SecondHeroSection />
      <AboutSheekharr />
      <WhatWeDo />
      <OurVision />
      <OurMission />
      <OurEthicsLoyalty />
      {/* <Globe /> */}
      <Globe2 />
      {/* <OurOffice /> */}
      <Footer2  />
    </div>
  )
}

export default page