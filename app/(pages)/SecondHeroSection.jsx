import React from 'react'
import Image from 'next/image'
import StaticLogo from '../(components)/StaticLogo'
import Tagline from '../(components)/Tagline'

function SecondHeroSection() {
  return (
    <div className='h-[300px] w-[100dvw] relative'>
        <div className="h-full w-full absolute z-10 top-0 left-0">
            <Image 
                src='/home_img.png'
                alt='Home Image'
                layout='fill'
                objectFit='cover'
                quality={100}
                className = ''
            />
        </div>
        <div className='h-full w-full absolute inset-0 z-30 flex items-center justify-center text-center text-white px-4 h-full w-full top-0 left-0'>

        <Tagline />
        </div>

        {/* Overflow div */}
        <div className="h-full w-full absolute inset-0 z-20 from-black/20 via-black/60 to-black/90 bg-gradient-to-b" />

        {/* Content div */}
        {/* <div className="absolute inset-0 z-30 flex items-center justify-center text-center text-white px-4 h-full w-full top-0 left-0">
            <StaticLogo />
        </div> */}
    </div>
  )
}

export default SecondHeroSection