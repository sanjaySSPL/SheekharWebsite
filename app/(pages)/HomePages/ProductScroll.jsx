import React from 'react'
import DisplayCard from '../../(components)/DisplayCards'

function ProductScroll() {
  return (
    <div className='h-[468] w-[100dvw]'>
        <h1 className='md:text-[36px] sm:text-[20px] text-[30px] text-center text-text_blue font-abhaya-extraBold mx-10 md:mt-[65px] mt-[50px] mb-[50px] md:mb-[40px]'>Tried, Tested, Trusted Ingredients</h1>

        <div className='w-[100dvw] h-[468px] bg-red-400'>

            <DisplayCard data_image='/brain.jpg' data_text=''  data_detailed_link = '' />
        </div>
    </div>
  )
}

export default ProductScroll