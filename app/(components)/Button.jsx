import React from 'react'
import Link from 'next/link';

function Button({children, button_link ,customPaddingClass}) {
  return (
    <Link type='button' href={button_link} className={`flex items-center justify-center text-center rounded-lg bg-medium_blue hover:bg-dark_blue transition-all ease-in-out duration-150  text-text_white ${customPaddingClass}`}>
    {/* <div className='w-[178px] h-[36px]'> */}
        <p className='text-[20px]'>
          {children}
          </p>
    {/* </div> */}
    </Link>
  )
}

export default Button