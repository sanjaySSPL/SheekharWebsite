import React from 'react'
// import Footer2 from '../(pages)/Footer2'
import Footer from '../(pages)/Footer'

function layout({children}) {
  return (
    <div className='w-full h-full pt-20'>
        {children}
        {/* <Footer2 /> */}
        <Footer />
    </div>
  )
}

export default layout