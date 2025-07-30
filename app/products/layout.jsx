import React from 'react'
import Footer2 from '../(pages)/Footer2'

function layout({children}) {
  return (
    <div className='w-full h-full pt-20'>
        {children}
        <Footer2 />
    </div>
  )
}

export default layout