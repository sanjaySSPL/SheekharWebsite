// ProductScroll.tsx
'use client'
import React from 'react'
import DisplayCard from '../../(components)/DisplayCards'


function ProductScroll() {
  const displayCardInformation = [
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089467/unsplash_v-zpEVeWjy0_xgcrnh.svg',
      data_text: 'Built for premium performance in paneer processing — helps achieve soft texture, brighter appearance, and better cutting strength. Engineered for consistency across high-yield operations.',
      data_detailed_link: `/products#dairy-products`,
      title:'Paneer'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089465/unsplash_-cQ2kQqpEB8_epedni.svg',
      data_text: 'Delivers enhanced creaminess, melt resistance, and volume in frozen dairy products. Crafted for smooth scooping and lasting taste',
      data_detailed_link: '/products#dairy-based-dessert',
      title:'Ice Cream'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089466/unsplash_CBwoyP69nAU_flajpz.svg',
      data_text: 'A solution designed for smoother fermented dairy drinks — enhancing body and taste while preventing whey separation. Keeps traditional flavors fresh with modern consistency',
      data_detailed_link: '/products#dairy-products',
      title:'Lassi'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089466/unsplash_v2XfTVtDK_o_jywjvx.svg',
      data_text: 'Adds crunch and bite retention to fried and baked snacks. Maintains texture from production to plate.',
      data_detailed_link: '/products#sauces-snacks',
      title:'Crunchy'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089463/unsplash_8bPrY855BIc_efegqi.svg',
      data_text: 'Built for creamy textures and smooth finishes — this solution stabilizes emulsions in mayonnaise and dips. Performs in cold-process and low-fat formats.',
      data_detailed_link: 'products#sauces-snacks',
      title:'Mayonnaise'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089463/unsplash_1WVjdMmzrik_yxlift.svg',
      data_text: 'Enhances richness and body in dairy creams — delivering a silky, smooth mouthfeel with excellent consistency. Built to retain texture under varied conditions.',
      data_detailed_link: '/products#dairy-based-dessert',
      title:'Cream'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089465/unsplash_cd1PW0FAi-E_txtvtx.svg',
      data_text: 'Designed for clean, fruit-forward sorbets with excellent clarity and natural taste. Helps balance flavor sharpness with smooth texture',
      data_detailed_link: '',
      title:'Plating Agent'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089468/unsplash_wZjJYDw39o4_fzh67w.svg',
      data_text: 'Soft, uniform, and always indulgent — just mix and fry. Perfect for quick prep without compromising tradition',
      data_detailed_link: '/products#premixes',
      title:'Gulab Jamun'
    },
    {
      data_image: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751089464/unsplash_5etk9qHwNNE_ttdtbc.svg',
      data_text: 'Creamy texture, neutral base — perfect for customizing savory or cheesy sauces. Built for smooth consistency and coatability',
      data_detailed_link: '',
      title:'Creamy Sauce'
    },
  ]


   return (
    <div className="h-[560px] w-[100dvw] overflow-hidden"
      
      >
      <h1 className="md:text-[36px] sm:text-[34px] text-[36px] text-center text-text_blue font-semibold italic mx-10 md:mt-[65px] mt-[50px] mb-[50px] md:mb-[40px]">
        Tried, Tested, Trusted Ingredients
      </h1>
      
      <div className="relative w-full h-[384px] mb-10 overflow-hidden ">
        {/* Animation container */}
        <div className="animate-scroll h-fit flex gap-10 absolute my-auto">
          {/* Original cards */}
          {displayCardInformation.map((item, index) => (
            <DisplayCard
              key={`original-${index}`}
              data_image={item.data_image}
              data_text={item.data_text}
              data_detailed_link={item.data_detailed_link}
              data_title={item.title}
            />
          ))}
          
          {/* Duplicated cards for seamless looping */}
          {displayCardInformation.map((item, index) => (
            <DisplayCard
              key={`duplicate-${index}`}
              data_image={item.data_image}
              data_text={item.data_text}
              data_detailed_link={item.data_detailed_link}
              data_title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductScroll
