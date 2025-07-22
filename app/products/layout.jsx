import React from 'react'
import Footer from '../(pages)/Footer'

function layout({children}) {
  return (
    <div className='w-full h-full pt-20'>
        {children}
        <Footer />
    </div>
  )
}

export default layout