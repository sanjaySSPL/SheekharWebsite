import React from 'react'
import Button from '../../(components)/Button'

function ChooseSheekharIngredient() {
  return (
    <div className="h-[1200px] bg-red-500  relative">
      <div className="bg-blue-600 h-full w-full absolute z-10">

      </div>
        <div className="bg-green-500 w-[688px] absolute z-20 top-0 md:left-1/2 md:top-1/2 md:-translate-y-1/2 transform md:-translate-x-1/2">
    <h2 className='md:text-[36px] sm:text-[20px] text-[30px] text-center text-text_blue font-inter italic mx-10 md:mt-[32px] mt-[50px] mb-[50px] md:mb-[40px]'>
        Choose Sheekhar Ingredient
    </h2>

    <p className='bg-yellow-500 text-end  md:text-[20px]'>
        Trusted by brands to improve quality, shelf life, and <br/> profitability — all through smarter food solutions
    </p>
    <Button button_link='https://google.com' customPaddingClass='py-[4px] px-[18.5px] tracking-widest w-fit mt-[63px] mx-auto'>Get your customized soltuion </Button>
        </div>
    </div>
  )
}

export default ChooseSheekharIngredient