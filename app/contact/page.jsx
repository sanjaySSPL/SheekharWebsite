import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import ContactUsPage from '../(pages)/ContactUsPage'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='w-full h-full'>
      <SecondHeroSection />
      <ContactUsPage />
      <Footer />
      
    </div>
  )
}

export default page