import React from 'react'
import Image from 'next/image'

function ProductCard({image = '/brain.jpg' , title = 'Paneer' , ingredient = 'SC900' , description = 'We offer ingredient systems that improve paneer yield, softness, and structure. Our solutions reduce breakage and retain moisture during cooking or storage. Result: better texture, higher output, and cost-effective production' }) {
  return (
    <div className='h-auto w-full max-w-[617px] flex flex-col md:flex-row gap-0 border border-gray-200 rounded-lg bg-[#f7f6fb] p-4 md:p-6 mx-auto'>
      {/* Left: Image */}
      <div className='w-full md:w-[45%] flex items-center justify-center bg-red-400 rounded-md mb-4 md:mb-0'>
        <Image 
          src={image} 
          alt='Paneer Product' 
          className='h-[180px] w-auto md:h-full md:w-auto rounded-md object-cover shadow-sm' 
          height={308}
          width={300}
        />
      </div>
      {/* Right: Product Info */}
      <div className='w-full md:w-[55%] flex flex-col justify-center md:pl-6'>
        <div className='text-xl md:text-2xl font-bold italic text-[#3b4381]'>{title}</div>
        <div className='text-base md:text-lg font-medium text-[#3b4381] my-2 md:my-[10px]'>{ingredient}</div>
        <div className='text-[#3b4381] text-sm md:text-base leading-relaxed whitespace-pre-line'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProductCard