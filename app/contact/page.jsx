import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import MapComponent from '../(components)/MapComponent'
import ContactUsPage2 from '../(pages)/ContactUsPage2'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='w-full h-full'>
      <SecondHeroSection />
      <MapComponent />
      <ContactUsPage2 />
      <Footer />
      
    </div>
  )
}

export default page