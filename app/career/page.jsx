import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import CareerContactFormServerAction from '../(components)/CareerContactFormServerAction'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='h-full w-full'>
      <SecondHeroSection />
      
      {/* Career Page Content */}
      <div className="container mx-auto px-4  md:py-16">
        {/* Title */}
        <h1 className="text-[40px] md:text-[40px] lg:text-[40px] font-bold italic text-center text-blue-900 mt-[84px] mb-[70px]">
          Planning to work with sheekharr?
        </h1>
        
        {/* Contact Form */}
        <div className="flex justify-center">
          <CareerContactFormServerAction />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page