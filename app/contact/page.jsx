import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'

import ContactUsPage2 from '../(pages)/ContactUsPage2'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='w-full h-full'>
      <SecondHeroSection />
    
      <ContactUsPage2 />
      <Footer />
      
    </div>
  )
}

export default page