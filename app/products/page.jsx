import React from 'react'
import ProductCard from '../(components)/ProductCard'
import { DairyProduct } from '../data/data'

function page() {
  return (
    <div className='w-full min-h-[100dvh] flex flex-col gap-4 pt-[100px]'>
      <ProductCard />
      {/* Product Holder Divs */}
      <div className="
        flex
        flex-wrap
        flex-col
        md:flex-row
        md:flex-wrap
        justify-center
        items-center
        md:justify-center
        md:items-start
        md:gap-[20px]
        gap-10
        w-full
        bg-bg_light_blue
        h-fit
        md:min-h-[100dvh]
        px-2
      ">
        {DairyProduct.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
          >
            <ProductCard
              title={item.title}
              ingredient={item.ingredient}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page