import React from 'react'

function Logo() {
  return (
    <div className=' py-2  md:px-4 flex align-middle justify-center flex-col'>
        <h2 className='font-abhaya-extraBold text-[70px] md:text-[152px] text-white m-0 '>Sheekharr</h2>
        <p className=' text-[20px] md:text-[40px] text-white text-center -mt-8 md:-mt-16 font-abhaya-extraBold '> Your <span className ='text-[22px] md:text-[52px] text-blue-300'>Success</span> our <span className =' text-[22px] md:text-[50px] text-blue-300'>Ingredients</span> </p>
        {/* <p className='text-[40px] text-white text-center -mt-16 font-abhaya-extraBold '> ingredients & solution providers </p> */}
    </div>
  )
}

export default Logo