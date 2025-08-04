import React from 'react'
import SecondHeroSection from '../(pages)/SecondHeroSection'
import CareerContactFormServerAction from '../(components)/CareerContactFormServerAction'
// import Footer2 from '../(pages)/Footer2'
import career from '../data/careerOpportunity'
import CareerCard from '../(components)/CareerCard'
import Footer from '../(pages)/Footer'

function page() {
  return (
    <div className='h-full w-full'>
      <SecondHeroSection />
      
      {/* Career Page Content */}
      <div className="container mx-auto px-4  md:py-16">
        {/* Title */}
        <h1 className="text-[40px] md:text-[40px] lg:text-[40px] font-bold italic text-center text-blue-900 mt-[84px] mb-[70px]">
          Planning to work with Sheekharr?
        </h1>
        
        {/* Contact Form */}
        <div className="flex justify-center">
          <CareerContactFormServerAction />
        </div>

        <div className="w-[100dvw] -ml-4 md:-ml-20  mt-[50px] bg-secondary_blue_bg py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-4">
            {career?.map((item, index) => (
              <CareerCard key={index} {...item} />
            ))}
          </div>
        </div>


      </div>
      {/* <Footer2 /> */}
      <Footer />
    </div>
  )
}

export default page