'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import AboutNeyohm from '../(pages)/AboutUs/AboutNeyohm'
import WhatWeDo from '../(pages)/AboutUs/WhatWeDo'
// import OurOffice from "../(pages)/AboutUs/OurOffice"
// import Footer2 from "../(pages)/Footer2"

// Dynamically import Globe2 with no SSR to avoid build issues
// const Globe2 = dynamic(() => import("../(components)/Globe2_copy"), {
//   ssr: false,
//   loading: () => <div className="w-full h-[70dvh] bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e] flex items-center justify-center"><div className="text-white">Loading...</div></div>
// })

// import Globe2 from "../(components)/Globe2"
import OurVision from '../(pages)/AboutUs/OurVision'
import OurMission from '../(pages)/AboutUs/OurMission'
import OurEthicsLoyalty from '../(pages)/AboutUs/OurEthicsLoyalty'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='w-full h-full relative'>
      <SecondHeroSection />
              <AboutNeyohm />
      <WhatWeDo />
      <OurVision />
      <OurMission />
      <OurEthicsLoyalty />
      {/* <Globe />    */}
      {/* <Globe2 /> */}
      {/* <OurOffice /> */}
      {/* <Footer2  /> */}
      <Footer />
    </div>
  )
}

export default page