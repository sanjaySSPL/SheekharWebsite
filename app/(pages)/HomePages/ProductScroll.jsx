// ProductScroll.tsx
'use client'
import React from 'react'
import DisplayCard from '../../(components)/DisplayCards'

function ProductScroll() {
  const displayCardInformation = [
    {
      data_image: '/brain.jpg',
      data_text: 'Hello World',
      data_detailed_link: 'https://www.google.com/',
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750658431/download_1_qqqece.jpg',
      data_text: 'Hello World',
      data_detailed_link: 'https://github.com/sanjaySSPL/SheekharWebsite',
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750657743/download_bmptwz.jpg',
      data_text: 'Hello World',
      data_detailed_link: '',
    },
    {
      data_image: '/brain.jpg',
      data_text: 'Hello World',
      data_detailed_link: '',
    },
    {
      data_image: '/brain.jpg',
      data_text: 'Hello World',
      data_detailed_link: '',
    },
    {
      data_image: '/brain.jpg',
      data_text: 'Hello World',
      data_detailed_link: '',
    },
  ]

   return (
    <div className="h-[568px] w-[100dvw] overflow-hidden">
      <h1 className="md:text-[36px] sm:text-[20px] text-[30px] text-center text-text_blue font-inter italic mx-10 md:mt-[65px] mt-[50px] mb-[50px] md:mb-[40px]">
        Tried, Tested, Trusted Ingredients
      </h1>
      
      <div className="relative w-full h-[384px] mb-10 overflow-hidden">
        {/* Animation container */}
        <div className="animate-scroll flex gap-10 absolute">
          {/* Original cards */}
          {displayCardInformation.map((item, index) => (
            <DisplayCard
              key={`original-${index}`}
              data_image={item.data_image}
              data_text={item.data_text}
              data_detailed_link={item.data_detailed_link}
            />
          ))}
          
          {/* Duplicated cards for seamless looping */}
          {displayCardInformation.map((item, index) => (
            <DisplayCard
              key={`duplicate-${index}`}
              data_image={item.data_image}
              data_text={item.data_text}
              data_detailed_link={item.data_detailed_link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductScroll
